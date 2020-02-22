class Set {
 constructor(){
   this.items = {}
 }
 add(val){
   if(!this.has(val)){
     this.items[val] = val;
   }
 }
 has(val){
   return this.items.hasOwnProperty(val);
 }
 remove(val){
   if(this.has(val)){
     delete this.items[val];
   }
 }
 get size(){
   return Object.keys(this.items).length;
 }
}