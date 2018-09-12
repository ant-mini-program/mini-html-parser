const parse = require('../lib');

describe('html parser', () => {
  it('basic', function () {
    const html = `test <div>xx <span>yyy</span></div>`;
    parse(html, (err, nodes) => {
      expect(err).toBeFalsy();
      expect(nodes).toEqual([
        { type: "text", text: "test "},
        {
          attrs: {},
          name: 'div',
          children: [
            { type: "text", text: "xx "},
            {
              attrs: {},
              name: 'span',
              children: [
                { type: "text", text: "yyy"},
              ]
            },
          ]
        },
      ])
    })
  });
  it('support selfClose element', function () {
    const html = `<input />`
    parse(html, (err, nodes) => {
      expect(err).toBeFalsy();
      expect(nodes).toEqual([
        {
          attrs: {},
          name: 'input',
          children: [],
        },
      ]);
    })
  });
  it('support attrs', function () {
    const html = `<img src="http://xxx.com/yyy.png" alt="test">`;
    parse(html, (err, nodes) => {
      expect(err).toBeFalsy();
      expect(nodes).toEqual([
        {
          attrs: { src: 'http://xxx.com/yyy.png', alt: 'test' },
          name: 'img',
          children: [],
        },
      ])
    })
  });
  it('does not support directive', function () {
    const html = `<!DOCTYPE html><html><title>The Title</title><body>Hello world</body></html>`;
    parse(html, (err) => {
      expect(err).toBeTruthy();
    })
  });
});

