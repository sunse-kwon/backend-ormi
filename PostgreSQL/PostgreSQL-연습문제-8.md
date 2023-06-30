# PostgreSQL 연습문제 풀이


## 연습문제 8

### 연습문제 8-1
```sql
select o.order_id, o.num_of_item , u.first_name ,u.last_name ,u.street_address ,u.postal_code ,u.city ,u.country 
from orders o left join users u on o.user_id = u.id 
```

### 연습문제 8-2
```sql
select o.order_id, u.first_name , u.last_name , u.street_address ,u.postal_code , u.city ,u.country ,o.num_of_item 
from users u join orders o on u.id = o.user_id
where u.country = 'United States' and o.status = 'Processing'
```

### 연습문제 8-3
```sql
select u.country, count(o.order_id) as total_order_count
from users u join orders o on u.id = o.user_id 
group by country
order by total_order_count desc
```

### 연습문제 8-4
```sql
select oi.id as order_items_id, oi.order_id ,p.cost, p.category, p.name, p.brand, p.retail_price, oi.status, oi.created_at, oi.shipped_at, oi.delivered_at 
from order_items oi join products p on oi.product_id = p.id 
where p.category = 'Outerwear & Coats'
order by created_at desc
```

### 연습문제 8-5
```sql
select 
oi.id as order_items_id,
oi.order_id ,
to_char(oi.created_at, 'YYYY-MM-DD') as order_date,
p.name, 
oi.status, 
p.cost, 
p.retail_price, 
p.category, 
p.brand
from order_items oi join products p on oi.product_id = p.id
where created_at::date between '2022-01-01' and '2022-12-31'
order by order_date 
```

### 연습문제 8-6
```sql
select brand, round(avg(sale_price), 2) as avg_brand_sale_price
from order_items oi join products p on oi.product_id = p.id
group by brand
order by brand
```

### 연습문제 8-7
```sql
select created_at ::date as order_date, p.name product_name, count(oi.order_id) as order_count, round(sum(sale_price),2) as sum_sale_price, round(avg(sale_price),2) as avg_sale_price
from order_items oi join products p on oi.product_id = p.id
where p.department = 'Women' and oi.status = 'Complete'
group by created_at ::date , p.name
having count(oi.order_id) >= 2
order by order_date, product_name
```

### 연습문제 8-8
```sql
select oi.order_id, sum(p.cost) as sum_cost, sum(p.retail_price) as sum_retail_price, sum(p.retail_price - p.cost) as sum_profit
from order_items oi join products p on oi.product_id = p.id 
group by oi.order_id 
```

### 연습문제 8-9
```sql
select created_at::date as date, 
sum(case when event_type = 'home' then 1 end) as home,
sum(case when event_type = 'department' then 1 end) as department,
sum(case when event_type = 'product' then 1 end) as product,
sum(case when event_type = 'cart' then 1 end) as cart,
sum(case when event_type = 'purchase' then 1 end) as purchase,
sum(case when event_type = 'cancel' then 1 end) as cancel
from events
group by date
order by date
```