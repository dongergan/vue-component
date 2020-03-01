<template>
    <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]"
    :style="{paddingLeft: gutter/2 + 'px',paddingRight:gutter/2 + 'px'}">
    <div>
      <slot></slot>
    </div>
        
    </div>
</template>
<script>
export default {
    name:'Gcol',
    props:{
      span:{
        type:[Number,String]
      },
      offset:{
        type:[Number,String]
      },
      gutter:{
        type:[Number,String]
      }      
    },
    data() {
     return {
        gutter:0
      }
    },
    //computed: {
      //colStyle(){
        //return {
         // paddingLeft: this.gutter / 2 + 'px',
         // paddingRight:this.gutter /2 + 'px'
      //  }
     // }
  //  },
 // :style="colStyle"
}
</script>
<style scoped>

.col.col-1 {
  width:4.1666666%;
}
.col.col-2 {
  width: 8.33333%;
}
.col.col-3 {
  width: 12.49999%;
}
.col.col-4 {
  width: 16.66666%;
}
.col.col-5 {
  width: 20.83333%;
}
.col.col-6 {
  width: 24.99999%;
}
.col.col-7 {
  width: 29.166666%;
}
.col.col-8 {
  width: 33.333332%;
}
.col.col-9 {
  width: 37.499988%;
}
.col.col-10 {
  width: 41.666654%;
}
.col.col-11 {
  width: 45.83332%;
}
.col.col-12 {
  width: 49.99986%;
}
.col.col-13 {
  width: 54.16652%;
}
.col.col-14 {
  width: 58.33332%;
}
.col.col-15 {
  width: 62,499984%;
}
.col.col-16 {
  width: 66.66665%;
}
.col.col-17 {
  width: 70.833333%;
}
.col.col-18 {
  width: 74.999988%;
}
.col.col-19 {
  width: 79.166654%;
}
.col.col-20 {
  width: 83.33332%;
}
.col.col-21 {
  width: 87.499986%;
}
.col.col-22 {
  width: 91.666652%;
}
.col.col-23 {
  width: 95.833318%;
}
.col.col-24 {
  width: 100%;
}
.col.offset-1 {
  margin-left: 4.1666666%;
}
.col.offset-2 {
  margin-left: 8.33333%;
}
.col.offset-3 {
  margin-left: 12.49999%;
}
.col.offset-4 {
  margin-left: 16.66666%;
}
.col.offset-5 {
  margin-left: 20.83333%;
}
.col.offset-6 {
  margin-left: 24.99999%;
}
.col.offset-7 {
  margin-left: 29.166666%;
}
.col.offset-8 {
  margin-left: 33.333332%;
}
.col.offset-9 {
  margin-left: 37.499988%;
}
.col.offset-10 {
  margin-left: 41.666654%;
}
.col.offset-11 {
  margin-left: 45.83332%;
}
.col.offset-12 {
  margin-left: 49.99986%;
}
.col.offset-13 {
  margin-left: 54.16652%;
}
.col.offset-14 {
  margin-left: 58.33332%;
}
.col.offset-15 {
  margin-left: 62,499984%;
}
.col.offset-16 {
  margin-left: 66.66665%;
}
.col.offset-17 {
  margin-left: 70.833333%;
}
.col.offset-18 {
  margin-left: 74.999988%;
}
.col.offset-19 {
  margin-left: 79.166654%;
}
.col.offset-20 {
  margin-left: 83.33332%;
}
.col.offset-21 {
  margin-left: 87.499986%;
}
.col.offset-22 {
  margin-left: 91.666652%;
}
.col.offset-23 {
  margin-left: 95.833318%;
}
.col.offset-24 {
  margin-left: 100%;
}
.col {
  height: 100px;
 
  width: 50%;

  
}
</style>