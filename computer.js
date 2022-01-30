// eingabe

let b = false;
let s1 = false;
let s2 = false;
let a = false;
let e = false;
let k1 = false;
let k2 = false;
let l1 = false;
let l2 = false;
let r1 = false;
let r2 = false;
let w = false;

let speicherstatus1 = false;
let speicherstatus2 = false;

function setWfalse(){
    w = false;
}

function setWtrue(){
    w = true;
}

function setEfalse(){
    e = false;
}

function setEtrue(){
    e = true;
}

function setr1false(){
    r1 = false;
}

function setr1true(){
    r1 = true;
}

function setk1true(){
    k1 = true;
}

function setk1false(){
    k1 = false;
}

function setk2true(){
    k2 = true;
}

function setk2false(){
    k2 = false;
}


function setr2false(){
    r2 = false;
}

function setr2true(){
    r2 = true;
}

function setl2false(){
    l2 = false;
}

function setl2true(){
    l2 = true;
}

function setl1true(){
    l1 = true;
}
function setl1false(){
    l1 = false;
}

function setBfalse(){
    b = false;
}

function setBtrue(){
    b = true;
}

function setS1false(){
    s1 = false;
}

function setS1true(){
    s1 = true;
}

function setS2false(){
    s2 = false;
}

function setS2true(){
    s2 = true;
}

function setAfalse(){
    a = false;
}

function setAtrue(){
    a = true;
}

// #####

class Gatter{
    
    constructor(xPosition, yPosition, gatter){
      this.xPosition = xPosition;
      this.yPosition = yPosition;
      this.gatter = gatter;
      this.wahreAussage = false;
      this.eingabeA = false;
      this.eingabeB = false;
    }

    zeichnen(){

        this.aktiv();

        // zum zeichnen

        let breite = int(width/30);
        let farbe;

        if (this.wahreAussage == true){
            farbe = 180;
        } else {
            farbe = 0;
        }

        stroke(0,farbe,0);
        strokeWeight(3);
        fill(255);
        rect(this.xPosition,this.yPosition,breite,breite);

        strokeWeight(1);

        if (this.gatter == "oder"){
            textSize(breite/2);
            fill(0);
            text('≥1',this.xPosition + breite/5, this.yPosition + breite/2)
        }

        if (this.gatter == "und"){
            textSize(breite/2);
            fill(0);
            text('&',this.xPosition + breite/3, this.yPosition + breite/2)
        }

        if (this.gatter == "xoder"){
            textSize(breite/2);
            fill(0);
            text('=1',this.xPosition + breite/5, this.yPosition + breite/2)
        }

        if (this.gatter == "nicht"){
            textSize(breite/2);
            fill(0);
            text('1',this.xPosition + breite/3, this.yPosition + breite/2)

            // Kreis

            strokeWeight(3);
            fill(255);
            let diameter = breite/3;
            circle(this.xPosition + breite + diameter/2, this.yPosition + breite/2,diameter);
            strokeWeight(1);
        }
    }

    machWahreAussage(){
        this.wahreAussage == true;
    }
    
    getX(art){

        // gibt xPos zurueck
        // art gibt die Ausgabe oder Eingabe an

        let breite = int(width/30);
        let diameter = breite/3;
        
        if (art == 'a' || art == 'b'){
            return this.xPosition;
        }
        if (art == 'y' && this.gatter == 'nicht'){
            return this.xPosition +  int(width/30) + diameter;
        }
        if (art == 'y' && this.gatter != 'nicht'){
            return this.xPosition +  int(width/30);
        }
    }

    getY(art){

        // gibt yPos zurueck
        // art gibt die Ausgabe oder Eingabe an

        let breite = int(width/30);

        if (art == 'a' && this.gatter != 'nicht'){
            return this.yPosition + (breite/3)*1
        }
        if (art == 'b' && this.gatter != 'nicht'){
            return this.yPosition + (breite/3)*2
        }
        if (art == 'y'){
            return this.yPosition + breite/2;
        }
        if (art == 'a' && this.gatter == 'nicht'){
            return this.yPosition + breite/2;
        }       
    }

    aktiv(){

        // zur aenderung der farbe des gatters

        let a = this.eingabeA;  // funktioniert
        let b = this.eingabeB;

        // an

        if ((a == true || b == true) && this.gatter == 'oder'){
            this.wahreAussage = true;
        }

        if ((a == true && b == true) && this.gatter == 'und'){
            this.wahreAussage = true;
        }

        if (a == true && this.gatter == 'nicht'){
            this.wahreAussage = true;
        }        

        if (((a == true && b == false) || (a == false && b == true)) && this.gatter == 'xoder'){
            this.wahreAussage = true;
        }

        // aus

        if ((a == false && b == false) && this.gatter == 'oder'){
            this.wahreAussage = false;
        }

        if ((a == false || b == false) && this.gatter == 'und'){
            this.wahreAussage = false;
        }

        if (a == false && this.gatter == 'nicht'){
            this.wahreAussage = false;
        }        

        if (((a == false && b == false) || (a == true && b == true)) && this.gatter == 'xoder'){
            this.wahreAussage = false;
        }
    }

    uebergabe(){

        // um die Farbe von Verbindungen zu aendern
        return this.wahreAussage;
    }

    setA(a){

        // um den eingehenden Wahrheitswert direkt zu aendern

        this.eingabeA = a;
    }

    setB(a){

        // um den eingehenden Wahrheitswert direkt zu aendern

        this.eingabeB = a; 
    }
}

class EinBitSpeicher{

    constructor(xPos, yPos){
        this.xPos = xPos;
        this.yPos = yPos;
        this.wahreAussage = false;
        this.eingabeSchreiben = false;
        this.eingabeErgebnis = false;
    }

