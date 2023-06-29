# PostgreSQL 연습문제 풀이

## 연습문제 6

### 연습문제 6-6
```sql
select *
from orders
where created_at between now() - interval '1 year' and now()
```

### 연습문제 6-7
```sql
select extract(year from created_at) as signup_year, count(id)
from users
group by extract(year from created_at)
order by signup_year 
```

### 연습문제 6-8
```sql
select  extract(hour from created_at) as signup_hour, count(id) as user_count
from users
group by extract(hour from created_at)
order by signup_hour
```

### 연습문제 6-9
```sql
select extract(year from created_at) as year, extract(month from created_at) as month, count(order_id) as order_count
from orders
where extract(year from created_at) = '2020'
group by year, month
```

### 연습문제 6-10
```sql
select 
id, 
first_name, 
length(first_name) as name_length, 
left(first_name, 3) as part_name, 
replace(first_name, left(first_name,3),'***') as name_with_asterisk 
from users
```

### 연습문제 6-11
```sql
select  extract(year from created_at) as signup_year, count(id) as user_count, max(age) as max_age, min(age) as min_age, round(avg(age),2) as avg_age
from users
group by extract(year from created_at)
order by signup_year 
```

### 연습문제 6-12
```sql
select extract(hour from created_at) as hour, count(id) as user_count
from users
where country = 'Brasil' and gender = 'F'
group by extract(hour from created_at)
order by hour
```

### 연습문제 6-13
```sql
select extract(year from created_at) as signup_year, country, count(id) as user_count, max(age) as max_age, min(age) as min_age, round(avg(age),2) as avg_age
from users
group by extract(year from created_at), country
having count(id) >= 100
order by signup_year desc, user_count desc
```

### 연습문제 6-14
```sql
select replace(email, substr(left(email, position('@' in email) -1),4), '*****')
from users
```
