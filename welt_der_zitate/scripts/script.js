$(document).ready(function () {
	// ein-, ausblenden des Scroll-Buttons
	$(window).scroll(function () {
		if ($(window).scrollTop() > 1000 && $(window).width()) {
			$('#back-top').fadeIn(1000);
		} else {
			$('#back-top').fadeOut(1000);
		}
	});
	// langsam nach oben scrollen
	$('#back-top a').click(function () {
		$('html,body').animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
});

$(document).ready(function () {
	// ein-, ausblenden vom header-Element in der mobilen Ansicht beim Scrollen
	$(window).scroll(function () {
		if ($(window).scrollTop() > 200 && $(window).width() < 810) {
			$('header').fadeOut(1000);
		} else {
			$('header').fadeIn(1000);
		}
	});
});

/* iOS Hover Fix */
var iOSHover = function () {
	$('*').on('touchstart', function () {
		$(this).trigger('hover');
	}).on('touchend', function () {
		$(this).trigger('hover');
	});
};
iOSHover();

// Eyecatcher Random Array

var arrayA = [];
arrayA[0] = ["Wenn man glücklich ist, soll man nicht noch glücklicher sein wollen.","Theodor Fontane"];
arrayA[1] = ["Glück ist Liebe, nichts anderes. Wer lieben kann, ist glücklich.","Hermann Hesse"];
arrayA[2] = ["Das Geheimnis des Glücks liegt nicht im Besitz, sondern im Geben. Wer andere glücklich macht, wird glücklich.","Andre Gide"];
arrayA[3] = ["Glück entsteht oft durch Aufmerksamkeit in kleinen Dingen, Unglück oft durch Vernachlässigung kleiner Dinge.","Wilhelm Busch"];
arrayA[4] = ["Menschliches Glück stammt nicht so sehr aus großen Glücksfällen, die sich selten ereignen, als vielmehr aus kleinen glücklichen Umständen, die jeden Tag vorkommen.","Benjamin Franklin"];
arrayA[5] = ["Von der Mehrzahl der Werke bleiben nur die Zitate übrig. Ist es dann nicht besser, von Anfang an nur die Zitate aufzuschreiben?","Stanislaw Jerzy Lec"];
arrayA[6] = ["Ein Zitat ist besser als ein Argument. Man kann damit in einem Streit die Oberhand gewinnen, ohne den Gegner überzeugt zu haben.","Gabriel Laub"];
arrayA[7] = ["Die Weisheit eines Menschen misst man nicht nach seinen Erfahrungen, sondern nach seiner Fähigkeit, Erfahrungen zu machen.","George Bernard Shaw"];
arrayA[8] = ["Viele Menschen würden eher sterben als denken. Und in der Tat: Sie tun es.","Bertrand Russell"];
arrayA[9] = ["Humor ist der Knopf, der verhindert, dass uns der Kragen platzt.","Joachim Ringelnatz"];
arrayA[10] = ["Der traurigste Aspekt derzeit ist, dass die Wissenschaft schneller Wissen sammelt, als die Gesellschaft Weisheit.","Isaac Asimov"];
arrayA[11] = ["Nur die Weisen sind im Besitz von Ideen. Die meisten Menschen sind von Ideen besessen.","Samuel Coleridge"];
arrayA[12] = ["Sparsamkeit ist die Lieblingsregel aller halblebendigen Menschen.","Henry Ford"];

arrayA[13] = ["<span id='gesundheit-quotes-first'></span>Es gibt tausend Krankheiten, aber nur eine Gesundheit.", "Ludwig Börne"];
arrayA[14] = ["Seien Sie vorsichtig mit Gesundheitsbüchern - Sie könnten an einem Druckfehler sterben.", "Mark Twain"];
arrayA[15] = ["Glück, das ist einfach eine gute Gesundheit und ein schlechtes Gedächtnis.", "Ernest Hemingway"];
arrayA[16] = ["Der große Sport fängt da an, wo er längst aufgehört hat, gesund zu sein.", "Bertolt Brecht"];
arrayA[17] = ["Wer nicht jeden Tag etwas für seine Gesundheit aufbringt, muss eines Tages sehr viel Zeit für die Krankheit opfern.", "Sebastian Kneipp"];
arrayA[18] = ["Ein leidenschaftlicher Raucher, der immer von der Gefahr des Rauchens für die Gesundheit liest, hört in den meisten Fällen auf - zu lesen.", "Winston Churchill"];

arrayA[19] = ["Erfolg ist die beste Rache.", "Michael Douglas"];
arrayA[20] = ["Das Geheimnis des Erfolges ist, den Standpunkt des anderen zu verstehen.", "Henry Ford"];
arrayA[21] = ["Unsere größte Schwäche liegt im Aufgeben. Der sicherste Weg zum Erfolg ist immer, es noch einmal zu versuchen.", "Thomas Alva Edison"];
arrayA[22] = ["Erfolg besteht darin, dass man genau die Fähigkeiten hat, die im Moment gefragt sind.", "Henry Ford"];
arrayA[23] = ["Zusammenkommen ist ein Beginn, zusammenbleiben ist ein Fortschritt, zusammenarbeiten ist ein Erfolg.", "Henry Ford"];
arrayA[24] = ["Erfolg hat nur, wer etwas tut, während er auf den Erfolg wartet.", "Thomas Alva Edison"];

arrayA[25] = ["Denke lieber an das, was du hast, als an das, was dir fehlt! Suche von den Dingen, die du hast, die besten aus und bedenke dann, wie eifrig du nach ihnen gesucht haben würdest, wenn du sie nicht hättest.","Mark Aurel"];
arrayA[26] = ["Die Seele hat die Farbe deiner Gedanken.","Mark Aurel"];
arrayA[27] = ["Unser Leben ist das, wozu unser Denken es macht.","Mark Aurel"];
arrayA[28] = ["Wie du am Ende deines Lebens wünschest gelebt zu haben, so kannst du jetzt schon leben.","Mark Aurel"];
arrayA[29] = ["Man muss erst so manches gelernt haben, ehe man über die Handlungsweise eines Anderen richtig urteilen kann.","Mark Aurel"];
arrayA[30] = ["Die beste Art, sich zu rächen: Nicht Gleiches mit Gleichem vergelten.","Mark Aurel"];
arrayA[31] = ["Lebe so, als müßtest du sofort Abschied vom Leben nehmen, als sei die Zeit, die dir geblieben ist, ein unerwartetes Geschenk.","Mark Aurel"];
arrayA[32] = ["Die Fähigkeit, glücklich zu leben, kommt aus einer Kraft, die der Seele innewohnt.","Mark Aurel"];
arrayA[33] = ["Verzweiflung befällt zwangsläufig die, deren Seele aus dem Gleichgewicht ist.","Mark Aurel"];
arrayA[34] = ["Wir müssen von ganzem Herzen alles, was uns trifft, willkommen heißen, wir dürfen auch innerlich nicht murren, ja uns nicht einmal wundern.","Mark Aurel"];
arrayA[35] = ["Wenn du wüsstest, aus welchem Quell die menschlichen Meinungen und Interessen fließen, du würdest aufhören, nach dem Beifall und Lob der Menschen zu streben.","Mark Aurel"];
arrayA[36] = ["Der Schein ist ein gefährlicher Betrüger. Gerade wenn du glaubst mit ernsten und hohen Dingen beschäftigt zu sein, übt er am meisten seine täuschende Gewalt.","Mark Aurel"];
arrayA[37] = ["Blick in dein Inneres. Da ist die Quelle des Guten, die niemals aufhört zu sprudeln, wenn du nicht aufhörst zu graben.","Mark Aurel"];
arrayA[38] = ["Mache dich von deinen Vorurteilen los, und du bist gerettet.","Mark Aurel"];
arrayA[39] = ["Es ist so leicht, unwillkommene und unliebsame Gedanken zurückzuweisen, und schon hat man seine Ruhe wieder.","Mark Aurel"];
arrayA[40] = ["Manche Leute verstehen unter Verschwiegenheit, dass sie die ihnen anvertrauten Geheimnisse nur hinter vorgehaltener Hand weitererzählen.","Mark Aurel"];
arrayA[41] = ["Einsamkeit suchen die Menschen auf ländlichen Fluren, am Meeresufer, in den Bergen. Doch einer wie beschränkten Ansicht entspringt dieser Wunsch! Kannst du dich doch, sooft du nur willst, in dich selbst zurückziehen. Gibt es doch nirgends eine stillere und ungestörtere Zufluchtsstätte als die Menschenseele.","Mark Aurel"];
arrayA[42] = ["Oft tut auch der Unrecht, der nichts tut. Wer das Unrecht nicht verbietet, wenn er kann, der befiehlt es!","Mark Aurel"];
arrayA[43] = ["Ein hervorragendes Mittel der Verteidigung: Sei deinem Angreifer nie ebenbürtig.","Mark Aurel"];
arrayA[44] = ["Jeder ist nur soviel wert wie das Ziel seines Strebens.","Mark Aurel"];
arrayA[45] = ["Sei wie ein Fels, an dem sich beständig die Wellen brechen! Er bleibt stehen, während sich rings um ihn die angeschwollenen Gewässer legen.","Mark Aurel"];
arrayA[46] = ["Diejenigen, die nicht mit Aufmerksamkeit den Bewegungen ihrer eigenen Seele folgen, geraten notwendig ins Unglück.","Mark Aurel"];
arrayA[47] = ["Schändlich ist es, wenn deine Seele müde ist, bevor dein Leib müde ist.","Mark Aurel"];
arrayA[48] = ["Wo kein Urteil ist, da ist kein Schmerz.","Mark Aurel"];
arrayA[49] = ["Was ist dein Beruf? 'Gut zu sein.'","Mark Aurel"];
arrayA[50] = ["Die Kunst des Lebens besteht mehr im Ringen als im Tanzen.","Mark Aurel"];
arrayA[51] = ["Ein Fluß, der aus dem Werdenden hervorgeht, ein reißender Strom ist die Zeit. Kaum war jegliches Ding zum Vorschein gekommen, so ist es auch schon wieder weggeführt, ein anderes herbeigetragen, aber auch das wird weggeschwemmt werden.","Mark Aurel"];
arrayA[52] = ["Die Kunst zu leben hat mit der Fechtkunst mehr Ähnlichkeit als mit der Tanzkunst, insofern man auch auf unvorhergesehene Streiche gerüstet sein muss.","Mark Aurel"];
arrayA[53] = ["Ein unerschütterliches Herz den Dingen gegenüber, die von außen kommen - ein rechtschaffenes in denen, die von dir abhängen.","Mark Aurel"];
arrayA[54] = ["Alles geht in einem Tage dahin, sowohl der Rühmende als auch der Gerühmte.","Mark Aurel"];
arrayA[55] = ["Es besteht die Möglichkeit, dass du mit einem Gott gleichgestellt und unbemerkt bleiben wirst.","Mark Aurel"];

arrayA[56] = ["Zwei Dinge sind unendlich, das Universum und die menschliche Dummheit, aber bei dem Universum bin ich mir noch nicht ganz sicher.","Albert Einstein"];
arrayA[57] = ["Wer keinen Sinn im Leben sieht, ist nicht nur unglücklich, sondern kaum lebensfähig.","Albert Einstein"];
arrayA[58] = ["Phantasie ist wichtiger als Wissen, denn Wissen ist begrenzt.","Albert Einstein"];
arrayA[59] = ["Wenn die Menschen nur über das sprächen, was sie begreifen, dann würde es sehr still auf der Welt sein.","Albert Einstein"];
arrayA[60] = ["Ich fürchte mich vor dem Tag, an dem die Technologie unsere Menschlichkeit übertrifft. Auf der Welt wird es nur noch eine Generation aus Idioten geben.","Albert Einstein"];
arrayA[61] = ["Wenn ich mit meiner Relativitätstheorie recht behalte, werden die Deutschen sagen, ich sei Deutscher, und die Franzosen, ich sei Weltbürger. Erweist sich meine Theorie als falsch, werden die Franzosen sagen, ich sei Deutscher, und die Deutschen, ich sei Jude.","Albert Einstein"];
arrayA[62] = ["Ich bin nicht sicher, mit welchen Waffen der dritte Weltkrieg ausgetragen wird, aber im vierten Weltkrieg werden sie mit Stöcken und Steinen kämpfen.","Albert Einstein"];
arrayA[63] = ["Welch triste Epoche, in der es leichter ist, ein Atom zu zertrümmern als ein Vorurteil!","Albert Einstein"];
arrayA[64] = ["Am Anfang gehören alle Gedanken der Liebe. Später gehört dann alle Liebe den Gedanken.","Albert Einstein"];
arrayA[65] = ["Eine neue Art von Denken ist notwendig, wenn die Menschheit weiterleben will.","Albert Einstein"];
arrayA[66] = ["Es gibt keine großen Entdeckungen und Fortschritte, solange es noch ein unglückliches Kind auf Erden gibt.","Albert Einstein"];
arrayA[67] = ["Logik bringt dich von A nach B. Deine Phantasie bringt dich überall hin.","Albert Einstein"];
arrayA[68] = ["Seit die Mathematiker über die Relativitätstheorie hergefallen sind, verstehe ich sie selbst nicht mehr.","Albert Einstein"];
arrayA[69] = ["Ich denke niemals an die Zukunft. Sie kommt früh genug.","Albert Einstein"];
arrayA[70] = ["Zeit ist das, was man an der Uhr abliest.","Albert Einstein"];
arrayA[71] = ["Das Schönste, was wir erleben können, ist das Geheimnisvolle.","Albert Einstein"];
arrayA[72] = ["Persönlichkeiten werden nicht durch schöne Reden geformt, sondern durch Arbeit und eigene Leistung.","Albert Einstein"];
arrayA[73] = ["Ich spreche mit jedem gleich, egal ob es sich um den Müllmann oder den Präsidenten der Universität handelt.","Albert Einstein"];
arrayA[74] = ["Wenn die meisten sich schon armseliger Kleider und Möbel schämen, wieviel mehr sollten wir uns da erst armseliger Ideen und Weltanschauungen schämen.","Albert Einstein"];
arrayA[75] = ["Um ein tadelloses Mitglied einer Schafherde sein zu können, muss man vor allem ein Schaf sein.","Albert Einstein"];
arrayA[76] = ["Wenn einer mit Vergnügen zu einer Musik in Reih und Glied marschieren kann, dann hat er sein großes Gehirn nur aus Irrtum bekommen, da für ihn das Rückenmark schon völlig genügen würde.","Albert Einstein"];
arrayA[77] = ["Holzhacken ist deshalb so beliebt, weil man bei dieser Tätigkeit den Erfolg sofort sieht.","Albert Einstein"];
arrayA[78] = ["Das, wobei unsere Berechnungen versagen, nennen wir Zufall.","Albert Einstein"];
arrayA[79] = ["Wozu Socken? Sie schaffen nur Löcher!","Albert Einstein"];
arrayA[80] = ["Der Fortgang der wissenschaftlichen Entwicklung ist im Endeffekt eine ständige Flucht vor dem Staunen.","Albert Einstein"];
arrayA[81] = ["Gleichungen sind wichtiger für mich, weil die Politik für die Gegenwart ist, aber eine Gleichung etwas für die Ewigkeit.","Albert Einstein"];
arrayA[82] = ["Es gäbe genug Geld, genug Arbeit, genug zu essen, wenn wir die Reichtümer der Welt richtig verteilen würden, statt uns zu Sklaven starrer Wirtschaftsdoktrinen und -traditionen zu machen.","Albert Einstein"];
arrayA[83] = ["Es ist schwieriger, eine vorgefasste Meinung zu zertrümmern als ein Atom.","Albert Einstein"];
arrayA[84] = ["Wer sich nicht mehr wundern und in Ehrfurcht verlieren kann, ist seelisch bereits tot.","Albert Einstein"];
arrayA[85] = ["Zwei Dinge sind zu unserer Arbeit nötig: Unermüdliche Ausdauer und die Bereitschaft, etwas, in das man viel Zeit und Arbeit gesteckt hat, wieder wegzuwerfen.","Albert Einstein"];
arrayA[86] = ["Die Naturwissenschaft ohne Religion ist lahm, die Religion ohne Naturwissenschaft ist blind.","Albert Einstein"];
arrayA[87] = ["Das Geld zieht nur den Eigennutz an und verführt stets unwiderstehlich zum Missbrauch.","Albert Einstein"];
arrayA[88] = ["Wenn ich die Folgen geahnt hätte, wäre ich Uhrmacher geworden.","Albert Einstein"];
arrayA[89] = ["Man hat den Eindruck, dass die moderne Physik auf Annahmen beruht, die irgendwie dem Lächeln einer Katze gleichen, die gar nicht da ist.","Albert Einstein"];

	var flag = true;
	
	function displayRandomizer() {
	if (flag){
	var rand = Math.floor(Math.random() * arrayA.length);
	document.getElementById("txt").innerHTML = arrayA[rand][0];
	document.getElementById("ec-author").innerHTML = "von " + arrayA[rand][1];
	
	var x = document.getElementById("count");
	setTimeout(function(){ x.value="" }, 7000);
	setTimeout(function(){ x.value="°" }, 6000);
	setTimeout(function(){ x.value="°°" }, 5000);
	setTimeout(function(){ x.value="°°°" }, 4000);
	setTimeout(function(){ x.value="°°°°" }, 3000);
	setTimeout(function(){ x.value="°°°°°" }, 2000);
	setTimeout(function(){ x.value="°°°°°°" }, 1000);
	
	setTimeout(displayRandomizer, 7000);
	}
	}
	
	function stop(){
		flag = false;
	}
	
	function continueFunct(){
		flag = true;
		displayRandomizer();
	}

// Thema Gesundheit
var textB, iB;

textB = "";

for (iB = 13; iB < 19; iB++) {
  textB += "<article><div><p>" + arrayA[iB][0] + "</p><div>von " + arrayA[iB][1] + "</div></div></article>";
}
textB += "";
document.getElementById("gesundheit-quotes").innerHTML = textB;

// Thema Erfolg
var textC, iC;

textC = "";
for (iC = 19; iC < 25; iC++) {
  textC += "<article><div><p>" + arrayA[iC][0] + "</p><div>von " + arrayA[iC][1] + "</div></div></article>";
}
textC += "";

document.getElementById("erfolg-quotes").innerHTML = textC;