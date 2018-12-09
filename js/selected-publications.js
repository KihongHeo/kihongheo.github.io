var kihong = "<strong>Kihong Heo</strong>"
var mayur = "<a href=\"http://www.cis.upenn.edu/~mhnaik\">Mayur Naik</a>"
var rajeev = "<a href=\"http://www.cis.upenn.edu/~alur/home.html\">Rajeev Alur</a>"
var mukund = "<a href=\"https://www.cis.upenn.edu/~rmukund\">Mukund Raghothaman</a>"
var hakjoo = "<a href=\"http://prl.korea.ac.kr/~pronto/home\">Hakjoo Oh</a>"
var hongseok = "<a href=\"https://sites.google.com/view/hongseokyang/home\">Hongseok Yang</a>"
var woosuk = "<a href=\"http://ropas.snu.ac.kr/~wslee\">Woosuk Lee</a>"
var kwang = "<a href=\"http://ropas.snu.ac.kr/~kwang\">Kwangkeun Yi</a>"

var pubs = [
  {
    title: "Effective Program Debloating via Reinforcement Learning",
    author: [kihong, woosuk, "Pardis Pashakhanloo", mayur],
    cofirst: [0, 1],
    venue: '<a href="https://www.sigsac.org/ccs/CCS2018">CCS 2018: ACM Conference on Computer and Communications Security</a>',
    year: 2018,
    paper: "paper/ccs18.pdf",
    slides: "slide/ccs18-slides.pdf",
    code: "https://github.com/aspire-project/chisel"
  },
  {
    title: "User-Guided Program Reasoning using Bayesian Inference",
    author: [mukund, "Sulekha Kulkarni", kihong, mayur],
    venue: '<a href="https://conf.researchr.org/home/pldi-2018">PLDI 2018: Programming Language Design and Implementation</a>',
    year: 2018,
    paper: "paper/pldi18-rakuhena.pdf",
    full: "paper/pldi18a-full.pdf",
    bib: "https://dblp.uni-trier.de/rec/bibtex/conf/pldi/RaghothamanKHN18"
  },
  {
    title: "Accelerating Search-Based Program Synthesis Using Learned Probabilistic Models",
    author: [woosuk, kihong, rajeev, mayur],
    venue: '<a href="https://conf.researchr.org/home/pldi-2018">PLDI 2018: Programming Language Design and Implementation</a>',
    year: 2018,
    paper: "paper/pldi18-lehealna.pdf",
    bib: "https://dblp.uni-trier.de/rec/bibtex/conf/pldi/LeeHAN18",
    code: "https://github.com/wslee/euphony"
  },
  {
    title: "Difflog: Beyond Deductive Methods in Program Analysis",
    author: [mukund, "Sulekha Kulkarni", "Richard Zhang", "Xujie Si", kihong, woosuk, mayur],
    venue: '<a href="http://ml4p.org">ML4P: 1st Workshop on Machine Learning for Programming</a>',
    year: 2018,
    paper: "paper/ml4p18.pdf"
  },
  {
    title: "Machine-Learning-Guided Selectively Unsound Static Analysis",
    author: [kihong, hakjoo, kwang],
    venue: '<a href="http://icse2017.gatech.edu">ICSE 2017: The 39th International Conference on Software Engineering</a>',
    year: 2017,
    paper: "paper/icse17-heohyi.pdf",
    bib: "http://dblp.uni-trier.de/rec/bibtex/conf/icse/HeoOY17",
    slides: "slide/icse17-slides.pdf"
  },
  {
    title: "Automatically Generating Features for Learning Program Analysis Heuristics",
    author: ["Kwonsoo Chae", hakjoo, kihong, hongseok],
    venue: '<a href="http://2017.splashcon.org/track/splash-2017-OOPSLA">OOPSLA 2017: ACM Conference on Object-Oriented Programming, Systems, Languages, and Applications</a>',
    year: 2017,
    paper: "paper/oopsla17-chohheya.pdf",
    bib: "http://dblp.uni-trier.de/rec/bibtex/journals/pacmpl/ChaeOHY17"
  }
]

function write() {
  var section = document.getElementById("selected-publications-section");
  var html = "[*Authors contributed equally.]<br>"
  html += "<ul>";
  pubs.forEach(function(entry) {
    html += "<li>" + entry['title'] + "</li>";
    entry.author[entry.author.length - 1] = "and " + entry.author[entry.author.length - 1];
    if ('cofirst' in entry) {
      entry['cofirst'].forEach(function(idx) {
        entry['author'][idx] = entry['author'][idx] + "*";
      })
    }
    html += entry['author'].join(', ')
    html += "<br>";
    html += entry.venue;
    html += ", ";
    html += entry.year;
    if ('toappear' in entry) {
      html += ' '
      html += entry.toappear;
    }
    html += "<br>"
    if ('paper' in entry) {
      html += "[<a href=\"" + entry.paper + "\">paper</a>]";
    } else {
      html += "[paper]";
    }
    if ('full' in entry) {
      html += " [<a href=\"" + entry.full + "\">full-version</a>]";
    }
    if ('bib' in entry) {
      html += " [<a href=\"" + entry.bib + "\">bib</a>]";
    } else {
      html += " [bib]";
    }
    if ('slides' in entry) {
      html += " [<a href=\"" + entry.slides + "\">slides</a>]";
    }
    if ('code' in entry) {
      html += " [<a href=\"" + entry.code + "\">code</a>]";
    }
  })
  section.innerHTML = html + "</ul>";
}

write();
