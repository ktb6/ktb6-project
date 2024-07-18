---
title: '파이썬으로 Top 15 GDP 국가별 실질 GDP 및 1인당 국내총생산 데이터 시각화하기'
date: '2024-07-18'
author: 'Danny.Jo'
description: '파이썬으로 Top 15 GDP 국가의 경제 지표 데이터를 분석하고 시각화해보기'

category: 'Blog'
image: '/images/danny/2024-07-18-01.png'
tags: ['python', 'analysis','GDP', 'economic']
---

안녕하세요. Danny입니다. 

오늘은 상위 15개 GDP 국가를 선정하여 이들의 명목 GDP와 실질 GDP를 분석해보는 시간을 가지겠습니다. 데이터 획득 방법과 가져온 데이터를 효과적으로 시각화하는 방법을 공유하고, 명목 GDP와 실질 GDP 사이의 차이를 이해해보겠습니다.

## 명목 GDP와 실질 GDP는 뭐가 다를까?

__정의__

먼저, 명목 GDP와 실질 GDP의 간단한 정의를 살펴보겠습니다

* 명목 GDP: 특정 연도의 현재 시장 가격을 기준으로 계산된 총 생산량의 가치
* 실질 GDP: 특정 기준 연도의 가격 수준을 기준으로 계산된 총 생산량의 가치

__예시__

정의만 들으면 어렵게 느껴질 수 있는데, 예를 들어 쉽게 설명해보겠습니다

* 편의점에 포카칩(66g)이 10개가 있습니다. 현재 편의점에서 포카칩은 1700원에 팔고 있습니다.
    * 포카칩 10개 = 10 * 1700원 = 17000원 (이게 명목 GDP입니다)
* 2015년에는 같은 포카칩(66g)을 1500원에 팔았습니다. 그때 가격으로 계산하면,
    * 포카칩 10개 = 10 * 1500원 = 15000원 (이게 실질 GDP입니다)

이 예시에서, 포카칩(66g)은 그때나 지금이나 동일한 물건이지만, 어느 시점의 가격을 기준으로 하느냐에 따라 총가격이 달라집니다.

__설명__

명목 GDP는 현재의 가격 수준을 반영하여 계산되므로, 지금 물건을 사기 위해 지불해야 하는 실제 비용의 총합입니다. 반면, 실질 GDP는 특정 기준 연도의 가격을 사용하여 물건값을 매긴 총합입니다.

## 왜 명목 GDP와 실질 GDP를 나누는 걸까?
명목 GDP와 실질 GDP를 나누어 지표로 사용하는 이유는 다음과 같습니다

* 가격 변동의 영향: 나라마다 같은 물건에 대해 매기는 가격이 다를 수 있으며, 인플레이션이나 디플레이션에 따라 가격이 변동합니다. 인플레이션이 심한 나라에서는 명목 GDP가 크게 부풀려질 수 있습니다. 예를 들어, 물건의 수량은 변하지 않았지만, 가격 상승으로 인해 명목 GDP가 증가하는 경우가 있습니다. 이는 경제가 실제로 성장하고 있다고 보기 어렵습니다.

* 경제 성장의 정확한 평가: 실질 GDP는 특정 기준 연도의 가격을 사용하여 인플레이션의 영향을 제거하므로, 실제 경제 성장을 더 정확하게 평가할 수 있습니다. 이는 국가 간 경제 성과를 비교할 때 중요한 역할을 합니다.


## 이번 데이터 분석의 목적
위 내용을 보면 알 수 있듯 결국 나라마다 인플레이션 수치가 크게 차이가 나는 시기에는 명목 GDP보다 실질 GDP를 따져봐야 정확한 경제 성장을 평가할 수 있다는 결론이 나옵니다. 전세계의 인플레이션 수치가 요동치는 현재, 국가별 실질 GDP를 분석하여 누가 진짜 경제 성장을 하고 있는지 알고 싶었습니다.

