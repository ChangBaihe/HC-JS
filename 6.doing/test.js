const testDate = () => {
    let [a,b,c,d,e,f] = [
        new Date('2018-09-16'),
        new Date('2018-9-16'),
        new Date('2018-9-01'),
        new Date('2018-9-1'),
        new Date('2018-10-16'),
        new Date()
    ];
    let str = `    a: ${a.toLocaleString()}     <-- new Date('2018-09-16').toLocaleString()
        b: ${b.toLocaleString()}     <-- new Date('2018-9-16').toLocaleString()
        c: ${c.toLocaleString()}      <-- new Date('2018-9-01').toLocaleString()
        d: ${d.toLocaleString()}      <-- new Date('2018-9-1').toLocaleString()
        e: ${e.toLocaleString()}    <-- new Date('2018-10-16').toLocaleString()
        f: ${f.toLocaleString()}    <-- new Date().toLocaleString()`;
    console.log(str);
    const convertDate = (date) => {
        try {
            let temp = date.toLocaleString().replace(/-/g,'/');
            return new Date(temp);
        } catch (error) {
            return date;
        } 
    };

    let date =  new Date();
    let temp = date.toLocaleDateString().replace(/-/g,'/');
    console.log(temp);
    date = new Date(temp);
    console.log(date.toLocaleString())
    console.log(date.toISOString());
};

const testSign = () => {
    let [a] = '‽';
    console.log(a.charCodeAt());
    console.log(String.fromCharCode(8253));
};

const compile = (template) => {
    const evalExpr = /<%=(.+?)%>/g;
    const expr = /<%([\s\S]+?)%>/g;
  
    template = template
      .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
      .replace(expr, '`); \n $1 \n  echo(`');
  
    template = 'echo(`' + template + '`);';
  
    let script =
    `(function parse(data){
      let output = "";
      function echo(html){
        output += html;
      }
      ${ template }
      return output;
    })`;
    return script;
};

const testStringES6 = () => {
    let template = `<ul>
    <% for(let i=0; i < data.supplies.length; i++) { %>
        <li><%= data.supplies[i] %></li>
    <% } %>
    </ul>`;
    let parse = eval(compile(template));
    let str = parse({ supplies: [ "broom", "mop", "cleaner" ] });
    console.log(str);
};

const testArrowAndFunction = () => {
    let arrow = () => {
        console.log(this);
    };
    let func = function () {
        console.log(this);
    };
    arrow('a','b','c');
    func('a','b','c');
};

const testStringRawES6 = () => {
    let siteName = 'jack';
    let visitorNumber = 111;
    let arr = String.raw`Welcome to ${siteName}, you are visitor number ${visitorNumber}!`;
    console.log(arr);
};

const testCallApplyBind = () => {
    let numbers = [5, 6, 2, 3, 7];
    let max = Math.max.apply(null, numbers);
    let min = Math.min.apply(null, numbers);
    let t = Math.max(numbers);
    let str = String.raw`${max}_${min}_${t}`;
    console.log(str);
};

const testProcess = () => {
    
};

//测试
(async () => {
    // let a = [1,2,3,4,5,6];
    // let b = [11,10,9,8,7];
    // console.log(a,b);
    // a.length=0;
    // [a,b]= [b,a];
    // console.log(a,b);
    // let a = `
    // <table>
    //     <tbody>
    //         <tr>
    //             <td>A.<span class='matd inline'>${'\{ 0\}'}$</span></td>
    //             <td>C.<span class='matd inline'>${'\{ x|0 &lt; x &lt; 3\}'}$</span></td>
    //         </tr>
    //         <tr class='odd'>
    //             <td>B.<span class='math inline'>${'\{ x|x &lt; 0\}'}$</span></td>
    //             <td>D.<span class='math inline'>${'\{ 1,\, 2\}'}$</span></td>
    //         </tr>
    //     </tbody>
    // </table>
    // `;
    // let b = a.replace(/<span><\/span>/,'');
    // console.log(b);
    testProcess();
})();
