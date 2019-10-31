// Author Einstein Array
var textE, LenE, iE;
var arrayE = [];
arrayE[0] = ["<span id='einstein-quotes-first'></span>Zwei Dinge sind unendlich, das Universum und die menschliche Dummheit, aber bei dem Universum bin ich mir noch nicht ganz sicher.","Albert Einstein"];
arrayE[1] = ["Wer keinen Sinn im Leben sieht, ist nicht nur unglücklich, sondern kaum lebensfähig.","Albert Einstein"];
arrayE[2] = ["Phantasie ist wichtiger als Wissen, denn Wissen ist begrenzt.","Albert Einstein"];
arrayE[3] = ["Wenn die Menschen nur über das sprächen, was sie begreifen, dann würde es sehr still auf der Welt sein.","Albert Einstein"];
arrayE[4] = ["Ich fürchte mich vor dem Tag, an dem die Technologie unsere Menschlichkeit übertrifft. Auf der Welt wird es nur noch eine Generation aus Idioten geben.","Albert Einstein"];
arrayE[5] = ["Wenn ich mit meiner Relativitätstheorie recht behalte, werden die Deutschen sagen, ich sei Deutscher, und die Franzosen, ich sei Weltbürger. Erweist sich meine Theorie als falsch, werden die Franzosen sagen, ich sei Deutscher, und die Deutschen, ich sei Jude.","Albert Einstein"];
arrayE[6] = ["Ich bin nicht sicher, mit welchen Waffen der dritte Weltkrieg ausgetragen wird, aber im vierten Weltkrieg werden sie mit Stöcken und Steinen kämpfen.","Albert Einstein"];
arrayE[7] = ["Welch triste Epoche, in der es leichter ist, ein Atom zu zertrümmern als ein Vorurteil!","Albert Einstein"];
arrayE[8] = ["Am Anfang gehören alle Gedanken der Liebe. Später gehört dann alle Liebe den Gedanken.","Albert Einstein"];
arrayE[9] = ["Eine neue Art von Denken ist notwendig, wenn die Menschheit weiterleben will.","Albert Einstein"];
arrayE[10] = ["Es gibt keine großen Entdeckungen und Fortschritte, solange es noch ein unglückliches Kind auf Erden gibt.","Albert Einstein"];
arrayE[11] = ["Logik bringt dich von A nach B. Deine Phantasie bringt dich überall hin.","Albert Einstein"];
arrayE[12] = ["Seit die Mathematiker über die Relativitätstheorie hergefallen sind, verstehe ich sie selbst nicht mehr.","Albert Einstein"];
arrayE[13] = ["Ich denke niemals an die Zukunft. Sie kommt früh genug.","Albert Einstein"];
arrayE[14] = ["Zeit ist das, was man an der Uhr abliest.","Albert Einstein"];
arrayE[15] = ["Das Schönste, was wir erleben können, ist das Geheimnisvolle.","Albert Einstein"];
arrayE[16] = ["Persönlichkeiten werden nicht durch schöne Reden geformt, sondern durch Arbeit und eigene Leistung.","Albert Einstein"];
arrayE[17] = ["Ich spreche mit jedem gleich, egal ob es sich um den Müllmann oder den Präsidenten der Universität handelt.","Albert Einstein"];
arrayE[18] = ["Wenn die meisten sich schon armseliger Kleider und Möbel schämen, wieviel mehr sollten wir uns da erst armseliger Ideen und Weltanschauungen schämen.","Albert Einstein"];
arrayE[19] = ["Um ein tadelloses Mitglied einer Schafherde sein zu können, muss man vor allem ein Schaf sein.","Albert Einstein"];
arrayE[20] = ["Wenn einer mit Vergnügen zu einer Musik in Reih und Glied marschieren kann, dann hat er sein großes Gehirn nur aus Irrtum bekommen, da für ihn das Rückenmark schon völlig genügen würde.","Albert Einstein"];
arrayE[21] = ["Holzhacken ist deshalb so beliebt, weil man bei dieser Tätigkeit den Erfolg sofort sieht.","Albert Einstein"];
arrayE[22] = ["Das, wobei unsere Berechnungen versagen, nennen wir Zufall.","Albert Einstein"];
arrayE[23] = ["Wozu Socken? Sie schaffen nur Löcher!","Albert Einstein"];
arrayE[24] = ["Der Fortgang der wissenschaftlichen Entwicklung ist im Endeffekt eine ständige Flucht vor dem Staunen.","Albert Einstein"];
arrayE[25] = ["Gleichungen sind wichtiger für mich, weil die Politik für die Gegenwart ist, aber eine Gleichung etwas für die Ewigkeit.","Albert Einstein"];
arrayE[26] = ["Es gäbe genug Geld, genug Arbeit, genug zu essen, wenn wir die Reichtümer der Welt richtig verteilen würden, statt uns zu Sklaven starrer Wirtschaftsdoktrinen und -traditionen zu machen.","Albert Einstein"];
arrayE[27] = ["Es ist schwieriger, eine vorgefasste Meinung zu zertrümmern als ein Atom.","Albert Einstein"];
arrayE[28] = ["Wer sich nicht mehr wundern und in Ehrfurcht verlieren kann, ist seelisch bereits tot.","Albert Einstein"];
arrayE[29] = ["Zwei Dinge sind zu unserer Arbeit nötig: Unermüdliche Ausdauer und die Bereitschaft, etwas, in das man viel Zeit und Arbeit gesteckt hat, wieder wegzuwerfen.","Albert Einstein"];
arrayE[30] = ["Die Naturwissenschaft ohne Religion ist lahm, die Religion ohne Naturwissenschaft ist blind.","Albert Einstein"];
arrayE[31] = ["Das Geld zieht nur den Eigennutz an und verführt stets unwiderstehlich zum Missbrauch.","Albert Einstein"];
arrayE[32] = ["Wenn ich die Folgen geahnt hätte, wäre ich Uhrmacher geworden.","Albert Einstein"];
arrayE[33] = ["Man hat den Eindruck, dass die moderne Physik auf Annahmen beruht, die irgendwie dem Lächeln einer Katze gleichen, die gar nicht da ist.","Albert Einstein"];
LenE = arrayE.length;

textE = "";
for (iE = 0; iE < LenE; iE++) {
  textE += "<article><div><p>" + arrayE[iE][0] + "</p><div>von " + arrayE[iE][1] + "</div></div></article>";
}
textE += "";

document.getElementById("einstein-quotes").innerHTML = textE;