# ks_poc

## Requirement

## Client 說明

### client-front

- Angular 9 專案
- 欲透過第三方服務 (server) 驗證的網站
- 預設 listen 在 http[://]localhost:4201
- 啟用方法：

```
ng serve
```

### client-back

- ASP.NET Core 3.1 專案
- 預設 listen 在 http[://]localhost:5000 以及 https[://]localhost:5001
- 啟用方法：

```
dotnet run
```

## Server 說明

### server-front

- Angular 9 專案
- 提供第三方驗證服務 (server)
- 預設 listen 在 http[://]localhost:4200
- 啟用方法：

```
ng serve
```

### server-back

- ASP.NET Core 3.1 專案
- 預設 listen 在 http[://]localhost:5003 以及 https[://]localhost:5004
- 啟用方法：

```
dotnet run
```

## DEMO 流程

1. 連上 client-front 的網站
2. 點擊 button
3. 跳轉到第三方服務、輸入驗證資訊
4. 驗證通過後跳轉回 client-front