    zeichnen(){

        this.aktiv();

        // zum zeichnen

        let breite = int(width/30);
        let farbe;

        if (this.wahreAussage == true){
            farbe = 180;
        } else {
            farbe = 0;
        }

        stroke(0,farbe,0);
        strokeWeight(3);
        fill(255);
        rect(this.xPos,this.yPos,breite,breite);

        strokeWeight(1);
 
        textSize(breite/4);
        fill(0);
        text('1-Bit',this.xPos + breite/5, this.yPos + breite/2)
        
    }

    aktiv(){

        if (this.eingabeErgebnis == true && this.eingabeSchreiben == true){
            this.wahreAussage = true;
        }
        if (this.eingabeErgebnis == false && this.eingabeSchreiben == true){
            this.wahreAussage = false;
        }
       
    }

    setSchreiben(x){
        this.eingabeSchreiben = x;
    }

    setErgebnis(x){
        this.eingabeErgebnis = x;
    }

    getStatus(){
        return this.wahreAussage;
    }

    getX(wert){

        let breite = int(width/30);

        if ( wert == 'schreiben' || wert == 'bearbeiten'){
            return this.xPos; 
        }

        if (wert == 'ausgabe'){
            return this.xPos + breite;
        }
    }

    getY(wert){

        let breite = int(width/30);

        if ( wert == 'schreiben'){
            return this.yPos + (breite/3)*2; 
        }

        if (wert == 'ausgabe'){
            return this.yPos + breite/2;
        }

        if ( wert == 'bearbeiten'){
            return this.yPos + (breite/3)*1;
        }
    }
}

class Transistor{

    constructor(xPos,yPos){
        this.xPos = xPos;
        this.yPos = yPos;
        this.emitter = false;
        this.basis = false;
        this.kollektor = false;
    }

    zeichnen(){

        this.aktiv

        let breite = int(width/30);
      
        let x = this.xPos;
        let y = this.yPos;

        if(this.kollektor == true){
            stroke(0,200,0);
        } else {
            stroke(0)
        }

        noFill();
        ellipse(this.xPos,this.yPos,breite);

        // emitter

        line(x-breite/2,y,x-breite/4,y+breite/4);
        fill(0)
        triangle(x-breite/2.2,y+breite/30,x-breite/4,y+breite/10,x-breite/2.8,y+breite/3.6)

        // basis

        line(x-breite/4,y+breite/4,x+breite/4,y+breite/4);
        line(x,y+breite/4,x,y+breite/2);

        // kollektor

        line(x+breite/4,y+breite/4,x+breite/2,y);
    }

    setEmitter(wert){
        this.emitter = wert;
    }

    setBasis(wert){
        this.basis = wert;
    }

    getKollektorStatus(){
        if (this.basis == true && this.emitter == true){
            this.kollektor = true;
        } else {
            this.kollektor = false;
        }
        return this.kollektor;
    }

    getX(wert){

        let breite = int(width/30);


        if ( wert == 'b'){
            return this.xPos;
        }
        
        if ( wert == 'e'){
            return this.xPos - breite/2;
        }

        if ( wert == 'k'){
            return this.xPos + breite/2;
        }
    }

    getY(wert){

        let breite = int(width/30);

        if ( wert == 'b'){
            return this.yPos + breite/2;
        }
        
        if ( wert == 'e'){
            return this.yPos;
        }

        if ( wert == 'k'){
            return this.yPos;
        }
    }

    aktiv(){
        if (this.basis == true && this.emitter == true){
            this.kollektor = true;
        } else {
            this.kollektro = false;
        }
    }
}

class Einheit{

    constructor(einheit, xpos, ypos){
        this.einheit = einheit;
        this.xpos = xpos;
        this.ypos = ypos;
        this.objektListe = [];
    }

    erstelleGatterObjekte(){

        let factor = int(width/50);
        let breite = int(width/30);
      
        let x = this.xpos;
        let y = this.ypos;
        
        if ( this.einheit == 'steuerwerk'){

            // s1

            let s1_links_und = new Gatter(x + factor * 3, y + factor, 'und');
            let s1_mitte_nicht = new Gatter(x + factor * 8, y + factor * 3, 'nicht');
            let s1_rechts_und = new Gatter(x + factor * 13, s1_mitte_nicht.getY('y') - (breite/3)*1, 'und');

            this.objektListe.push(s1_links_und, s1_mitte_nicht, s1_rechts_und);

            // s2

            let s2_links_und = new Gatter(x + factor * 3, y + factor*6, 'und');
            let s2_mitte_nicht = new Gatter(x + factor * 8, y + factor * 9, 'nicht');
            let s2_rechts_und = new Gatter(x + factor * 13, s2_mitte_nicht.getY('y') - (breite/3)*1, 'und');


            this.objektListe.push(s2_links_und, s2_mitte_nicht, s2_rechts_und);

            // Schreiben

            let kontrolle_schreiben_1 = new Gatter(s2_rechts_und.getX('y') + breite*5,s2_rechts_und.getY('y') - (breite/3)*2, 'und'); // unten
            let kontrolle_schreiben_2 = new Gatter(s2_rechts_und.getX('y') + breite*5,s2_links_und.getY('y') - (breite/3)*2, 'und'); // oben

            this.objektListe.push(kontrolle_schreiben_1, kontrolle_schreiben_2);

            // Overflow

            let overflow_2 = new Gatter(x + factor * 3, y + factor*13, 'xoder'); // oben
            let overflow_1 = new Gatter(x + factor * 3, y + factor*13 + breite*2, 'xoder'); // unten

            this.objektListe.push(overflow_2, overflow_1)

        }

        if ( this.einheit == 'rechenwerk'){

            let xoder_oben = new Gatter(this.xpos + breite*2,this.ypos + factor * 6,'xoder');
            let xoder_unten = new Gatter(this.xpos + breite*5,this.ypos + factor * 6 + (breite/2 - breite/3),'xoder');

            this.objektListe.push(xoder_unten, xoder_oben);
        
        }

        if ( this.einheit == 'speichereinheit'){

            let oberer_speicher = new EinBitSpeicher(x + breite*2, y + breite);
            let unterer_speicher = new EinBitSpeicher(x + breite*2, y + breite*4);

            this.objektListe.push(oberer_speicher, unterer_speicher);

            let oberer_t = new Transistor(x + breite*4.5,y + breite*1.5);
            let unterer_t = new Transistor(x + breite*4.5,y + breite*4.5);

            this.objektListe.push(unterer_t);
            this.objektListe.push(oberer_t);
        }
    }