## 데이터 가져오기
[World Bank DataBank](https://databank.worldbank.org/source/world-development-indicators)라는 사이트에서 상위 15 GDP 국가들의 2019~2023년 명목 GDP(GDP current US$), 실질 GDP(GDP constant 2025 US$), 나라 전체 인플레이션(inflation GDP deflator), 소비자 물가 인플레이션(inflation, consumer prices)를 추출해 csv 파일로 저장했습니다.

## 데이터 분석 및 시각화
```python
import pandas as pd
import plotly.express as px
import seaborn as sns

file_path = 'Economic_Indicators_Top_15_GDP_Countries.csv'
df = pd.read_csv(file_path)

df['2022 [YR2022]'] = pd.to_numeric(df['2022 [YR2022]'], errors='coerce')
df['2023 [YR2023]'] = pd.to_numeric(df['2023 [YR2023]'], errors='coerce')

numeric_columns = ['2019 [YR2019]', '2020 [YR2020]', '2021 [YR2021]', '2022 [YR2022]', '2023 [YR2023]']
df_numeric = df[['Country Name', 'Series Name'] + numeric_columns]

df_melted = df_numeric.melt(id_vars=['Country Name', 'Series Name'], var_name='Year', value_name='Value')

df_melted['Year'] = df_melted['Year'].apply(lambda x: int(x.split()[0]))

series_names = [
    "GDP (current US$)",
    "GDP (constant 2015 US$)",
]

sns.set(style="whitegrid")

for series in series_names:
    series_data = df_melted[df_melted['Series Name'] == series]

    sorted_series_data = series_data.sort_values(by=['Year', 'Value'], ascending=[True, False])
    
    fig = px.line(
        sorted_series_data,
        x='Year',
        y='Value',
        color='Country Name',
        markers=True,
        title=f'{series} Over Years for Top 15 GDP Countries',
    )
    
    fig.update_layout(
        xaxis_title='Year',
        yaxis_title=series,
        legend_title='Country',
        hovermode='x unified'
    )

    fig.show()
```

***명목 GDP 선그래프***
![명목 GDP 선그래프](/images/danny/2024-07-18-02.png)

압도적으로 GDP가 높은 두 국가는 말 안해도 알거라 생각됩니다. 1위는 미국이고, 2위는 중국입니다.
최근 3년의 명목 GDP를 보면 중국은 정체되어있고 미국은 계속 성장하는 것처럼 보입니다. 그런데 정말 미국의 경제는 성장하고 있는 걸까요?

***실질 GDP 선그래프***
![실질 GDP 선그래프](/images/danny/2024-07-18-03.png)

네 하고 있었습니다. 미국은 실질 GDP를 따져봐도 우상향하고 있는 중입니다. 다만 정체되어있다고 생각되었던 중국 경제도 실질 GDP로 따져보니 꾸준히 우상향하고 있는 중입니다. 앞에서는 미국과 중국만 이야기했지만 그 아래 13개의 국가가 있습니다. 자세히 보면 이들도 변화가 있습니다. 근데 명목 GDP에서는 꽤나 등락이 있었던 것으로 보였는데 실질 GDP는 고요합니다. 왜 명목 GDP와 실질 GDP가 이렇게 차이가 나는 걸까요? 

## 인플레이션 수치 비교
그렇습니다. 위에서 말했듯이 명목 GDP는 인플레이션에 의해 영향을 많이 받기 때문에 실질 GDP와 다르게 움직일 수 있습니다. 각 나라마다 인플레이션 수치가 다르기 때문에 같은 물건이라도 다른 가격을 갖게 됩니다. 만약 미국에서 포카칩이 한 봉지에 2000원에 판다면 10봉지가 2만원이겠죠? 한국에서는 지금 한 봉지가 1700원이니 10봉지를 1.7만원에 살 수 있는데 말이죠. 그런데 한국과 미국이 똑같이 포카칩 10봉지를 가지고 있어도 포카칩이 더 비싼 미국이 명목 GDP가 더 높아지는 현상이 일어나는 겁니다. 이게 현실에서도 정말 적용이 되는지 인플레이션 데이터로 함께 알아보시죠.

```python
import pandas as pd
import plotly.express as px
import seaborn as sns

file_path = 'Economic_Indicators_Top_15_GDP_Countries.csv'
df = pd.read_csv(file_path)

df['2022 [YR2022]'] = pd.to_numeric(df['2022 [YR2022]'], errors='coerce')
df['2023 [YR2023]'] = pd.to_numeric(df['2023 [YR2023]'], errors='coerce')

numeric_columns = ['2019 [YR2019]', '2020 [YR2020]', '2021 [YR2021]', '2022 [YR2022]', '2023 [YR2023]']
df_numeric = df[['Country Name', 'Series Name'] + numeric_columns]

df_melted = df_numeric.melt(id_vars=['Country Name', 'Series Name'], var_name='Year', value_name='Value')

df_melted['Year'] = df_melted['Year'].apply(lambda x: int(x.split()[0]))

series_names = [
    "Inflation, GDP deflator (annual %)",
    "Inflation, consumer prices (annual %)",
]

sns.set(style="whitegrid")

for series in series_names:
    series_data = df_melted[df_melted['Series Name'] == series]

    sorted_series_data = series_data.sort_values(by=['Year', 'Value'], ascending=[True, False])
    
    fig = px.line(
        sorted_series_data,
        x='Year',
        y='Value',
        color='Country Name',
        markers=True,
        title=f'{series} Over Years for Top 15 GDP Countries',
    )
    
    fig.update_layout(
        xaxis_title='Year',
        yaxis_title=series,
        legend_title='Country',
        hovermode='x unified'
    )

    fig.show()
```

***나라 전체 인플레이션***
![나라 전체 인플레이션](/images/danny/2024-07-18-04.png)

***소비자 물가 인플레이션***
![소비자 물가 인플레이션](/images/danny/2024-07-18-05.png)

이런... 겹치는 영역이 많아서 쉽게 이해하기 어렵네요. 선그래프가 아니라 막대 그래프를 써서 다시 한 번 보겠습니다. 

### 인플레이션 막대 그래프
***나라 전체 인플레이션***
![나라 전체 인플레이션](/images/danny/2024-07-18-06.png)

***소비자 물가 인플레이션***
![소비자 물가 인플레이션](/images/danny/2024-07-18-07.png)

위 두 그래프를 보시면 알 수 있듯이 한중일의 평균 인플레이션 수치는 상위 15개 GDP 국가에서 가장 낮습니다. 미국은 전체 인플레이션은 3.65%, 소비자 물가 인플레이션은 약 4%로 한중일 인플레이션 수치보다 약 2~3% 높습니다. 그래서 미국과 인플레이션 수치가 비슷하거나 더 높은 국가는 명목 GDP와 실질 GDP의 성장률 추이가 비슷하거나 양의 상관관계를 가지고 있습니다. 

## 결론

명목 GDP와 실질 GDP가 다르게 움직이는 이유가 오직 인플레이션 때문만은 아닙니다. 그 외에도 환율, 국가 경제 정책, 산업 구조 변경 등이 이 둘의 차이를 만드는 데요. 그래도 가장 큰 영향을 미치는 것이 물가 수준이었기 때문에 명목 GDP과 인플레이션 변동률 사이의 관계에 대해 알아봤습니다. 어느정도 예상한 대로 나왔지만 법칙처럼 딱 떨어지는 것은 아니었기 때문에 신중하게 접근해야할 것 같습니다. 

지금까지 Danny였습니다.
