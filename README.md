pagination
==========

```javascript
var pages = pagination({ total: 25, rows: 10 });
// pages = [1, 2, 3]

var pages = pagination({ total: 1000, rows: 10, visible: 5, page: 15 });
// pages = [13, 14, 15, 16, 17]
```
