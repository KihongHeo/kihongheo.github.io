var project = [
  {
    title: "ASPIRE: Transformations for Reducing Software Complexity",
    link: "https://aspire.cis.upenn.edu"
  },
  {
    title: "Petablox: Declarative Program Analysis for Big Code",
    link: "http://petablox.org"
  },
  {
    title: "Inferbo: Infer-based buffer overrun analyzer",
    link: "https://github.com/facebook/infer",
    note: "(available via Facebook <a href=\"http://fbinfer.com\">Infer</a>)",
    misc: [
      "[<a href=\"https://research.fb.com/inferbo-infer-based-buffer-overrun-analyzer/\">Facebook Research Blog</a>]",
      "[<a href=\"https://news.ycombinator.com/item?id=13583097\">Hacker News</a>]"
    ]
  },
  {
    title: "Sparrow: a static analyzer for C program",
    link: "http://ropas.snu.ac.kr/sparrow",
  },
  {
    title: "Global Sparse Analysis Framework",
    link: "http://ropas.snu.ac.kr/sparseanalysis"
  },
  {
    title: "SNEC: Semantic-based Non-Essential Change Detection",
    link: "http://ropas.snu.ac.kr/snec"
  },
  {
    title: "Software Watermarking for C/C++/JAVA",
    link: "http://www.codejam.or.kr",
    misc: [
      "[<a href=\"http://www.dt.co.kr/contents.html?article_no=2009030602010660600003\">news</a>]",
      "[<a href=\"http://academic.naver.com/view.nhn?doc_id=44216474&amp;ApplicationNumber=1020090128917&amp;dir_id=0&amp;page=0&amp;query=Copyright information inserting system and method\">patent</a>]"
    ]
  }
]

function write() {
  var section = document.getElementById("project-section");
  var html = "<ul>";
  project.forEach(function(entry) {
    html += "<li>"
    html += "<a href=\"" + entry.link + "\">" + entry.title + "</a>";
    if ('note' in entry) {
      html += " " + entry.note
    }
    if ('misc' in entry) {
      html += "<br>"
      entry.misc.forEach(function(entry) {
        html += entry
      })
    }
    html += "</li>";
  })
  section.innerHTML = html + "</ul>";
}

write();