    zeichnen(){
      
      
        let factor = int(width/50);
        let breite = int(width/30);
      
        let x = this.xpos;
        let y = this.ypos;
      
        for ( let i = 0; i < this.objektListe.length ; i++){
            this.objektListe[i].zeichnen();
        }
        
        if (this.einheit == 'steuerwerk'){

            let farbe = 0;

            let s1_links_und = this.objektListe[0];
            let s1_rechts_und = this.objektListe[2];
            let s1_mitte_nicht = this.objektListe[1];

            let s2_links_und = this.objektListe[3];
            let s2_rechts_und = this.objektListe[5];
            let s2_mitte_nicht = this.objektListe[4];

            let sr_1 = this.objektListe[6];
            let sr_2 = this.objektListe[7];

            let ov_1 = this.objektListe[8];
            let ov_2 = this.objektListe[9];

            // abhaenigkeiten

            s1_links_und.setA(s1);
            s1_links_und.setB(a);

            s2_links_und.setA(s2);
            s2_links_und.setB(a);

            s1_mitte_nicht.setA(!(s1_links_und.uebergabe()));
            s2_mitte_nicht.setA(!(s2_links_und.uebergabe()));

            s1_rechts_und.setA(s1_mitte_nicht.uebergabe());
            s1_rechts_und.setB(a);

            s2_rechts_und.setA(s2_mitte_nicht.uebergabe());
            s2_rechts_und.setB(a);

            sr_1.setA(ov_1.uebergabe());
            sr_1.setB(s2_links_und.uebergabe());

            sr_2.setA(ov_2.uebergabe());
            sr_2.setB(s2_rechts_und.uebergabe());

            ov_1.setA(e);
            ov_1.setB(k2);

            ov_2.setA(e);
            ov_2.setB(k1);

            // Verbindungen innerhalb von s1

            // !

            if (s1_mitte_nicht.uebergabe() == false ){
            farbe = 0;
            }
            if (s1_mitte_nicht.uebergabe() == true){
            farbe = 200;
            }

            strokeWeight(2);
            stroke(0,farbe,0)

            // s1 mitte nicht: ausgabe -> verbindung zu s1 rechts und: a
            line(s1_mitte_nicht.getX('y'),s1_mitte_nicht.getY('y'),s1_rechts_und.getX('a'),s1_rechts_und.getY('a'));
            
            // !

            if (s1_links_und.uebergabe() == false ){
                l2 = false;
                farbe = 0;
            }
            if (s1_links_und.uebergabe() == true ){
                l2 = true;
                farbe = 200;
            }
            stroke(0,farbe,0)
            line(s1_rechts_und.getX('y') + breite*2,s1_links_und.getY('y'),s1_rechts_und.getX('y') + breite*2,s2_rechts_und.getY('y') + breite*6);

            // s1 links und : ausgabe gerade linie
            line(s1_links_und.getX('y'),s1_links_und.getY('y'),s1_rechts_und.getX('y') + breite*2, s1_links_und.getY('y'));
            // s1 mitte nicht : eingabe nach unten
            line(s1_links_und.getX('y') + (s1_mitte_nicht.getX('a') - s1_links_und.getX('y'))/2, s1_links_und.getY('y'),s1_links_und.getX('y') + (s1_mitte_nicht.getX('a') - s1_links_und.getX('y'))/2,s1_mitte_nicht.getY('a'));
            
            // s1 mitte nicht : eingabe gerade
            line(s1_links_und.getX('y') + (s1_mitte_nicht.getX('a') - s1_links_und.getX('y'))/2,s1_mitte_nicht.getY('a'),s1_mitte_nicht.getX('a'),s1_mitte_nicht.getY('a'));
            
            // !

            
            
            
            // s1 links und : eingabe a s1

            if (s1 == false ){
                farbe = 0;
            }
            if (s1 == true && a == true){
                farbe = 200;
            }

            stroke(0,farbe,0)
            line(s1_links_und.getX('a'),s1_links_und.getY('a'),x,s1_links_und.getY('a'));

            
            // s1 links und: eingabe a bzw. aktivierung

            // !

            if (a == false ){
                farbe = 0;
            }
            if (a == true && a == true){
                farbe = 200;
            }

            stroke(0,farbe,0);
            
            line(s1_links_und.getX('b'),s1_links_und.getY('b'),x,s1_links_und.getY('b'));
            // s1 + s2 aktivierung nach unten
            line(x + breite,s2_rechts_und.getY('b') + (breite/3)*2,x + breite,s1_links_und.getY('b'));
            // s1 rechts und : eingabe b nach unten
            line(s1_mitte_nicht.getX('y') + (s1_rechts_und.getX('a') - s1_mitte_nicht.getX('y'))/2,s1_rechts_und.getY('b'),s1_mitte_nicht.getX('y') + (s1_rechts_und.getX('a') - s1_mitte_nicht.getX('y'))/2,s1_rechts_und.getY('b') + (breite/3)*2);
            
            // s1 rechts und : eingabe b gerade lang
            line(s1_mitte_nicht.getX('y') + (s1_rechts_und.getX('a') - s1_mitte_nicht.getX('y'))/2,s1_rechts_und.getY('b') + (breite/3)*2,x + breite,s1_rechts_und.getY('b') + (breite/3)*2);
            
            // s1 rechts und : eingabe b gerade kurz
            line(s1_rechts_und.getX('b'),s1_rechts_und.getY('b'),s1_mitte_nicht.getX('y') + (s1_rechts_und.getX('a') - s1_mitte_nicht.getX('y'))/2,s1_rechts_und.getY('b'));
            
            // !

            if (s1_rechts_und.uebergabe() == false ){
                farbe = 0;
                l1 = false;
            }
            if (s1_rechts_und.uebergabe() == true){
                farbe = 200;
                l1 = true;
            }
            stroke(0,farbe,0)
            line(s1_rechts_und.getX('y') + breite*1,s1_rechts_und.getY('y'),s1_rechts_und.getX('y') + breite*1,s2_rechts_und.getY('y') + breite*6);

            // s1 rechts und: ausgabe gerade
            
            line(s1_rechts_und.getX('y'),s1_rechts_und.getY('y'),s1_rechts_und.getX('y') + breite,s1_rechts_und.getY('y'));
    
            // !

            // Verbindungen innerhalb von s2
   
            
            
            // s2 rechts und : eingabe b gerade kurz
            line(s2_rechts_und.getX('b'),s2_rechts_und.getY('b'),s2_mitte_nicht.getX('y') + (s2_rechts_und.getX('a') - s2_mitte_nicht.getX('y'))/2,s2_rechts_und.getY('b'));
            
            // s2 rechts und : eingabe b nach unten
            line(s2_mitte_nicht.getX('y') + (s2_rechts_und.getX('a') - s2_mitte_nicht.getX('y'))/2,s2_rechts_und.getY('b'),s2_mitte_nicht.getX('y') + (s2_rechts_und.getX('a') - s2_mitte_nicht.getX('y'))/2,s2_rechts_und.getY('b') + (breite/3)*2);
                        
            // s2 rechts und : eingabe b gerade lang
            line(s2_mitte_nicht.getX('y') + (s2_rechts_und.getX('a') - s2_mitte_nicht.getX('y'))/2,s2_rechts_und.getY('b') + (breite/3)*2,x + breite,s2_rechts_und.getY('b') + (breite/3)*2);
            
            if (s2_mitte_nicht.uebergabe() == false ){
                farbe = 0;
                }
            if (s2_mitte_nicht.uebergabe() == true){
                farbe = 200;
            }  
            stroke(0,farbe,0)
            // s2 mitte nicht: ausgabe -> verbindung zu s2 rechts und: a
            line(s2_mitte_nicht.getX('y'),s2_mitte_nicht.getY('y'),s2_rechts_und.getX('a'),s2_rechts_und.getY('a'));

            if ( s2_rechts_und.uebergabe() == true){
                farbe = 200;
            }  else {
                farbe = 0;
            }  
            stroke(0,farbe,0)
            // s2 rechts und: ausgabe gerade
            line(s2_rechts_und.getX('y'),s2_rechts_und.getY('y'),s2_rechts_und.getX('y') + breite*5,s2_rechts_und.getY('y'))


            if(s2_links_und.uebergabe() == true){
                farbe = 200;
            } else {
                farbe = 0;
            }

            stroke(0,farbe,0)
            // s2 mitte nicht : eingabe nach unten
            line(s2_links_und.getX('y') + (s2_mitte_nicht.getX('a') - s2_links_und.getX('y'))/2, s2_links_und.getY('y'),s2_links_und.getX('y') + (s2_mitte_nicht.getX('a') - s2_links_und.getX('y'))/2,s2_mitte_nicht.getY('a'));
            // s2 mitte nicht : eingabe gerade
            line(s2_links_und.getX('y') + (s2_mitte_nicht.getX('a') - s2_links_und.getX('y'))/2,s2_mitte_nicht.getY('a'),s2_mitte_nicht.getX('a'),s2_mitte_nicht.getY('a'));
            // s2 links und : ausgabe gerade linie
            line(s2_links_und.getX('y'),s2_links_und.getY('y'),s2_rechts_und.getX('y') + breite*5, s2_links_und.getY('y'));
            

            // !

            if (s2 == false ){
                farbe = 0;
            }
            if (s2 == true){
                farbe = 200;
            }
            stroke(0,farbe,0)
            // s2 links und : eingabe a s2
            line(s2_links_und.getX('a'),s2_links_und.getY('a'),x,s2_links_und.getY('a'));

            // !

            if (a == false ){
                farbe = 0;
            }
            if (a == true){
                farbe = 200;
            }
            stroke(0,farbe,0)
            // s2 links und : eingabe b s2
            line(x + breite,s2_links_und.getY('b'),s2_links_und.getX('b'),s2_links_und.getY('b'));
            // s2 rechts und : eingabe b gerade kurz 
            line(s2_rechts_und.getX('b'),s2_rechts_und.getY('b'),s2_mitte_nicht.getX('y') + (s2_rechts_und.getX('a') - s2_mitte_nicht.getX('y'))/2,s2_rechts_und.getY('b'));
            
            // s2 rechts und : eingabe b nach unten
            line(s2_mitte_nicht.getX('y') + (s2_rechts_und.getX('a') - s2_mitte_nicht.getX('y'))/2,s2_rechts_und.getY('b'),s2_mitte_nicht.getX('y') + (s2_rechts_und.getX('a') - s2_mitte_nicht.getX('y'))/2,s2_rechts_und.getY('b') + (breite/3)*2);
                        
            // s2 rechts und : eingabe b gerade lang
            line(s2_mitte_nicht.getX('y') + (s2_rechts_und.getX('a') - s2_mitte_nicht.getX('y'))/2,s2_rechts_und.getY('b') + (breite/3)*2,x + breite,s2_rechts_und.getY('b') + (breite/3)*2);
            stroke(0)
            // !

            

            // Verbindung vom Overflow

            // -> oben - oben

            if (e == true){
                farbe = 200;
            } else { 
                farbe = 0;
            }
            stroke(0,farbe,0)
            line(ov_2.getX('a'),ov_2.getY('a'),x + breite, ov_2.getY('a')); // Ergebnis
            line(ov_1.getX('a'),ov_1.getY('a'),x, ov_1.getY('a')); // Ergebnis
            line(x + breite,ov_1.getY('a'),x + breite, ov_2.getY('a')); // Ergebnis - Verbindung
            
            if (k2 == true){
                farbe = 200;
            } else { 
                farbe = 0;
            }
            stroke(0,farbe,0)
            line(ov_1.getX('b'),ov_1.getY('b'),x, ov_1.getY('b')); //b
            
            if (ov_1.uebergabe() == true){
                farbe = 200;
            } else { 
                farbe = 0;
            }
            stroke(0,farbe,0)
           
            line(ov_1.getX('y'),ov_1.getY('y'),s2_rechts_und.getX('y') + breite*3,ov_1.getY('y'));
            line(s2_rechts_und.getX('y') + breite*3,sr_2.getY('a'),s2_rechts_und.getX('y') + breite*3,ov_1.getY('y'));
            line(s2_rechts_und.getX('y') + breite*3,sr_2.getY('a'),sr_2.getX('a'),sr_2.getY('a'));

            // -> unten - unten

            if (k1 == true){
                farbe = 200;
            } else { 
                farbe = 0;
            }
            stroke(0,farbe,0)
            line(ov_2.getX('b'),ov_2.getY('b'),x, ov_2.getY('b')); //b

            if (ov_2.uebergabe() == true){
                farbe = 200;
            } else { 
                farbe = 0;
            }
            stroke(0,farbe,0)

            line(ov_2.getX('y'),ov_2.getY('y'),s2_rechts_und.getX('y') + breite*4,ov_2.getY('y'));
            line(s2_rechts_und.getX('y') + breite*4,sr_1.getY('a'),s2_rechts_und.getX('y') + breite*4,ov_2.getY('y'));
            line(s2_rechts_und.getX('y') + breite*4,sr_1.getY('a'),sr_1.getX('a'),sr_1.getY('a'));

            

            // ausgaben

            //line(s1_rechts_und.getX('y') + breite*2,s1_links_und.getY('y'),s1_rechts_und.getX('y') + breite*2,s2_rechts_und.getY('y') + breite*6);
            //line(s1_rechts_und.getX('y') + breite*1,s1_rechts_und.getY('y'),s1_rechts_und.getX('y') + breite*1,s2_rechts_und.getY('y') + breite*6);
            if (sr_1.uebergabe() == true){
                r2 = true;
                farbe = 200;
            } else {
                r1 = false;
                farbe = 0;
            }
            stroke(0,farbe,0)

            line(sr_2.getX('y'),sr_2.getY('y'),sr_2.getX('y') + breite*2,sr_2.getY('y'));
            line(sr_2.getX('y') + breite*2,s2_rechts_und.getY('y') + breite*6,sr_2.getX('y') + breite*2,sr_2.getY('y'));  

            if (sr_2.uebergabe() == true){
                r1 = true;
                farbe = 200;
            } else {
                farbe = 0;
                r1 = false;
            }
            stroke(0,farbe,0)
            line(sr_1.getX('y'),sr_1.getY('y'),sr_1.getX('y') + breite,sr_1.getY('y'));
            

            line(sr_1.getX('y') + breite*1,s2_rechts_und.getY('y') + breite*6,sr_1.getX('y') + breite*1,sr_1.getY('y'));

            // befehl

            if (b == false ){
                farbe = 0;
            }
            if (b == true && a == true){
                farbe = 200;
            }

            stroke(0,farbe,0)
            line(x,y,x+breite*18,y);
            line(x+breite*18,y,x + breite*18,s2_rechts_und.getY('y') + breite*6);

            // punkte

            ellipse(x + breite,s1_links_und.getY('b'),breite/3);
            ellipse(x + breite,s2_links_und.getY('b'),breite/3);

            ellipse(x + breite,s1_rechts_und.getY('b') + (breite/3)*2,breite/3);

            ellipse(s1_links_und.getX('y') + (s1_mitte_nicht.getX('a') - s1_links_und.getX('y'))/2,s1_links_und.getY('y'),breite/3);
            ellipse(s2_links_und.getX('y') + (s2_mitte_nicht.getX('a') - s2_links_und.getX('y'))/2,s2_links_und.getY('y'),breite/3);

            ellipse(x + breite,ov_1.getY('a'),breite/3)

            // eingabe text

            stroke(0);

            text('B', x - breite, y + breite/7);

            text('S1',x - breite, s1_links_und.getY('a') + breite/10);
            text('S2',x - breite, s2_links_und.getY('a') + breite/12);
            text('A',x - breite, s1_links_und.getY('b') + breite/3);

            text('E',x - breite, ov_1.getY('a') + breite/10);
            text('K2',x - breite, ov_1.getY('b') + breite/3);
            text('K1',x - breite, ov_2.getY('b') + breite/3);

            // ausgabe text

            text('L1', s1_rechts_und.getX('y') + breite - breite/4, s2_rechts_und.getY('y') + breite*6 + breite/1.5);
            text('L2', s1_rechts_und.getX('y') + breite*2 - breite/4, s2_rechts_und.getY('y') + breite*6 + breite/1.5);

            text('R1', sr_1.getX('y') + breite - breite/4, s2_rechts_und.getY('y') + breite*6 + breite/1.5);
            text('R2', sr_1.getX('y') + breite*2 - breite/4, s2_rechts_und.getY('y') + breite*6 + breite/1.5);

            text('B', x+breite*18 - breite/7, s2_rechts_und.getY('y') + breite*6 + breite/1.5)    
        }

        if ( this.einheit == 'rechenwerk'){

            let xo = this.objektListe[0];
            let xu = this.objektListe[1];

            xo.setA(b);
            xo.setB(w);

            xu.setA(xo.uebergabe());
            xu.setB(w);

            let farbe = 0;

            if(xu.uebergabe() == true){
                e = true;
                farbe = 200;
            } else {
                e = false;
                farbe = 0;
            }            
            stroke(0,farbe,0)

            line(xo.getX('y'),xo.getY('y'),xo.getX('y')+breite*2,xo.getY('y'))


            if ( b == true){
                farbe == true;
            } else {
                farbe == 0;
            }
            stroke(0,farbe,0)
            line(x,xu.getY('a'),xu.getX('a'),xu.getY('a'));

            if (w == true){
                farbe = 200;
            } else {
                farbe = 0;
            }
            stroke(0,farbe,0)
            line(x+breite,xu.getY('b'),xu.getX('b'),xu.getY('b'));
            line(x,xu.getY('b')+breite,x + breite*4,xu.getY('b')+breite)
            line(xo.getX('b')- breite,xo.getY('b'),xo.getX('b'),xo.getY('b'));
            line(x+breite, xu.getY('b'), x+breite, xu.getY('b')+ breite);
            line(x+breite*4, xo.getY('b'), x+breite*4, xu.getY('b')+ breite);

            if ( xo.uebergabe() == true){
                farbe = 200;
            } else {
                farbe = 0;
            }
            stroke(0,farbe,0);
            line(xu.getX('y'),xu.getY('y'),xo.getX('a'),xo.getY('a'));

            stroke(0);

            ellipse(x+breite,xu.getY('b')+breite, breite/3);

            // eingabe text

            text('B',x-breite,xu.getY('a') + breite/7);
            text('W',x-breite,xu.getY('b') + breite + breite/7);

            // ausgabe text

            text('E', xo.getX('y')+breite*2.5,xo.getY('y') + breite/7);
        }

        if ( this.einheit == 'speichereinheit'){
            
            let oben = this.objektListe[0];
            let unten = this.objektListe[1];

            let untenT = this.objektListe[2];
            let obenT = this.objektListe[3];

            oben.setErgebnis(e);
            oben.setSchreiben(r1);

            unten.setErgebnis(e);
            unten.setSchreiben(r2);

            obenT.setBasis(l1);
            obenT.setEmitter(oben.getStatus())

            untenT.setBasis(l2);
            untenT.setEmitter(unten.getStatus())

            let farbe = 0;

            if(e == true){
                farbe = 200;
            } else {
                farbe = 0;
            }
            stroke(0,farbe,0);
            line(oben.getX('bearbeiten'),oben.getY('bearbeiten'),x,oben.getY('bearbeiten'));
            line(unten.getX('bearbeiten'),unten.getY('bearbeiten'),x+breite,unten.getY('bearbeiten'));
            line(x+breite,unten.getY('bearbeiten'),x+breite,oben.getY('bearbeiten'));

            if(r1 == true){
                farbe = 200;
            } else {
                farbe = 0;
            }
            stroke(0,farbe,0);

            // Verbindungen von oben

            line(oben.getX('schreiben'),oben.getY('schreiben'),x,oben.getY('schreiben'));

            if(r2 == true){
                farbe = 200;
            } else {
                farbe = 0;
            }
            stroke(0,farbe,0);
            // Verbindungen von unten

            line(unten.getX('schreiben'),unten.getY('schreiben'),x,unten.getY('schreiben'));

            // Verbindung von oben nach unten

            if(unten.getStatus() == true){
                farbe = 200;
            } else {
                farbe = 0;
            }
            stroke(0,farbe,0);
            // Verbindung von oben nach unten (Transistor)


            // transistoren 

            if(oben.getStatus() == true){
                farbe = 200;
            } else {
                farbe = 0;
            }
            stroke(0,farbe,0);
            line(oben.getX('ausgabe'),oben.getY('ausgabe'),obenT.getX('e'),obenT.getY('e'));

            // -> 1bit - transistor

            if(unten.getStatus() == true){

                farbe = 200;
            } else {
                farbe = 0;
            }

            stroke(0,farbe,0);
            line(unten.getX('ausgabe'),unten.getY('ausgabe'),untenT.getX('e'),untenT.getY('e'));

            // ausgabe transistor
            if(obenT.getKollektorStatus() == true){
                farbe = 200;
            } else { 
                farbe = 0;
            }

            stroke(0,farbe,0);
            line(obenT.getX('k'),obenT.getY('k'),obenT.getX('k')+breite*2,obenT.getY('k'));

            if(untenT.getKollektorStatus() == true){
                farbe = 200;
            } else { 
                farbe = 0;
            }
            stroke(0,farbe,0);
            line(untenT.getX('k'),untenT.getY('k'),untenT.getX('k')+breite,untenT.getY('k'));
            line(obenT.getX('k')+breite,obenT.getY('k'),untenT.getX('k')+breite,untenT.getY('k'))

            if (obenT.getKollektorStatus() == true || untenT.getKollektorStatus() == true){
                farbe = 200;
            } else { 
                farbe = 0;
            }
            stroke(0,farbe,0);
            line(obenT.getX('k')+breite,obenT.getY('k'),obenT.getX('k')+breite*2,obenT.getY('k'))
            
            // lesen transistor
            if (l1 == true){
                farbe = 200;
            } else { 
                farbe = 0;
            }
            stroke(0,farbe,0);

            line(x,obenT.getY('b') + breite,obenT.getX('b'),obenT.getY('b')+breite);
            line(obenT.getX('b'),obenT.getY('b')+breite,obenT.getX('b'),obenT.getY('b'));

            if(l2 == true){
                farbe = 200;
            } else { 
                farbe = 0;
            }
            stroke(0,farbe,0);
            line(x,untenT.getY('b') + breite,untenT.getX('b'),untenT.getY('b')+breite);
            line(obenT.getX('b'),untenT.getY('b')+breite,untenT.getX('b'),untenT.getY('b'));

            // text

            stroke(0);

            textSize(30);

            text('E',x - breite, oben.getY('bearbeiten'));

            text('R1',x - breite, oben.getY('schreiben') + breite/7);

            text('L1',x - breite, obenT.getY('b') + breite/0.9);

            text('R2',x - breite, unten.getY('schreiben') + breite/7);

            text('L2',x - breite, untenT.getY('b') + breite/0.9);

            text('W',obenT.getX('k') + breite * 2.5, obenT.getY('k') + breite/7);

            // kreise

            ellipse(oben.getX('bearbeiten')-breite,oben.getY('bearbeiten'),breite/3);

            ellipse(obenT.getX('k') + breite,obenT.getY('k'),breite/3);

        }
    }
}

