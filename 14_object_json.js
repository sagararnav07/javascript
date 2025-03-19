
//destructureing objects


const course = {

    coursename: "js in hindi",
    price:"999Rs",
    courseInstructor:"Hitesh"
}

// const {what is the value you want to extractt} = form where do you want to extract the value

const {courseInstructor : instructor /*rename*/} = course
console.log(instructor);

