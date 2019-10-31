// Author Aurel Array
var textD, LenD, iD;
var arrayD = [];
arrayD[0] = ["Denke lieber an das, was du hast, als an das, was dir fehlt! Suche von den Dingen, die du hast, die besten aus und bedenke dann, wie eifrig du nach ihnen gesucht haben würdest, wenn du sie nicht hättest.","Mark Aurel"];
arrayD[1] = ["Die Seele hat die Farbe deiner Gedanken.","Mark Aurel"];
arrayD[2] = ["Unser Leben ist das, wozu unser Denken es macht.","Mark Aurel"];
arrayD[3] = ["Wie du am Ende deines Lebens wünschest gelebt zu haben, so kannst du jetzt schon leben.","Mark Aurel"];
arrayD[4] = ["Man muss erst so manches gelernt haben, ehe man über die Handlungsweise eines Anderen richtig urteilen kann.","Mark Aurel"];
arrayD[5] = ["Die beste Art, sich zu rächen: Nicht Gleiches mit Gleichem vergelten.","Mark Aurel"];
arrayD[6] = ["Lebe so, als müßtest du sofort Abschied vom Leben nehmen, als sei die Zeit, die dir geblieben ist, ein unerwartetes Geschenk.","Mark Aurel"];
arrayD[7] = ["Die Fähigkeit, glücklich zu leben, kommt aus einer Kraft, die der Seele innewohnt.","Mark Aurel"];
arrayD[8] = ["Verzweiflung befällt zwangsläufig die, deren Seele aus dem Gleichgewicht ist.","Mark Aurel"];
arrayD[9] = ["Wir müssen von ganzem Herzen alles, was uns trifft, willkommen heißen, wir dürfen auch innerlich nicht murren, ja uns nicht einmal wundern.","Mark Aurel"];
arrayD[10] = ["Wenn du wüsstest, aus welchem Quell die menschlichen Meinungen und Interessen fließen, du würdest aufhören, nach dem Beifall und Lob der Menschen zu streben.","Mark Aurel"];
arrayD[11] = ["Der Schein ist ein gefährlicher Betrüger. Gerade wenn du glaubst mit ernsten und hohen Dingen beschäftigt zu sein, übt er am meisten seine täuschende Gewalt.","Mark Aurel"];
arrayD[12] = ["Blick in dein Inneres. Da ist die Quelle des Guten, die niemals aufhört zu sprudeln, wenn du nicht aufhörst zu graben.","Mark Aurel"];
arrayD[13] = ["Mache dich von deinen Vorurteilen los, und du bist gerettet.","Mark Aurel"];
arrayD[14] = ["Es ist so leicht, unwillkommene und unliebsame Gedanken zurückzuweisen, und schon hat man seine Ruhe wieder.","Mark Aurel"];
arrayD[15] = ["Manche Leute verstehen unter Verschwiegenheit, dass sie die ihnen anvertrauten Geheimnisse nur hinter vorgehaltener Hand weitererzählen.","Mark Aurel"];
arrayD[16] = ["Einsamkeit suchen die Menschen auf ländlichen Fluren, am Meeresufer, in den Bergen. Doch einer wie beschränkten Ansicht entspringt dieser Wunsch! Kannst du dich doch, sooft du nur willst, in dich selbst zurückziehen. Gibt es doch nirgends eine stillere und ungestörtere Zufluchtsstätte als die Menschenseele.","Mark Aurel"];
arrayD[17] = ["Oft tut auch der Unrecht, der nichts tut. Wer das Unrecht nicht verbietet, wenn er kann, der befiehlt es!","Mark Aurel"];
arrayD[18] = ["Ein hervorragendes Mittel der Verteidigung: Sei deinem Angreifer nie ebenbürtig.","Mark Aurel"];
arrayD[19] = ["Jeder ist nur soviel wert wie das Ziel seines Strebens.","Mark Aurel"];
arrayD[20] = ["Sei wie ein Fels, an dem sich beständig die Wellen brechen! Er bleibt stehen, während sich rings um ihn die angeschwollenen Gewässer legen.","Mark Aurel"];
arrayD[21] = ["Diejenigen, die nicht mit Aufmerksamkeit den Bewegungen ihrer eigenen Seele folgen, geraten notwendig ins Unglück.","Mark Aurel"];
arrayD[22] = ["Schändlich ist es, wenn deine Seele müde ist, bevor dein Leib müde ist.","Mark Aurel"];
arrayD[23] = ["Wo kein Urteil ist, da ist kein Schmerz.","Mark Aurel"];
arrayD[24] = ["Was ist dein Beruf? 'Gut zu sein.'","Mark Aurel"];
arrayD[25] = ["Die Kunst des Lebens besteht mehr im Ringen als im Tanzen.","Mark Aurel"];
arrayD[26] = ["Ein Fluß, der aus dem Werdenden hervorgeht, ein reißender Strom ist die Zeit. Kaum war jegliches Ding zum Vorschein gekommen, so ist es auch schon wieder weggeführt, ein anderes herbeigetragen, aber auch das wird weggeschwemmt werden.","Mark Aurel"];
arrayD[27] = ["Die Kunst zu leben hat mit der Fechtkunst mehr Ähnlichkeit als mit der Tanzkunst, insofern man auch auf unvorhergesehene Streiche gerüstet sein muss.","Mark Aurel"];
arrayD[28] = ["Ein unerschütterliches Herz den Dingen gegenüber, die von außen kommen - ein rechtschaffenes in denen, die von dir abhängen.","Mark Aurel"];
arrayD[29] = ["Alles geht in einem Tage dahin, sowohl der Rühmende als auch der Gerühmte.","Mark Aurel"];
arrayD[30] = ["Es besteht die Möglichkeit, dass du mit einem Gott gleichgestellt und unbemerkt bleiben wirst.","Mark Aurel"];
LenD = arrayD.length;

textD = "";
for (iD = 0; iD < LenD; iD++) {
  textD += "<article><div><p>" + arrayD[iD][0] + "</p><div>von " + arrayD[iD][1] + "</div></div></article>";
}
textD += "";

document.getElementById("aurel-quotes").innerHTML = textD;