function interface(){

    let breite = int(width/30);

    // interface fuer computer

    stroke(0)

    noFill();
    strokeWeight(3);
    rect(width/38 - breite/2,height/15-breite/4,breite*21,breite*15);

    // interface fuer eingabe

    noFill();
    strokeWeight(3);
    rect(width/2 + breite*6.7, height/15 - breite/4, breite*8, breite*2.8);
    
    textSize(30);
    fill(0)
    strokeWeight(2);
    text('Steuerwerk',width/2 + breite*9.8, height/15 + breite/2);
    text('Rechenwerk',width/2 + breite*9.7, height/15 + breite*1.2);
    text('Speicher',width/2 + breite*10, height/15 + breite*2);

    text('B',width/2 + breite*8,height/2 + breite*4.6);
    text('S1',width/2 + breite*9.4,height/2 + breite*4.6);
    text('S2',width/2 + breite*11.3,height/2 + breite*4.6);
    text('A',width/2 + breite*13,height/2 + breite*4.6);

    text('E',width/2 + breite*8,height/2 - breite*2.7);
    text('K1',width/2 + breite*9.4,height/2 - breite*2.7);
    text('K2',width/2 + breite*11.3,height/2 - breite*2.7);
    text('W',width/2 + breite*13,height/2 - breite*2.7);

    text('L1',width/2 + breite*8,height/1.78);
    text('R1',width/2 + breite*9.4,height/1.78);
    text('L2',width/2 + breite*11.3,height/1.78);
    text('R2',width/2 + breite*13,height/1.78);

    

    noFill();
    strokeWeight(3);
    rect(width/2 + breite*6.7, height/2 - breite*4.3, breite*8, breite*11.75);

    // speicherstatus

    textSize(30);
    fill(0)
    
    strokeWeight(2);
    //text('Speicheradresse 1 :',width/2 + breite*7.8, height/15 + breite*6.2);
    //text('Speicheradresse 2 :',width/2 + breite*7.8, height/15 + breite*7.2);

    noFill();
    strokeWeight(1);
    rect(width/2 + breite*7.5, height/15 + breite*6 + breite*1.5, breite*6.4, breite*2.7);
    rect(width/2 + breite*7.5, height/15 + breite*9.7 + breite*1.5, breite*6.4, breite*2.7);
    rect(width/2 + breite*7.5, height/15 + breite*2.2 + breite*1.7, breite*6.4, breite*2.7);

    // ausgewaehlt
  
    // unten

    if (b == true){
        stroke(255,0,0);
        rect(width/2 + breite*7.9,height/2 + breite*5.71,breite/2,breite/2)
        stroke(0)
    } else {
        stroke(255,0,0);
        rect(width/2 + breite*7.9,height/2 + breite*5.02,breite/2,breite/2)
        stroke(0)
    }
  
  if (s1 == true){
        stroke(255,0,0);
        rect(width/2 + breite*9.4,height/2 + breite*5.71,breite/2,breite/2)
        stroke(0)
    } else {
        stroke(255,0,0);
        rect(width/2 + breite*9.4,height/2 + breite*5.02,breite/2,breite/2)
        stroke(0)
    }
  
  if (s2 == true){
        stroke(255,0,0);
        rect(width/2 + breite*11.3,height/2 + breite*5.71,breite/2,breite/2)
        stroke(0)
    } else {
        stroke(255,0,0);
        rect(width/2 + breite*11.3,height/2 + breite*5.02,breite/2,breite/2)
        stroke(0)
    }
  
  if (a == true){
        stroke(255,0,0);
        rect(width/2 + breite*12.9,height/2 + breite*5.71,breite/2,breite/2)
        stroke(0)
    } else {
        stroke(255,0,0);
        rect(width/2 + breite*12.9,height/2 + breite*5.02,breite/2,breite/2)
        stroke(0)
    }
  
    // mitte
  
       if (l1 == true){
        stroke(255,0,0);
        rect(width/2 + breite*7.9,height/2 + breite*2.04,breite/2,breite/2)
        stroke(0)
    } else {
        stroke(255,0,0);
        rect(width/2 + breite*7.9,height/2 + breite*1.4,breite/2,breite/2)
        stroke(0)
    }
  
  if (r1 == true){
        stroke(255,0,0);
        rect(width/2 + breite*9.4,height/2 + breite*2.04,breite/2,breite/2)
        stroke(0)
    } else {
        stroke(255,0,0);
        rect(width/2 + breite*9.4,height/2 + breite*1.4,breite/2,breite/2)
        stroke(0)
    }
  
  if (l2 == true){
        stroke(255,0,0);
        rect(width/2 + breite*11.3,height/2 + breite*2.04,breite/2,breite/2)
        stroke(0)
    } else {
        stroke(255,0,0);
        rect(width/2 + breite*11.3,height/2 + breite*1.4,breite/2,breite/2)
        stroke(0)
    }
  
  if (r2 == true){
        stroke(255,0,0);
        rect(width/2 + breite*12.9,height/2 + breite*2.04,breite/2,breite/2)
        stroke(0)
    } else {
        stroke(255,0,0);
        rect(width/2 + breite*12.9,height/2 + breite*1.4,breite/2,breite/2)
        stroke(0)
    }
  
  // oben
  
       if (e == true){
        stroke(255,0,0);
        rect(width/2 + breite*7.9,height/2 - breite*1.56,breite/2,breite/2)
        stroke(0)
    } else {
        stroke(255,0,0);
        rect(width/2 + breite*7.9,height/2 - breite*2.35,breite/2,breite/2)
        stroke(0)
    }
  
  if (k1 == true){
        stroke(255,0,0);
        rect(width/2 + breite*9.4,height/2 - breite*1.56,breite/2,breite/2)
        stroke(0)
    } else {
        stroke(255,0,0);
        rect(width/2 + breite*9.4,height/2 - breite*2.35,breite/2,breite/2)
        stroke(0)
    }
  
  if (k2 == true){
        stroke(255,0,0);
        rect(width/2 + breite*11.3,height/2 - breite*1.56,breite/2,breite/2)
        stroke(0)
    } else {
        stroke(255,0,0);
        rect(width/2 + breite*11.3,height/2 - breite*2.35,breite/2,breite/2)
        stroke(0)
    }
  
  if (w == true){
        stroke(255,0,0);
        rect(width/2 + breite*12.9,height/2 - breite*1.56,breite/2,breite/2)
        stroke(0)
    } else {
        stroke(255,0,0);
        rect(width/2 + breite*12.9,height/2 - breite*2.35,breite/2,breite/2)
        stroke(0)
    }
}

