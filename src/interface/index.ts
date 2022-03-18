//接口来描述对象，在实现接口时候只要保证包含了接口要求的结构
//接口，当我们用这个接口去约束我们的登录请求的返回主体，我们在任何一个地方需要用到用户信息，那么编辑器会自动接口提示所有的属性和类型，当我们想用不属于该数据类型的方法时，tslint将会报错，在开发阶段便帮我们解决了许多潜在bug
export interface Product {
    id:string;
    name: string;
    desc: string;
    create_time:string;
    urls:Array<string>
}


