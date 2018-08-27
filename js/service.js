var service = [
  {
    title: "ERC member",
    venue: "PLDI 2019: ACM Conference on Programming Language Design and Implementation",
    link: "https://conf.researchr.org/home/pldi-2019"
  },
  {
    title: "AEC member",
    venue: "SAS 2018: Static Analysis Symposium",
    link: "http://staticanalysis.org/sas2018/sas2018.html"
  }
]

function write() {
  var section = document.getElementById("service-section");
  var html = "<ul>";
  service.forEach(function(entry) {
    html += "<li>" + entry['title'] + ", ";
    html += "<a href=\"" + entry.link + "\">" + entry.venue + "</a>";
    html += "</li>";
  })
  section.innerHTML = html + "</ul>";
}

write();
