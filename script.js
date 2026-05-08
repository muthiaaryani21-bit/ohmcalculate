function hitung(){

  let v = document.getElementById("v").value;

  let i = document.getElementById("i").value;

  let r = document.getElementById("r").value;

  if(v == ""){
    v = i * r;
    document.getElementById("v").value = v;
  }

  else if(i == ""){
    i = v / r;
    document.getElementById("i").value = i;
  }

  else if(r == ""){
    r = v / i;
    document.getElementById("r").value = r;
  }

  else{
    alert("Kosongkan satu nilai");
    return;
  }

  document.getElementById("hv").innerHTML = v;

  document.getElementById("hi").innerHTML = i;

  document.getElementById("hr").innerHTML = r;
}