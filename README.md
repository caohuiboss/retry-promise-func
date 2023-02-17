# retry-promise-func

retry-promise-func 是一个用于在失败时重试 Promise 调用的工具。

## 安装

使用 npm 安装： npm install retry-promise-func

使用 yarn 安装： yarn add retry-promise-func

## 使用

使用方法非常简单。只需导入 retry 函数并调用它即可：

```typescript
import { retry } from "retry-promise";

retry(someFunction, someParams, 10, 2000)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```