let z;

function eingabeButtons(){

    let breite = int(width/30);

    // fuer B
    
    let b_0 = createButton('0');
    b_0.position(width/2 + breite*8,height/2 + breite*5.1);
    b_0.mousePressed(setBfalse);

    let b_1 = createButton('1');
    b_1.position(width/2 + breite*8,height/2 + breite*5.8);
    b_1.mousePressed(setBtrue);

    // fuer S1
    
    let s1_0 = createButton('0');
    s1_0.position(width/2 + breite*9.5,height/2 + breite*5.1);
    s1_0.mousePressed(setS1false);

    let s1_1 = createButton('1');
    s1_1.position(width/2 + breite*9.5,height/2 + breite*5.8);
    s1_1.mousePressed(setS1true);

    // fuer S2
    
    let s2_0 = createButton('0');
    s2_0.position(width/2 + breite*11.4,height/2 + breite*5.1);
    s2_0.mousePressed(setS2false);

    let s2_1 = createButton('1');
    s2_1.position(width/2 + breite*11.4,height/2 + breite*5.8);
    s2_1.mousePressed(setS2true);

    // fuer A
    
    let a_0 = createButton('0');
    a_0.position(width/2 + breite*13,height/2 + breite*5.1);
    a_0.mousePressed(setAfalse);

    let a_1 = createButton('1');
    a_1.position(width/2 + breite*13,height/2 + breite*5.8);
    a_1.mousePressed(setAtrue);

    let speicher = createButton('auswählen');
    speicher.position(width/2 + breite*7.8, height/15 + breite/6);
    speicher.mousePressed(zeichnungSt);
    
    let steuerwerk = createButton('auswählen');
    steuerwerk.position(width/2 + breite*7.8, height/15 + breite*1.7);
    steuerwerk.mousePressed(zeichnungR);

    let re= createButton('auswählen');
    re.position(width/2 + breite*7.8, height/15 + breite*0.9);
    re.mousePressed(zeichnungSp);

    let erg_0 = createButton('0');
    erg_0.position(width/2 + breite*8,height/2 - breite*2.3);
    erg_0.mousePressed(setEfalse)
    let erg_1 = createButton('1');
    erg_1.position(width/2 + breite*8,height/2 - breite*1.5)
    erg_1.mousePressed(setEtrue)


    let k1_0 = createButton('0');
    k1_0.position(width/2 + breite*9.5,height/2 - breite*2.3)
    k1_0.mousePressed(setk1false)
    let k1_1 = createButton('1');
    k1_1.position(width/2 + breite*9.5,height/2 - breite*1.5)
    k1_1.mousePressed(setk1true)

    let k2_0 = createButton('0');
    k2_0.position(width/2 + breite*11.4,height/2 - breite*2.3)
    k2_0.mousePressed(setk2false)

    let k2_1 = createButton('1');
    k2_1.position(width/2 + breite*11.4,height/2 - breite*1.5)
    k2_1.mousePressed(setk2true)

    let l1_0 = createButton('0')
    l1_0.position(width/2 + breite*8,height/1.7)
    l1_0.mousePressed(setl1false)

    let l1_1 = createButton('1')
    l1_1.position(width/2 + breite*8,height/1.6)
    l1_1.mousePressed(setl1true)

    let l2_0 = createButton('0')
    l2_0.position(width/2 + breite*11.4,height/1.7)
    l2_0.mousePressed(setl2false)

    let l2_1 = createButton('1')
    l2_1.position(width/2 + breite*11.4,height/1.6)
    l2_1.mousePressed(setl2true)

    let r1_0 = createButton('0')
    r1_0.position(width/2 + breite*9.5,height/1.7)
    r1_0.mousePressed(setr1false)

    let r1_1 = createButton('1')
    r1_1.position(width/2 + breite*9.5,height/1.6)
    r1_1.mousePressed(setr1true)

    let r2_0 = createButton('0')
    r2_0.position(width/2 + breite*13,height/1.7)
    r2_0.mousePressed(setr2false)

    let r2_1 = createButton('1')
    r2_1.position(width/2 + breite*13,height/1.6)
    r2_1.mousePressed(setr2true)

    let w_0 = createButton('0')
    w_0.position(width/2 + breite*13,height/2 - breite*2.3)
    w_0.mousePressed(setWfalse)

    let w_1 = createButton('1')
    w_1.position(width/2 + breite*13,height/2 - breite*1.5)
    w_1.mousePressed(setWtrue)

    
}

function zeichnungSt(){
    z = 3
}

function zeichnungR(){
    z = 1
}

function zeichnungSp(){
    z = 2
}

function erstelleAlleGatterObjekte() {
    test.erstelleGatterObjekte();
    test1.erstelleGatterObjekte();
    test2.erstelleGatterObjekte();
}

let test = new Einheit('speichereinheit',450,300)
let test1 = new Einheit('rechenwerk',450,270)
let test2 = new Einheit('steuerwerk',140,140)

function setup() {
  createCanvas(1920, 1080);
  erstelleAlleGatterObjekte();
  eingabeButtons();
}  

function draw() {    
    background(220);
    interface();
    if (z == 1){
        test.zeichnen();
    }
    if (z == 2){
        test1.zeichnen();
    }
    if (z == 3){
        test2.zeichnen();
    }

}