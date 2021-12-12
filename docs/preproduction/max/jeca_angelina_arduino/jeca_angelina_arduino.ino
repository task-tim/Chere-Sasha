

int brochePhoto = A2;
int valeurPrecedentePhoto;

int brocheDel = 6;

void setup(){
  Serial.begin(57600);
  }


void loop() {
// PHOTORESISTANCE
  int nouvelleValeurPhoto = analogRead( brochePhoto ) ;
  if ( valeurPrecedentePhoto != nouvelleValeurPhoto ) {
    Serial.print("photo ");
    Serial.print( nouvelleValeurPhoto );
    Serial.println();
    }
   


  }
