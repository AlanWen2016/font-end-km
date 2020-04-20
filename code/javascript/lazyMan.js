
class LazyManGenerator {
    constructor(name){
        this.name = name;
        this.taskArray = [];
        
        let task = ()=>{
            console.log(` Hi! This is ${name}!`);
            this.next();
        }
        this.taskArray.push(task);
        setTimeout(()=>{
            this.next();
        })
    }
    next(){
        let curTask = this.taskArray.shift();
        curTask && curTask();
    }

    sleep(second){
        this.sleepTask(second);
        return this;
    }
    sleepTask(second){
        let task = ()=>{
            console.log(`等待${second} 秒..`);
            setTimeout(()=>{
                console.log(` Wake up after ${second}s`);
                this.next();
            }, second *1000)
        }
        this.taskArray.push(task);
       
    }
    
    eat(food){
        let task = ()=>{
            console.log(`Eat ${food}`);
            this.next();
            return this;
        }
        this.taskArray.push(task);
        return this;
    }
    sleepFirst(second) {
        let task = ()=>{
            console.log(`等待 ${second} 秒`);
            setTimeout(()=>{
                console.log(`Wake up after ${second}`);
                this.next();
            }, second * 1000)
        }
        this.taskArray.unshift(task);
        return this;
    }

    

}


function LazyMan(name){
    return new LazyManGenerator(name);
}

// LazyMan("Hank")
// Hi! This is Hank!
 
// LazyMan("Hank").sleep(10).eat("dinner")
// Hi! This is Hank!
// 等待10 秒..
// Wake up after 10
// Eat dinner~
 
// LazyMan("Hank").eat("dinner").eat("supper");
// Hi This is Hank!
// Eat dinner~
// Eat supper~
 
LazyMan("Hank").sleepFirst(5).eat("supper")
// 等待 5 秒
// Wake up after 5
// Hi This is Hank!
// Eat supper