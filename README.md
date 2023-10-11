# mini-html-parser2

> 支付宝小程序基础库在 2.8.5 及之后版本已在 <rich-text nodes={{}}> 组件中内置 HTML 解析能力

## 安装

```
$ npm install mini-html-parser2 --save
```

## 使用

```js
// page.js
const html = `<div>
<span>test</span>
<div>
    <span>table test</span>
    <table>
        <thead>
            <tr>
                <th>title</th>
                <th>title</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="2">yy</td>
                <td>xx</td>
                <td>xx</td>
                <td>xx</td>
            </tr>
        </tbody>
    </table>
</div>
</div>`
import parse from 'mini-html-parser2';

Page({
  data: {
    nodes: [],
  },
  onLoad() {
    parse(html, (err, nodes) => {
      if (!err) {
        this.setData({
          nodes,
        });
      }
    })
  },
})
```

```html
<!-- page.axml -->
<rich-text nodes="{{nodes}}" />
```

## 运行测试

```
$ npm run build
$ npm test
```
