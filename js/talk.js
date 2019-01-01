var korean = "&#x1F1F0;&#x1F1F7;"
var talks = [
  {
    title: "Continuous and Interactive Program Reasoning",
    venue: "Korea University and Seoul National University",
    date: "Dec 2018",
    slides: "slide/drake18.pdf"
  },
  {
    title: "Program Transformation for Reducing Software Complexity",
    venue: "Korea University",
    date: "07/09/2018",
    slides: "slide/chisel-ku.pdf"
  },
  {
    title: "User-Guided Program Reasoning using Bayesian Inference",
    venue: "KAIST",
    date: "07/06/2018",
    slides: "slide/bingo-kaist.pdf"
  },
  {
    title: "Interactive Alarm Ranking System using Bayesian Inference",
    venue: "Korea University",
    date: "01/04/2018",
    slides: "slide/bingo-ku.pdf"
  },
  {
    title: "Machine-Learning-Guided Selectively Unsound Static Analysis",
    venue: "Naver",
    date: "06/26/2017",
    slides: "slide/icse17-naver.pdf",
    video: "https://youtu.be/71rReJrf_6Q",
    korean: true
  },
  {
    title: "Selectively Sensitive Static Analysis by Impact Pre-analysis and Machine Learning",
    venue: "Ph.D. Defense",
    date: "05/02/2017",
    slides: "slide/thesis-slides.pdf",
    korean: true
  },
  {
    title: "Inferbo: Infer-based buffer-overrun analyzer",
    venue: "Korea University",
    date: "04/14/2017",
    slides: "slide/inferbo.pdf",
    korean: true
  },
  {
    title: "Inferbo: Infer-based buffer-overrun analyzer",
    venue: "KAIST",
    date: "03/24/2017",
    slides: "slide/inferbo.pdf",
    korean: true
  },
  {
    title: "Selectively Sensitive Static Analysis by Impact Pre-analysis and Machine Learning",
    venue: '<a href="http://www.codemind.co.kr">Codemind</a>',
    date: "02/20/2017",
    slides: "slide/selective-codemind.pdf",
    korean: true
  }
]

function write() {
  var section = document.getElementById("talk-section");
  var html = "<ul>";
  talks.forEach(function(entry) {
    html += "<li>" + entry['title'] + ", ";
    html += entry.venue + ", "
    html += entry.date + ". "
    if ('slides' in entry)
      html += " [<a href=\"" + entry.slides + "\">slides</a>]";
    if ('poster' in entry)
      html += " [<a href=\"" + entry.poster + "\">poster</a>]";
    if ('video' in entry)
      html += " [<a href=\"" + entry.video + "\">video</a>]";
    if ('korean' in entry)
      html += " " + korean;
    html += "</li>"
    html += "<br>";
  })
  section.innerHTML = html + "</ul>";
}

write();
