interface Tabs{
    id: number;
    title: string;
    model: string;
}
export  class DateTabs implements Tabs {
    constructor(public id:number, public model:string, public title:string ){
        
    }
}
