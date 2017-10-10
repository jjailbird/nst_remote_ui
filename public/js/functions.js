Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [this.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('');
};
Date.prototype.yyyymmddhhmmss = function() {

  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();
  var day = "" + this.getDate(); if (day.length == 1) { day = "0" + day; }
  var hour = "" + this.getHours(); if (hour.length == 1) { hour = "0" + hour; }
  var minute = "" + this.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
  var second = "" + this.getSeconds(); if (second.length == 1) { second = "0" + second; }
  return [this.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd,
          day,hour,minute, second
         ].join('');

};

String.prototype.format = function() {
  a = this;
  for (k in arguments) {
    a = a.replace("{" + k + "}", arguments[k])
  }
  return a
}

function TESTsnapshotCurrentPage(e) {
  alert('sava!');
  //console.log();
  html2canvas(document.body).then(function(canvas) {
    // document.body.appendChild(canvas);
  }); 

  var link = document.createElement('a');
    link.innerHTML = 'download image';
    link.addEventListener('click', function(ev) {
        link.href = canvas.toDataURL();
        link.download = "mypainting.png";
    }, false);
  }

function test() {
  
  alert('test');
}