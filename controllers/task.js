 exports.allTasks = async (ctx)=>{
     ctx.body = [
         {name:'bota'},
         {name:'robin'}
     ]
 }
 exports.renderHello = async (ctx)=>{
     await ctx.render('hello',{
         user:'robin'
     })
 }