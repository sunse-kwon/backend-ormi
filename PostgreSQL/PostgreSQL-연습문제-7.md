# PostgreSQL 연습문제 풀이

## CASE 기본개념
조건별 처리방법  (when 조건 then 실행 )
```sql
select id, email, gender,
case when gender = 'M' then 'O' end as is_male,
case when gender = 'F' then 'O' end as is_female
from users
```

조건에 대한 것들만 count 하기
```sql
select 
extract (year from created_at) as year,
count(case when gender = 'M' then 'O' end) as male_count,
count(case when gender = 'F' then 'O' end) as female_count,
count(id) as total
from users
group by year
order by year
```

연도별 연령 그룹마다 user 카운트
```sql
select 
extract (year from created_at) as year,
count(case when age between 10 and 19 then 'O' end) as "10_19",
count(case when age between 20 and 29 then 'O' end) as "20_29",
count(case when age between 30 and 39 then 'O' end) as "30_39",
count(case when age between 40 and 49 then 'O' end) as "40_49",
count(case when age between 50 and 59 then 'O' end) as "50_59",
count(id) as total
from users
group by year
order by year
```

분기별 가입자수
```sql
select
extract(year from created_at) as year,
count(case when extract(quarter from created_at) = 1 then 'O' end) as is_q1,
count(case when extract(quarter from created_at) = 2 then 'O' end) as is_q2,
count(case when extract(quarter from created_at) = 3 then 'O' end) as is_q3,
count(case when extract(quarter from created_at) = 4 then 'O' end) as is_q4,
count(id) as total
from users
group by year
order by year
```

## 연습문제 7

### 연습문제 7-1
```sql
select 
order_id, 
gender, 
case 
	when gender = 'M' then'남성'
	when gender = 'F' then'여성'
	else '없음'
end as gender_label
from orders
order by order_id

--위에꺼와 동일, 이렇게도 표현가능
select 
order_id, 
gender, 
case gender
	when 'M' then'남성'
	when 'F' then'여성'
	else '없음'
end as gender_label
from orders
order by order_id
```

### 연습문제 7-2
```sql
select 
	id, 
	extract(year from created_at) as year, 
	extract(month from created_at) as month, 
	extract(day from created_at) as day, traffic_source,
	case 
	when traffic_source = 'Search' then '검색엔진'
	when traffic_source = 'Organic' then '검색결과'
	when traffic_source = 'Email' then '이메일'
	when traffic_source = 'Display' then '디스플레이 광고'
	when traffic_source = 'Facebook' then '페이스북'
	end as traffic_source_label
from users
order by id
```

### 연습문제 7-3
```sql
select extract(year from created_at) as year,
	count(case when traffic_source = 'Search' then 'O' end) as Search,
	count(case when traffic_source = 'Organic' then 'O' end) as Organic,
	count(case when traffic_source = 'Email' then 'O' end) as Email,
	count(case when traffic_source = 'Display' then 'O' end) as Display,
	count(case when traffic_source = 'Facebook' then 'O' end) as Facebook, 
	count(id) as total
from users
group by year
order by year
```

### 연습문제 7-4
```sql
select user_id, count(order_id) as order_count, 
case 
	when count(order_id) >= 4 then 'VIP' 
	when count(order_id) >= 3 then 'Gold'
	else 'Silver'
end
from orders
group by user_id
```

### 연습문제 7-5
```sql
select id, name, 
case
	when right(name, 5) like '%XS%' then 'XS'
	when right(name, 5) like '%S%' then 'S'
	when right(name, 5) like '%M%' then 'M'
	when right(name, 5) like '%L%' then 'L'
	when right(name, 5) like '%XL%' then 'XL'
	when right(name, 5) like '%XXL%' then 'XXL'
	else NULL
end as size
from products
order by size desc
```

### 연습문제 7-6
```sql
select extract(year from created_at) as year, extract(quarter from created_at) as quarter, round(sum(sale_price),2) as sum_sale_price
from order_items
group by year, quarter
order by year, quarter
```

### 연습문제 7-7 
```sql
--분기별 매출
select 
extract(year from created_At) as year,
sum(case when extract(quarter from created_at) = 1 then sale_price end)  as q1,
sum(case when extract(quarter from created_at) = 2 then sale_price end)  as q2,
sum(case when extract(quarter from created_at) = 3 then sale_price end)  as q3,
sum(case when extract(quarter from created_at) = 4 then sale_price end)  as q4,
round(sum(sale_price),2) as total
from order_items
where status = 'Complete'
group by year
order by year

-- 월별 매출
select 
extract(year from created_At) as year,
sum(case when extract(month from created_at) = 1 then sale_price end)  as m1,
sum(case when extract(month from created_at) = 2 then sale_price end)  as m2,
sum(case when extract(month from created_at) = 3 then sale_price end)  as m3,
sum(case when extract(month from created_at) = 4 then sale_price end)  as m4,
sum(case when extract(month from created_at) = 5 then sale_price end)  as m5,
sum(case when extract(month from created_at) = 6 then sale_price end)  as m6,
sum(case when extract(month from created_at) = 7 then sale_price end)  as m7,
sum(case when extract(month from created_at) = 8 then sale_price end)  as m8,
sum(case when extract(month from created_at) = 9 then sale_price end)  as m9,
sum(case when extract(month from created_at) = 10 then sale_price end)  as m10,
sum(case when extract(month from created_at) = 11 then sale_price end)  as m11,
sum(case when extract(month from created_at) = 12 then sale_price end)  as m12,
round(sum(sale_price),2) as total
from order_items
where status = 'Complete'
group by year
order by year
```
