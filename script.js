const user = {
  name: "Anshul Aggarwal",
  address: {
    home: "nangal raya",
    office: {
      landmark: "district center",
      area: "janakpuri",
    },
  },
};

//console.log(user)

//thinking recursive

let finalobj = {};
let recursive = (obj, parent) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      recursive(obj[key],parent+"<"+key);
    } else {
      finalobj[parent + "<" + key] = obj[key];
      
      
    }
  }
};

recursive(user,"user");
console.log(finalobj)
