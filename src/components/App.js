import React, { Component } from 'react';
import '../styles/App.css';
var arr = [];
var arrOfRootsId = [];
var root_id = "№№";
class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          thisIsNewVerb: "default",
          readyToAdditionals: "default",
          thisIsNewTranslation: '1',
          thisIsNewFamily: '1',
          thisIsNewSynonym: '1',
          thisIsNewAntonym: '1',
          thisIsNewPhrase: '1',
          thisIsPassive: '0',
          translationId: '',
          familyId: '',
          synonymId: '',
          antonymId: '',
          phraseId: '',
          sound: 'sound.wav',
          benjan: '',
          letter1: '',
          letter2: '',
          letter3: '',
          letter4: 'non',
          descript:'',
          inf:'_',
          infS:'_',
          p1s: '_',
          p1sS: '_',
          p2sm: '_',
          p2smS: '_',
          p2sw: '_',
          p2swS: '_',
          p3sm: '_',
          p3smS: '_',
          p3sw: '_',
          p3swS: '_',
          p1m: '_',
          p1mS: '_',
          p2mm: '_',
          p2mmS: '_',
          p2mw: '_',
          p2mwS: '_',
          p3m: '_',
          p3mS: '_',
          nsm: '_',
          nsmS: '_',
          nsw: '_',
          nswS: '_',
          nmm: '_',
          nmmS: '_',
          nmw: '_',
          nmwS: '_',
          f1s: '_',
          f1sS: '_',
          f2sm: '_',
          f2smS: '_',
          f2sw: '_',
          f2swS: '_',
          f3sm: '_',
          f3smS: '_',
          f3sw: '_',
          f3swS: '_',
          f1m: '_',
          f1mS: '_',
          f2mm: '_',
          f2mmS: '_',
          f2mw: '_',
          f2mwS: '_',
          f3m: '_',
          f3mS: '_',
          ism: '_',
          ismS: '_',
          isw: '_',
          iswS: '_',
          imm: '_',
          immS: '_',
          imw: '_',
          imwS: '_',
          ns: '_',
          nsS: '_',
          nm: '_',
          nmS: '_',
          asm: '_',
          asmS: '_',
          asw: '_',
          aswS: '_',
          amm: '_',
          ammS: '_',
          amw: '_',
          amwS: '_',
          preposition: '_',
          translateRu: '_',
          translateEn: '_',
          translateFr: '_',
          phrase: '_',
          phraseTranslateRu: '_',
          phraseTranslateEn: '_',
          phraseTranslateFr: '_',
          family: '_',
          familyTranslateRu: '_',
          familyTranslateEn: '_',
          familyTranslateFr: '_',
          synonym: '_',
          synonymTranslateRu: '_',
          synonymTranslateEn: '_',
          synonymTranslateFr: '_',
          antonym: '_',
          antonymTranslateRu: '_',
          antonymTranslateEn: '_',
          antonymTranslateFr: '_',
          sentence: '_',
          sentenceTranslateRu: '_',
          sentenceTranslateEn: '_',
          sentenceTranslateFr: '_',
          roots:[],
          rootByNumber:[],
          translationsByNumber:[],
          phrasesByNumber:[],
          familiesByNumber:[],
          synonymsByNumber:[],
          antonymsByNumber:[],
          sentenciesByNumber:[],
          activepassivesByNumber:[],
          activepassivesByNumber1:[],
          verbsbyletters:[]
      };

      this.onBenjanChange = this.onBenjanChange.bind(this);
      this.onLetter1Change = this.onLetter1Change.bind(this);
      this.onLetter2Change = this.onLetter2Change.bind(this);
      this.onLetter3Change = this.onLetter3Change.bind(this);
      this.onLetter4Change = this.onLetter4Change.bind(this);
      this.onDescriptChange = this.onDescriptChange.bind(this);
      this.onInfChange = this.onInfChange.bind(this);
      this.onInfSChange = this.onInfSChange.bind(this);
      this.onP1sChange = this.onP1sChange.bind(this);
      this.onP1sSChange = this.onP1sSChange.bind(this);
      this.onP2smChange = this.onP2smChange.bind(this);
      this.onP2smSChange = this.onP2smSChange.bind(this);
      this.onP2swChange = this.onP2swChange.bind(this);
      this.onP2swSChange = this.onP2swSChange.bind(this);
      this.onP3smChange = this.onP3smChange.bind(this);
      this.onP3smSChange = this.onP3smSChange.bind(this);
      this.onP3swChange = this.onP3swChange.bind(this);
      this.onP3swSChange = this.onP3swSChange.bind(this);
      this.onP1mChange = this.onP1mChange.bind(this);
      this.onP1mSChange = this.onP1mSChange.bind(this);
      this.onP2mmChange = this.onP2mmChange.bind(this);
      this.onP2mmSChange = this.onP2mmSChange.bind(this);
      this.onP2mwChange = this.onP2mwChange.bind(this);
      this.onP2mwSChange = this.onP2mwSChange.bind(this);
      this.onP3mChange = this.onP3mChange.bind(this);
      this.onP3mSChange = this.onP3mSChange.bind(this);
      this.onNsmChange = this.onNsmChange.bind(this);
      this.onNsmSChange = this.onNsmSChange.bind(this);
      this.onNswChange = this.onNswChange.bind(this);
      this.onNswSChange = this.onNswSChange.bind(this);
      this.onNmmChange = this.onNmmChange.bind(this);
      this.onNmmSChange = this.onNmmSChange.bind(this);
      this.onNmwChange = this.onNmwChange.bind(this);
      this.onNmwSChange = this.onNmwSChange.bind(this);
      this.onF1sChange = this.onF1sChange.bind(this);
      this.onF1sSChange = this.onF1sSChange.bind(this);
      this.onF2smChange = this.onF2smChange.bind(this);
      this.onF2smSChange = this.onF2smSChange.bind(this);
      this.onF2swChange = this.onF2swChange.bind(this);
      this.onF2swSChange = this.onF2swSChange.bind(this);
      this.onF3smChange = this.onF3smChange.bind(this);
      this.onF3smSChange = this.onF3smSChange.bind(this);
      this.onF3swChange = this.onF3swChange.bind(this);
      this.onF3swSChange = this.onF3swSChange.bind(this);
      this.onF1mChange = this.onF1mChange.bind(this);
      this.onF1mSChange = this.onF1mSChange.bind(this);
      this.onF2mmChange = this.onF2mmChange.bind(this);
      this.onF2mmSChange = this.onF2mmSChange.bind(this);
      this.onF2mwChange = this.onF2mwChange.bind(this);
      this.onF2mwSChange = this.onF2mwSChange.bind(this);
      this.onF3mChange = this.onF3mChange.bind(this);
      this.onF3mSChange = this.onF3mSChange.bind(this);
      this.onIsmChange = this.onIsmChange.bind(this);
      this.onIsmSChange = this.onIsmSChange.bind(this);
      this.onIswChange = this.onIswChange.bind(this);
      this.onIswSChange = this.onIswSChange.bind(this);
      this.onImmChange = this.onImmChange.bind(this);
      this.onImmSChange = this.onImmSChange.bind(this);
      this.onImwChange = this.onImwChange.bind(this);
      this.onImwSChange = this.onImwSChange.bind(this);
      this.onNsChange = this.onNsChange.bind(this);
      this.onNsSChange = this.onNsSChange.bind(this);
      this.onNmChange = this.onNmChange.bind(this);
      this.onNmSChange = this.onNmSChange.bind(this);  
      this.onAsmChange = this.onAsmChange.bind(this);
      this.onAsmSChange = this.onAsmSChange.bind(this);
      this.onAswChange = this.onAswChange.bind(this);
      this.onAswSChange = this.onAswSChange.bind(this);
      this.onAmmChange = this.onAmmChange.bind(this);
      this.onAmmSChange = this.onAmmSChange.bind(this);
      this.onAmwChange = this.onAmwChange.bind(this);
      this.onAmwSChange = this.onAmwSChange.bind(this);
      this.onPrepositionChange = this.onPrepositionChange.bind(this);
      this.onTranslateRuChange = this.onTranslateRuChange.bind(this);
      this.onTranslateEnChange = this.onTranslateEnChange.bind(this);
      this.onTranslateFrChange = this.onTranslateFrChange.bind(this);
      this.onPhraseChange = this.onPhraseChange.bind(this);   
      this.onPhraseTranslateRuChange = this.onPhraseTranslateRuChange.bind(this);
      this.onPhraseTranslateEnChange = this.onPhraseTranslateEnChange.bind(this);
      this.onPhraseTranslateFrChange = this.onPhraseTranslateFrChange.bind(this);
      this.onFamilyChange = this.onFamilyChange.bind(this);
      this.onFamilyTranslateRuChange = this.onFamilyTranslateRuChange.bind(this);
      this.onFamilyTranslateEnChange = this.onFamilyTranslateEnChange.bind(this);
      this.onFamilyTranslateFrChange = this.onFamilyTranslateFrChange.bind(this);
      this.onAntonymChange = this.onAntonymChange.bind(this);
      this.onAntonymTranslateRuChange = this.onAntonymTranslateRuChange.bind(this);
      this.onAntonymTranslateEnChange = this.onAntonymTranslateEnChange.bind(this);
      this.onAntonymTranslateFrChange = this.onAntonymTranslateFrChange.bind(this);
      this.onSynonymChange = this.onSynonymChange.bind(this);
      this.onSynonymTranslateRuChange = this.onSynonymTranslateRuChange.bind(this);
      this.onSynonymTranslateEnChange = this.onSynonymTranslateEnChange.bind(this);
      this.onSynonymTranslateFrChange = this.onSynonymTranslateFrChange.bind(this);
      this.onSentenceChange = this.onSentenceChange.bind(this);
      this.onSentenceTranslateRuChange = this.onSentenceTranslateRuChange.bind(this);
      this.onSentenceTranslateEnChange = this.onSentenceTranslateEnChange.bind(this);
      this.onSentenceTranslateFrChange = this.onSentenceTranslateFrChange.bind(this);
      this.getAllForms = this.getAllForms.bind(this);
      this.getRoots = this.getRoots.bind(this);
      this.getVerbByRootId = this.getVerbByRootId.bind(this);
      this.getAllTranslations = this.getAllTranslations.bind(this);
      this.getAllFamilies = this.getAllFamilies.bind(this);
      this.getAllSynonyms = this.getAllSynonyms.bind(this);
      this.getAllAntonyms = this.getAllAntonyms.bind(this);
      this.getAllPhrases = this.getAllPhrases.bind(this);
      this.getAllActivePassives = this.getAllActivePassives.bind(this);
      this.getTranslationById = this.getTranslationById.bind(this);
      this.getFamilyById = this.getFamilyById.bind(this);
      this.getSynonymById = this.getSynonymById.bind(this);
      this.getAntonymById = this.getAntonymById.bind(this);
      this.getPhraseById = this.getPhraseById.bind(this);
      this.getVerbsByLetters = this.getVerbsByLetters.bind(this);
      this.addNewWord = this.addNewWord.bind(this);
      this.addNewPhrase = this.addNewPhrase.bind(this);
      this.addNewFamily = this.addNewFamily.bind(this);
      this.addNewSynonym = this.addNewSynonym.bind(this);
      this.addNewAntonym = this.addNewAntonym.bind(this);
      this.addNewSentence = this.addNewSentence.bind(this);
      this.setActivePassive = this.setActivePassive.bind(this);
      this.updateWord = this.updateWord.bind(this); 
      this.updateTranslation = this.updateTranslation.bind(this);
      this.updateFamily = this.updateFamily.bind(this);
      this.updateSynonym = this.updateSynonym.bind(this);
      this.updateAntonym = this.updateAntonym.bind(this);
      this.updatePhrase = this.updatePhrase.bind(this);
      this.deleteTranslationbById = this.deleteTranslationbById.bind(this);
      this.deleteFamilyById = this.deleteFamilyById.bind(this);
      this.deleteSynonymById = this.deleteSynonymById.bind(this);
      this.deleteAntonymById = this.deleteAntonymById.bind(this);
      this.deletePhraseById = this.deletePhraseById.bind(this);
      this.deleteVerbByRootId = this.deleteVerbByRootId.bind(this);
      this.renderSwitch = this.renderSwitch.bind(this);
      this.renderSwitch1 = this.renderSwitch1.bind(this);
      this.renderSwitch2 = this.renderSwitch2.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.createDump = this.createDump.bind(this);
    }

    getAllForms(e){
      e.preventDefault();
      this.setState({thisIsNewVerb:"1"});
      switch (this.state.benjan) {
        case 'פעל_כתב':
        if(this.state.letter1 == "פ" || this.state.letter1 == "ת"||this.state.letter1 == 'כ'||this.state.letter1 == 'ב'||this.state.letter1 == 'ת'){ 
          this.setState({
            p1s: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+this.state.letter3+"ְתִּי",
            p2sm: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+this.state.letter3+"ְתָּ",
            p2sw: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+this.state.letter3+"ְתְּ",
            p3sm: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+this.state.letter3,
            p3sw: this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"ָה",
            p1m: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+this.state.letter3+"ְנוּ",
            p2mm: this.state.letter1+"ְּ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּם",
            p2mw: this.state.letter1+"ְּ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּן",
            p3m: this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            nsm: this.state.letter1+"ּוֹ"+this.state.letter2+"ֵ"+this.state.letter3,
            nsw: this.state.letter1+"ּוֹ"+this.state.letter2+"ֶ"+this.state.letter3+"ֶת",
            nmm: this.state.letter1+"ּוֹ"+this.state.letter2+"ְ"+this.state.letter3+"ִים",
            nmw: this.state.letter1+"ּוֹ"+this.state.letter2+"ְ"+this.state.letter3+"וֹת",
            ism: this.state.letter1+"ְּ"+this.state.letter2+"ֹ"+this.state.letter3,
            isw: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
            imm: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            imw: this.state.letter1+"ְּ"+this.state.letter2+"ֹ"+this.state.letter3+"ְנָה",
            ns: this.state.letter1+"ְּ"+this.state.letter2+"ִי"+this.state.letter3+"ָה",
            nm: this.state.letter1+"ְּ"+this.state.letter2+"ִי"+this.state.letter3+"וֹת",
            asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+this.state.letter3,
            asw: this.state.letter1+"ְּ"+this.state.letter2+"וּ"+this.state.letter3+"ָה",
            amm: this.state.letter1+"ְּ"+this.state.letter2+"וּ"+this.state.letter3+"ִים",
            amw: this.state.letter1+"ְּ"+this.state.letter2+"וּ"+this.state.letter3+"וֹת"
          });
          if (this.state.letter3 == "כ"){
            this.setState({
              p3sm: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+"ך",
              nsm: this.state.letter1+"ּוֹ"+this.state.letter2+"ֵ"+"ך",
              ism: this.state.letter1+"ְּ"+this.state.letter2+"ֹ"+"ך", 
              asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+"ך"
            });
          }
          if (this.state.letter3 == "מ"){
            this.setState({
              p3sm: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+"ם",
              nsm: this.state.letter1+"ּוֹ"+this.state.letter2+"ֵ"+"ם",
              ism: this.state.letter1+"ְּ"+this.state.letter2+"ֹ"+"ם", 
              asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+"ם"
            });
          } 
          if (this.state.letter3 == "נ"){
            this.setState({
              imw: this.state.letter1+"ְּ"+this.state.letter2+"ֹ"+"נָּה",
              p1m: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+"נּוּ",
              p3sm: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+"ן",
              nsm: this.state.letter1+"ּוֹ"+this.state.letter2+"ֵ"+"ן",
              ism: this.state.letter1+"ְּ"+this.state.letter2+"ֹ"+"ן", 
              asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+"ו"
            });
          } 
          if (this.state.letter3 == "פ"){
            this.setState({
              p3sm: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+"ף",
              nsm: this.state.letter1+"ּוֹ"+this.state.letter2+"ֵ"+"ף",
              ism: this.state.letter1+"ְּ"+this.state.letter2+"ֹ"+"ף",
              asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+"ף"
            });
          }
          if (this.state.letter3 == "צ"){
            this.setState({
              p3sm: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+"ץ",
              nsm: this.state.letter1+"ּוֹ"+this.state.letter2+"ֵ"+"ץ",
              ism: this.state.letter1+"ְּ"+this.state.letter2+"ֹ"+"ץ",
              asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+"ץ"
            });
          }                                              
        }else{
          this.setState({
            p1s: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְתִּי",
            p2sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְתָּ",
            p2sw: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְתְּ",
            p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3,
            p3sw: this.state.letter1+"ָ"+this.state.letter2+"ְ"+this.state.letter3+"ָה",
            p1m: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְנוּ",
            p2mm: this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּם",
            p2mw: this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּן",
            p3m: this.state.letter1+"ָ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+this.state.letter3,
            nsw: this.state.letter1+"וֹ"+this.state.letter2+"ֶ"+this.state.letter3+"ֶת",
            nmm: this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"ִים",
            nmw: this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"וֹת",
            ism: this.state.letter1+"ְ"+this.state.letter2+"ֹ"+this.state.letter3,
            isw: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
            imm: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            imw: this.state.letter1+"ְ"+this.state.letter2+"ֹ"+this.state.letter3+"ְנָה",
            ns: this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3+"ָה",
            nm: this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3+"וֹת",
            asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+this.state.letter3,
            asw: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"ָה",
            amm: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"ִים",
            amw: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"וֹת"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ך",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ך",
              ism: this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ך",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ך"
            });
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ם",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ם",
              ism: this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ם",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ם"
            });
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              imw: this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"נָּה",
              p1m: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"נּוּ",
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ן",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ן",
              ism: this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ן",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ן"
            });
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ף",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ף",
              ism: this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ף",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ף"
            });
          }
          if(this.state.letter3 == "צ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ץ",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ץ",
              ism: this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ץ",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ץ"
            });
          }
        }
        if(this.state.letter2 == 'פ'||this.state.letter2 == 'כ'||this.state.letter2 == 'ב'){
          this.setState({
            inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+this.state.letter3,
            f1s: "אֶ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+this.state.letter3,
            f2sm: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+this.state.letter3,
            f2sw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
            f3sm: "יִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+this.state.letter3,
            f3sw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+this.state.letter3,
            f1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+this.state.letter3,
            f2mm: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
            f2mw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+this.state.letter3+"ְנָה",
            f3m: "יִ"+this.state.letter1+"ְ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ך",
              f1s: "אֶ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּּ"+"ך",
              f2sm: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ך",
              f3sm: "יִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ך",
              f3sw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ך",
              f1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ך"
            });            
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ם",
              f1s: "אֶ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ם",
              f2sm: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ם",
              f3sm: "יִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ם",
              f3sw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ם",
              f1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ם"
            });            
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              f2mw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"נָּה",
              inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ן",
              f1s: "אֶ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ן",
              f2sm: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ן",
              f3sm: "יִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ן",
              f3sw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ן",
              f1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ן"
            });            
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ף",
              f1s: "אֶ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ף",
              f2sm: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ף",
              f3sm: "יִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ף",
              f3sw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ף",
              f1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ף"
            });            
          } 
          if(this.state.letter3 == "צ"){
            this.setState({
              inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ץ",
              f1s: "אֶ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ץ",
              f2sm: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ץ",
              f3sm: "יִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ץ",
              f3sw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"צ",
              f1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ץ"
            });            
          } 
        }else{
          this.setState({
            inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+this.state.letter3,
            f1s: "אֶ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+this.state.letter3,
            f2sm: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+this.state.letter3,
            f2sw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
            f3sm: "יִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+this.state.letter3,
            f3sw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+this.state.letter3,
            f1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+this.state.letter3,
            f2mm: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            f2mw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+this.state.letter3+"ְנָה",
            f3m: "יִ"+this.state.letter1+"ְ"+this.state.letter2+"ְ"+this.state.letter3+"וּ"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ך",
              f1s: "אֶ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ך",
              f2sm: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ך",
              f3sm: "יִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ך",
              f3sw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ך",
              f1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ך"
            });            
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ם",
              f1s: "אֶ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ם",
              f2sm: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ם",
              f3sm: "יִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ם",
              f3sw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ם",
              f1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ם"
            });            
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              f2mw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"נָּה",
              inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ן",
              f1s: "אֶ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ן",
              f2sm: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ן",
              f3sm: "יִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ן",
              f3sw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ן",
              f1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ן"
            });            
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ף",
              f1s: "אֶ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ף",
              f2sm: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ף",
              f3sm: "יִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ף",
              f3sw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ף",
              f1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ף"
            });            
          } 
          if(this.state.letter3 == "צ"){
            this.setState({
              inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ץ",
              f1s: "אֶ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ץ",
              f2sm: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ץ",
              f3sm: "יִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ץ",
              f3sw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"צ",
              f1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ץ"
            });            
          }                                       
        }
          this.setState({
            infS: "ל"+this.state.letter1+this.state.letter2+"ו"+this.state.letter3, 
            p1sS: this.state.letter1+this.state.letter2+this.state.letter3+"תי",
            p2smS: this.state.letter1+this.state.letter2+this.state.letter3+"ת",
            p2swS: this.state.letter1+this.state.letter2+this.state.letter3+"ת",
            p3smS: this.state.letter1+this.state.letter2+this.state.letter3,
            p3swS: this.state.letter1+this.state.letter2+this.state.letter3+"ה",
            p1mS: this.state.letter1+this.state.letter2+this.state.letter3+"נו",
            p2mmS: this.state.letter1+this.state.letter2+this.state.letter3+"תם",
            p2mwS: this.state.letter1+this.state.letter2+this.state.letter3+"תן",
            p3mS: this.state.letter1+this.state.letter2+this.state.letter3+"ו",
            nsmS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
            nswS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
            nmmS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ים",
            nmwS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ות",
            ismS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
            iswS: this.state.letter1+this.state.letter2+this.state.letter3+"י",
            immS: this.state.letter1+this.state.letter2+this.state.letter3+"ו",
            imwS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"נה",
            nsS: this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ה",
            nmS: this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ות",
            asmS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
            aswS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ה",
            ammS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ים",
            amwS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ות",
            f1sS:"א"+this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
            f2smS:"ת"+this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
            f2swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"י",
            f3smS: "י"+this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
            f3swS: "ת"+this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
            f1mS: "נ"+this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
            f2mmS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
            f2mwS: "ת"+this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"נה",
            f3mS: "י"+this.state.letter1+this.state.letter2+this.state.letter3+"ו"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              infS: "ל"+this.state.letter1+this.state.letter2+"ו"+"ך",
              p3smS: this.state.letter1+this.state.letter2+"ך",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ך",
              ismS: this.state.letter1+this.state.letter2+"ו"+"ך",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ך",
              f1sS:"א"+this.state.letter1+this.state.letter2+"ו"+"ך",
              f2smS:"ת"+this.state.letter1+this.state.letter2+"ו"+"ך",
              f3smS: "י"+this.state.letter1+this.state.letter2+"ו"+"ך",
              f3swS: "ת"+this.state.letter1+this.state.letter2+"ו"+"ך",
              f1mS: "נ"+this.state.letter1+this.state.letter2+"ו"+"ך"
            });
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              infS: "ל"+this.state.letter1+this.state.letter2+"ו"+"ם",
              p3smS: this.state.letter1+this.state.letter2+"ם",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ם",
              ismS: this.state.letter1+this.state.letter2+"ו"+"ם",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ם",
              f1sS:"א"+this.state.letter1+this.state.letter2+"ו"+"ם",
              f2smS:"ת"+this.state.letter1+this.state.letter2+"ו"+"ם",
              f3smS: "י"+this.state.letter1+this.state.letter2+"ו"+"ם",
              f3swS: "ת"+this.state.letter1+this.state.letter2+"ו"+"ם",
              f1mS: "נ"+this.state.letter1+this.state.letter2+"ו"+"ם"
            });
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              imwS: this.state.letter1+this.state.letter2+"ו"+"נה",
              f2mwS: "ת"+this.state.letter1+this.state.letter2+"ו"+"נה",
              p1mS: this.state.letter1+this.state.letter2+"נו",
              infS: "ל"+this.state.letter1+this.state.letter2+"ו"+"ן",
              p3smS: this.state.letter1+this.state.letter2+"ן",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ן",
              ismS: this.state.letter1+this.state.letter2+"ו"+"ן",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ן",
              f1sS:"א"+this.state.letter1+this.state.letter2+"ו"+"ן",
              f2smS:"ת"+this.state.letter1+this.state.letter2+"ו"+"ן",
              f3smS: "י"+this.state.letter1+this.state.letter2+"ו"+"ן",
              f3swS: "ת"+this.state.letter1+this.state.letter2+"ו"+"ן",
              f1mS: "נ"+this.state.letter1+this.state.letter2+"ו"+"ן"
            });
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              infS: "ל"+this.state.letter1+this.state.letter2+"ו"+"ף",
              p3smS: this.state.letter1+this.state.letter2+"ף",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ף",
              ismS: this.state.letter1+this.state.letter2+"ו"+"ף",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ף",
              f1sS:"א"+this.state.letter1+this.state.letter2+"ו"+"ף",
              f2smS:"ת"+this.state.letter1+this.state.letter2+"ו"+"ף",
              f3smS: "י"+this.state.letter1+this.state.letter2+"ו"+"ף",
              f3swS: "ת"+this.state.letter1+this.state.letter2+"ו"+"ף",
              f1mS: "נ"+this.state.letter1+this.state.letter2+"ו"+"ף"
            });
          }
          if(this.state.letter3 == "צ"){
            this.setState({
              infS: "ל"+this.state.letter1+this.state.letter2+"ו"+"ץ",
              p3smS: this.state.letter1+this.state.letter2+"ץ",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ץ",
              ismS: this.state.letter1+this.state.letter2+"ו"+"ץ",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ץ",
              f1sS:"א"+this.state.letter1+this.state.letter2+"ו"+"ץ",
              f2smS:"ת"+this.state.letter1+this.state.letter2+"ו"+"ץ",
              f3smS: "י"+this.state.letter1+this.state.letter2+"ו"+"ץ",
              f3swS: "ת"+this.state.letter1+this.state.letter2+"ו"+"ץ",
              f1mS: "נ"+this.state.letter1+this.state.letter2+"ו"+"ץ"
            });
          }
        break

        case 'פעל_ישב': 
          this.setState({
            p1s: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְתִּי",
            p2sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְתָּ",
            p2sw: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְתְּ",
            p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3,
            p3sw: this.state.letter1+"ָ"+this.state.letter2+"ְ"+this.state.letter3+"ָה",
            p1m: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְנוּ",
            p2mm: this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּם",
            p2mw: this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּן",
            p3m: this.state.letter1+"ָ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֶ"+this.state.letter3,
            nsw: this.state.letter1+"וֹ"+this.state.letter2+"ֶ"+this.state.letter3+"ֶת",
            nmm: this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"ִים",
            nmw: this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"וֹת",
            ism: this.state.letter2+"ֵ"+this.state.letter3,
            isw: this.state.letter2+"ְ"+this.state.letter3+"ִי",
            imm: this.state.letter2+"ְ"+this.state.letter3+"וּ",
            imw: this.state.letter2+"ֵ"+this.state.letter3+"ְנָה",
            ns: this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3+"ָה",
            nm: this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3+"וֹת",
            asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+this.state.letter3,
            asw: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"ָה",
            amm: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"ִים",
            amw: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"וֹת"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ך",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֶ"+"ך",
              ism: this.state.letter2+"ֵ"+"ך",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ך"
            });
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ם",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֶ"+"ם",
              ism: this.state.letter2+"ֵ"+"ם",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ם"
            });
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              imw: this.state.letter2+"ֵ"+"נָּה",
              p1m: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"נּוּ",
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ן",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֶ"+"ן",
              ism: this.state.letter2+"ֵ"+"ן",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ן"
            });
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ף",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֶ"+"ף",
              ism: this.state.letter2+"ֵ"+"ף",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ף"
            });
          }
          if(this.state.letter3 == "צ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ץ",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֶ"+"ץ",
              ism: this.state.letter2+"ֵ"+"ץ",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ץ"
            });
          }
        
        if(this.state.letter2 == 'פ'||this.state.letter2 == 'כ'||this.state.letter2 == 'ב'){
          this.setState({
            inf: "לָ"+this.state.letter2+"ֶ"+this.state.letter3+"ֶת",
            f1s: "אֵ"+this.state.letter2+"ֵּ"+this.state.letter3,
            f2sm: "תֵּ"+this.state.letter2+"ֵּ"+this.state.letter3,
            f2sw: "תֵּ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
            f3sm: "יֵ"+this.state.letter2+"ֵּ"+this.state.letter3,
            f3sw: "תֵּ"+this.state.letter2+"ֵּ"+this.state.letter3,
            f1m: "נֵ"+this.state.letter2+"ֵּ"+this.state.letter3,
            f2mm: "תֵּ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
            f2mw: "תֵּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנָה",
            f3m: "יֵ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              f1s: "אֵ"+this.state.letter2+"ֵּ"+"ך",
              f2sm: "תֵּ"+this.state.letter2+"ֵּ"+"ך",
              f3sm: "יֵ"+this.state.letter2+"ֵּ"+"ך",
              f3sw: "תֵּ"+this.state.letter2+"ֵּ"+"ך",
              f1m: "נֵ"+this.state.letter2+"ֵּ"+"ך"
            });            
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              f1s: "אֵ"+this.state.letter2+"ֵּ"+"ם",
              f2sm: "תֵּ"+this.state.letter2+"ֵּ"+"ם",
              f3sm: "יֵ"+this.state.letter2+"ֵּ"+"ם",
              f3sw: "תֵּ"+this.state.letter2+"ֵּ"+"ם",
              f1m: "נֵ"+this.state.letter2+"ֵּ"+"ם"
            });            
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              f2mw: "תֵּ"+this.state.letter2+"ַּ"+"נָּה",
              f1s: "אֵ"+this.state.letter2+"ֵּ"+"ן",
              f2sm: "תֵּ"+this.state.letter2+"ֵּ"+"ן",
              f3sm: "יֵ"+this.state.letter2+"ֵּ"+"ן",
              f3sw: "תֵּ"+this.state.letter2+"ֵּ"+"ן",
              f1m: "נֵ"+this.state.letter2+"ֵּ"+"ן"
            });           
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              f1s: "אֵ"+this.state.letter2+"ֵּ"+"ף",
              f2sm: "תֵּ"+this.state.letter2+"ֵּ"+"ף",
              f3sm: "יֵ"+this.state.letter2+"ֵּ"+"ף",
              f3sw: "תֵּ"+this.state.letter2+"ֵּ"+"ף",
              f1m: "נֵ"+this.state.letter2+"ֵּ"+"ף"
            });           
          } 
          if(this.state.letter3 == "צ"){
            this.setState({
              f1s: "אֵ"+this.state.letter2+"ֵּ"+"ץ",
              f2sm: "תֵּ"+this.state.letter2+"ֵּ"+"ץ",
              f3sm: "יֵ"+this.state.letter2+"ֵּ"+"ץ",
              f3sw: "תֵּ"+this.state.letter2+"ֵּ"+"ץ",
              f1m: "נֵ"+this.state.letter2+"ֵּ"+"ץ"
            });           
          } 
        }else{
          this.setState({
            inf: "לָ"+this.state.letter2+"ֶ"+this.state.letter3+"ֶת",
            f1s: "אֵ"+this.state.letter2+"ֵ"+this.state.letter3,
            f2sm: "תֵּ"+this.state.letter2+"ֵ"+this.state.letter3,
            f2sw: "תֵּ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
            f3sm: "יֵ"+this.state.letter2+"ֵ"+this.state.letter3,
            f3sw: "תֵּ"+this.state.letter2+"ֵ"+this.state.letter3,
            f1m: "נֵ"+this.state.letter2+"ֵ"+this.state.letter3,
            f2mm: "תֵּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            f2mw: "תֵּ"+this.state.letter2+"ַ"+this.state.letter3+"ְנָה",
            f3m: "יֵ"+this.state.letter2+"ְ"+this.state.letter3+"וּ"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              f1s: "אֵ"+this.state.letter2+"ֵ"+"ך",
              f2sm: "תֵּ"+this.state.letter2+"ֵ"+"ך",
              f3sm: "יֵ"+this.state.letter2+"ֵ"+"ך",
              f3sw: "תֵּ"+this.state.letter2+"ֵ"+"ך",
              f1m: "נֵ"+this.state.letter2+"ֵ"+"ך"
            });            
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              f1s: "אֵ"+this.state.letter2+"ֵ"+"ם",
              f2sm: "תֵּ"+this.state.letter2+"ֵ"+"ם",
              f3sm: "יֵ"+this.state.letter2+"ֵ"+"ם",
              f3sw: "תֵּ"+this.state.letter2+"ֵ"+"ם",
              f1m: "נֵ"+this.state.letter2+"ֵ"+"ם"
            });           
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              f2mw: "תֵּ"+this.state.letter2+"ַ"+"נָּה",
              f1s: "אֵ"+this.state.letter2+"ֵ"+"ן",
              f2sm: "תֵּ"+this.state.letter2+"ֵ"+"ן",
              f3sm: "יֵ"+this.state.letter2+"ֵ"+"ן",
              f3sw: "תֵּ"+this.state.letter2+"ֵ"+"ן",
              f1m: "נֵ"+this.state.letter2+"ֵ"+"ן"
            });             
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              f1s: "אֵ"+this.state.letter2+"ֵ"+"ף",
              f2sm: "תֵּ"+this.state.letter2+"ֵ"+"פ",
              f3sm: "יֵ"+this.state.letter2+"ֵ"+"פ",
              f3sw: "תֵּ"+this.state.letter2+"ֵ"+"פ",
              f1m: "נֵ"+this.state.letter2+"ֵ"+"פ"
            });             
          } 
          if(this.state.letter3 == "צ"){
            this.setState({
              f1s: "אֵ"+this.state.letter2+"ֵ"+"ץ",
              f2sm: "תֵּ"+this.state.letter2+"ֵ"+"ץ",
              f3sm: "יֵ"+this.state.letter2+"ֵ"+"ץ",
              f3sw: "תֵּ"+this.state.letter2+"ֵ"+"ץ",
              f1m: "נֵ"+this.state.letter2+"ֵ"+"ץ"
            });            
          }                                       
        }
          this.setState({
            infS: "ל"+this.state.letter2+this.state.letter3+"ת",  
            p1sS: this.state.letter1+this.state.letter2+this.state.letter3+"תי",
            p2smS: this.state.letter1+this.state.letter2+this.state.letter3+"ת",
            p2swS: this.state.letter1+this.state.letter2+this.state.letter3+"ת",
            p3smS: this.state.letter1+this.state.letter2+this.state.letter3,
            p3swS: this.state.letter1+this.state.letter2+this.state.letter3+"ה",
            p1mS: this.state.letter1+this.state.letter2+this.state.letter3+"נו",
            p2mmS: this.state.letter1+this.state.letter2+this.state.letter3+"תם",
            p2mwS: this.state.letter1+this.state.letter2+this.state.letter3+"תן",
            p3mS: this.state.letter1+this.state.letter2+this.state.letter3+"ו",
            nsmS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
            nswS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
            nmmS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ים",
            nmwS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ות",
            ismS: this.state.letter2+this.state.letter3,
            iswS: this.state.letter2+this.state.letter3+"י",
            immS: this.state.letter2+this.state.letter3+"ו",
            imwS: this.state.letter2+this.state.letter3+"נה",
            nsS: this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ה",
            nmS: this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ות",
            asmS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
            aswS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ה",
            ammS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ים",
            amwS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ות",
            f1sS:"א"+this.state.letter2+this.state.letter3,
            f2smS:"ת"+this.state.letter2+this.state.letter3,
            f2swS: "ת"+this.state.letter2+this.state.letter3+"י",
            f3smS: "י"+this.state.letter2+this.state.letter3,
            f3swS: "ת"+this.state.letter2+this.state.letter3,
            f1mS: "נ"+this.state.letter2+this.state.letter3,
            f2mmS: "ת"+this.state.letter2+this.state.letter3+"ו",
            f2mwS: "ת"+this.state.letter2+this.state.letter3+"נה",
            f3mS: "י"+this.state.letter2+this.state.letter3+"ו"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              p3smS: this.state.letter1+this.state.letter2+"ך",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ך",
              ismS: this.state.letter2+"ך",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ך",
              f1sS:"א"+this.state.letter2+"ך",
              f2smS:"ת"+this.state.letter2+"ך",
              f3smS: "י"+this.state.letter2+"ך",
              f3swS: "ת"+this.state.letter2+"ך",
              f1mS: "נ"+this.state.letter2+"ך"
          });
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              p3smS: this.state.letter1+this.state.letter2+"ם",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ם",
              ismS: this.state.letter2+"ם",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ם",
              f1sS:"א"+this.state.letter2+"ם",
              f2smS:"ת"+this.state.letter2+"ם",
              f3smS: "י"+this.state.letter2+"ם",
              f3swS: "ת"+this.state.letter2+"ם",
              f1mS: "נ"+this.state.letter2+"ם"
            });
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              f2mwS: "ת"+this.state.letter2+"נה",
              imwS: this.state.letter2+"נה",
              p1mS: this.state.letter1+this.state.letter2+"נו",
              p3smS: this.state.letter1+this.state.letter2+"ן",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ן",
              ismS: this.state.letter2+"ן",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ן",
              f1sS:"א"+this.state.letter2+"ן",
              f2smS:"ת"+this.state.letter2+"ן",
              f3smS: "י"+this.state.letter2+"ן",
              f3swS: "ת"+this.state.letter2+"ן",
              f1mS: "נ"+this.state.letter2+"ן"
            });
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              p3smS: this.state.letter1+this.state.letter2+"ף",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ף",
              ismS: this.state.letter2+"ף",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ף",
              f1sS:"א"+this.state.letter2+"ף",
              f2smS:"ת"+this.state.letter2+"ף",
              f3smS: "י"+this.state.letter2+"ף",
              f3swS: "ת"+this.state.letter2+"ף",
              f1mS: "נ"+this.state.letter2+"ף"
            });
          }
          if(this.state.letter3 == "צ"){
            this.setState({
              p3smS: this.state.letter1+this.state.letter2+"ץ",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ץ",
              ismS: this.state.letter2+"ץ",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ץ",
              f1sS:"א"+this.state.letter2+"ץ",
              f2smS:"ת"+this.state.letter2+"ץ",
              f3smS: "י"+this.state.letter2+"ץ",
              f3swS: "ת"+this.state.letter2+"ץ",
              f1mS: "נ"+this.state.letter2+"ץ"
            });
          }
        break

        case 'פעל_ידע': 
        this.setState({
          p1s: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְתִּי",
          p2sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְתָּ",
          p2sw: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְְתְּ",
          p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3,
          p3sw: this.state.letter1+"ָ"+this.state.letter2+"ְ"+this.state.letter3+"ָה",
          p1m: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְנוּ",
          p2mm: this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּם",
          p2mw: this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּן",
          p3m: this.state.letter1+"ָ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
          nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+this.state.letter3+"ַ",
          nsw: this.state.letter1+"וֹ"+this.state.letter2+"ַ"+this.state.letter3+"ַת",
          nmm: this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"ִים",
          nmw: this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"וֹת",
          ism: this.state.letter2+"ַ"+this.state.letter3,
          isw: this.state.letter2+"ְ"+this.state.letter3+"ִי",
          imm: this.state.letter2+"ְ"+this.state.letter3+"וּ",
          imw: this.state.letter2+"ַ"+this.state.letter3+"ְנָה",
          ns: this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3+"ָה",
          nm: this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3+"וֹת",
          asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+this.state.letter3+"ַ",
          asw: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"ָה",
          amm: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"ִים",
          amw: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"וֹת"
        });
        if(this.state.letter2 == 'פ'||this.state.letter2 == 'כ'||this.state.letter2 == 'ב'){
         this.setState({
          inf: "לָ"+this.state.letter2+"ַ"+this.state.letter3+"ַת",
          f1s: "אֵ"+this.state.letter2+"ַּ"+this.state.letter3,
          f2sm: "תֵּ"+this.state.letter2+"ַּ"+this.state.letter3,
          f2sw: "תֵּ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
          f3sm: "יֵ"+this.state.letter2+"ַּ"+this.state.letter3,
          f3sw: "תֵּ"+this.state.letter2+"ַּ"+this.state.letter3,
          f1m: "נֵ"+this.state.letter2+"ַּ"+this.state.letter3,
          f2mm: "תֵּ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
          f2mw: "תֵּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנָה",
          f3m: "יֵ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ"
         });
        }else{
         this.setState({
          inf: "לָ"+this.state.letter2+"ַ"+this.state.letter3+"ַת",
          f1s: "אֵ"+this.state.letter2+"ַ"+this.state.letter3,
          f2sm: "תֵּ"+this.state.letter2+"ַ"+this.state.letter3,
          f2sw: "תֵּ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
          f3sm: "יֵ"+this.state.letter2+"ַ"+this.state.letter3,
          f3sw: "תֵּ"+this.state.letter2+"ַ"+this.state.letter3,
          f1m: "נֵ"+this.state.letter2+"ַ"+this.state.letter3,
          f2mm: "תֵּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
          f2mw: "תֵּ"+this.state.letter2+"ַ"+this.state.letter3+"ְנָה",
          f3m: "יֵ"+this.state.letter2+"ְ"+this.state.letter3+"וּ"
         });                          
        }
         this.setState({
          infS: "ל"+this.state.letter2+this.state.letter3+"ת",  
          p1sS: this.state.letter1+this.state.letter2+this.state.letter3+"תי",
          p2smS: this.state.letter1+this.state.letter2+this.state.letter3+"ת",
          p2swS: this.state.letter1+this.state.letter2+this.state.letter3+"ת",
          p3smS: this.state.letter1+this.state.letter2+this.state.letter3,
          p3swS: this.state.letter1+this.state.letter2+this.state.letter3+"ה",
          p1mS: this.state.letter1+this.state.letter2+this.state.letter3+"נו",
          p2mmS: this.state.letter1+this.state.letter2+this.state.letter3+"תם",
          p2mwS: this.state.letter1+this.state.letter2+this.state.letter3+"תן",
          p3mS: this.state.letter1+this.state.letter2+this.state.letter3+"ו",
          nsmS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
          nswS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
          nmmS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ים",
          nmwS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ות",
          ismS: this.state.letter2+this.state.letter3,
          iswS: this.state.letter2+this.state.letter3+"י",
          immS: this.state.letter2+this.state.letter3+"ו",
          imwS: this.state.letter2+this.state.letter3+"נה",
          nsS: this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ה",
          nmS: this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ות",
          asmS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
          aswS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ה",
          ammS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ים",
          amwS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ות",
          f1sS:"א"+this.state.letter2+this.state.letter3,
          f2smS:"ת"+this.state.letter2+this.state.letter3,
          f2swS: "ת"+this.state.letter2+this.state.letter3+"י",
          f3smS: "י"+this.state.letter2+this.state.letter3,
          f3swS: "ת"+this.state.letter2+this.state.letter3,
          f1mS: "נ"+this.state.letter2+this.state.letter3,
          f2mmS: "ת"+this.state.letter2+this.state.letter3+"ו",
          f2mwS: "ת"+this.state.letter2+this.state.letter3+"נה",
          f3mS: "י"+this.state.letter2+this.state.letter3+"ו"
         });
        break
        case 'פעל_נפל':
          this.setState({
            p1s: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְתִּי",
            p2sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְתָּ",
            p2sw: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְתְּ",
            p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3,
            p3sw: this.state.letter1+"ָ"+this.state.letter2+"ְ"+this.state.letter3+"ָה",
            p1m: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְנוּ",
            p2mm: this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּם",
            p2mw: this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּן",
            p3m: this.state.letter1+"ָ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+this.state.letter3,
            nsw: this.state.letter1+"וֹ"+this.state.letter2+"ֶ"+this.state.letter3+"ֶת",
            nmm: this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"ִים",
            nmw: this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"וֹת",
            ism: this.state.letter1+"ְ"+this.state.letter2+"ֹ"+this.state.letter3,
            isw: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
            imm: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            imw: this.state.letter1+"ְ"+this.state.letter2+"ֹ"+this.state.letter3+"ְנָה",
            ns: this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3+"ָה",
            nm: this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3+"וֹת",
            asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+this.state.letter3,
            asw: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"ָה",
            amm: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"ִים",
            amw: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"וֹת"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ך",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֶ"+"ך",
              ism: this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ך",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ך"
            });
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ם",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֶ"+"ם",
              ism: this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ם",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ם"
            });
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              imw: this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"נָּה",
              p1m: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"נּוּ",
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ן",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֶ"+"ן",
              ism: this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ן",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ן"
            });
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ף",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֶ"+"ף",
              ism: this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ף",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ף"
            });
          }
          if(this.state.letter3 == "צ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ץ",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֶ"+"ץ",
              ism: this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ץ",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ץ"
            });
          }
       
        if(this.state.letter2 == 'פ'||this.state.letter2 == 'כ'||this.state.letter2 == 'ב'){
          this.setState({
            inf: "לִ"+this.state.letter2+"ֹּ"+this.state.letter3,
            f1s: "אֶ"+this.state.letter2+"ֹּ"+this.state.letter3,
            f2sm: "תִּ"+this.state.letter2+"ֹּ"+this.state.letter3,
            f2sw: "תִּ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
            f3sm: "יִ"+this.state.letter2+"ֹּ"+this.state.letter3,
            f3sw: "תִּ"+this.state.letter2+"ֹּ"+this.state.letter3,
            f1m: "נִ"+this.state.letter2+"ֹּ"+this.state.letter3,
            f2mm: "תִּ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
            f2mw: "תִּ"+this.state.letter2+"ֹּ"+this.state.letter3+"ְנָה",
            f3m: "יִ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              inf: "לִ"+this.state.letter2+"ֹּ"+"ך",
              f1s: "אֶ"+this.state.letter2+"ֹּּ"+"ך",
              f2sm: "תִּ"+this.state.letter2+"ֹּ"+"ך",
              f3sm: "יִ"+this.state.letter2+"ֹּ"+"ך",
              f3sw: "תִּ"+this.state.letter2+"ֹּ"+"ך",
              f1m: "נִ"+this.state.letter2+"ֹּ"+"ך"
            });            
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              inf: "לִ"+this.state.letter2+"ֹּ"+"ם",
              f1s: "אֶ"+this.state.letter2+"ֹּ"+"ם",
              f2sm: "תִּ"+this.state.letter2+"ֹּ"+"ם",
              f3sm: "יִ"+this.state.letter2+"ֹּ"+"ם",
              f3sw: "תִּ"+this.state.letter2+"ֹּ"+"ם",
              f1m: "נִ"+this.state.letter2+"ֹּ"+"ם"
            });            
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              f2mw: "תִּ"+this.state.letter2+"ֹּ"+"נָּה",
              inf: "לִ"+this.state.letter2+"ֹּ"+"ן",
              f1s: "אֶ"+this.state.letter2+"ֹּ"+"ן",
              f2sm: "תִּ"+this.state.letter2+"ֹּ"+"ן",
              f3sm: "יִ"+this.state.letter2+"ֹּ"+"ן",
              f3sw: "תִּ"+this.state.letter2+"ֹּ"+"ן",
              f1m: "נִ"+this.state.letter2+"ֹּ"+"ן"
            });            
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              inf: "לִ"+this.state.letter2+"ֹּ"+"ף",
              f1s: "אֶ"+this.state.letter2+"ֹּ"+"ף",
              f2sm: "תִּ"+this.state.letter2+"ֹּ"+"ף",
              f3sm: "יִ"+this.state.letter2+"ֹּ"+"ף",
              f3sw: "תִּ"+this.state.letter2+"ֹּ"+"ף",
              f1m: "נִ"+this.state.letter2+"ֹּ"+"ף"
            });            
          } 
          if(this.state.letter3 == "צ"){
            this.setState({
              inf: "לִ"+this.state.letter2+"ֹּ"+"ץ",
              f1s: "אֶ"+this.state.letter2+"ֹּ"+"ץ",
              f2sm: "תִּ"+this.state.letter2+"ֹּ"+"ץ",
              f3sm: "יִ"+this.state.letter2+"ֹּ"+"ץ",
              f3sw: "תִּ"+this.state.letter2+"ֹּ"+"צ",
              f1m: "נִ"+this.state.letter2+"ֹּ"+"ץ"
            });            
          } 
        }else{
          this.setState({
            inf: "לִ"+this.state.letter2+"ֹ"+this.state.letter3,
            f1s: "אֶ"+this.state.letter2+"ֹ"+this.state.letter3,
            f2sm: "תִּ"+this.state.letter2+"ֹ"+this.state.letter3,
            f2sw: "תִּ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
            f3sm: "יִ"+this.state.letter2+"ֹ"+this.state.letter3,
            f3sw: "תִּ"+this.state.letter2+"ֹ"+this.state.letter3,
            f1m: "נִ"+this.state.letter2+"ֹ"+this.state.letter3,
            f2mm: "תִּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            f2mw: "תִּ"+this.state.letter2+"ֹ"+this.state.letter3+"ְנָה",
            f3m: "יִ"+this.state.letter2+"ְ"+this.state.letter3+"וּ"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              inf: "לִ"+this.state.letter2+"ֹ"+"ך",
              f1s: "אֶ"+this.state.letter2+"ֹ"+"ך",
              f2sm: "תִּ"+this.state.letter2+"ֹ"+"ך",
              f3sm: "יִ"+this.state.letter2+"ֹ"+"ך",
              f3sw: "תִּ"+this.state.letter2+"ֹ"+"ך",
              f1m: "נִ"+this.state.letter2+"ֹ"+"ך"
            });            
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              inf: "לִ"+this.state.letter2+"ֹ"+"ם",
              f1s: "אֶ"+this.state.letter2+"ֹ"+"ם",
              f2sm: "תִּ"+this.state.letter2+"ֹ"+"ם",
              f3sm: "יִ"+this.state.letter2+"ֹ"+"ם",
              f3sw: "תִּ"+this.state.letter2+"ֹ"+"ם",
              f1m: "נִ"+this.state.letter2+"ֹ"+"ם"
            });            
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              f2mw: "תִּ"+this.state.letter2+"ֹ"+"נָּה",
              inf: "לִ"+this.state.letter2+"ֹ"+"ן",
              f1s: "אֶ"+this.state.letter2+"ֹ"+"ן",
              f2sm: "תִּ"+this.state.letter2+"ֹ"+"ן",
              f3sm: "יִ"+this.state.letter2+"ֹ"+"ן",
              f3sw: "תִּ"+this.state.letter2+"ֹ"+"ן",
              f1m: "נִ"+this.state.letter2+"ֹ"+"ן"
            });            
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              inf: "לִ"+this.state.letter2+"ֹ"+"ף",
              f1s: "אֶ"+this.state.letter2+"ֹ"+"ף",
              f2sm: "תִּ"+this.state.letter2+"ֹ"+"ף",
              f3sm: "יִ"+this.state.letter2+"ֹ"+"ף",
              f3sw: "תִּ"+this.state.letter2+"ֹ"+"ף",
              f1m: "נִ"+this.state.letter2+"ֹ"+"ף"
            });            
          } 
          if(this.state.letter3 == "צ"){
            this.setState({
              inf: "לִ"+this.state.letter2+"ֹ"+"ץ",
              f1s: "אֶ"+this.state.letter2+"ֹ"+"ץ",
              f2sm: "תִּ"+this.state.letter2+"ֹ"+"ץ",
              f3sm: "יִ"+this.state.letter2+"ֹ"+"ץ",
              f3sw: "תִּ"+this.state.letter2+"ֹ"+"צ",
              f1m: "נִ"+this.state.letter2+"ֹ"+"ץ"
            });            
          }                                       
        } 
          this.setState({
            infS: "לי"+this.state.letter1+this.state.letter2+"ו"+this.state.letter3,  
            p1sS: this.state.letter1+this.state.letter2+this.state.letter3+"תי",
            p2smS: this.state.letter1+this.state.letter2+this.state.letter3+"ת",
            p2swS: this.state.letter1+this.state.letter2+this.state.letter3+"ת",
            p3smS: this.state.letter1+this.state.letter2+this.state.letter3,
            p3swS: this.state.letter1+this.state.letter2+this.state.letter3+"ה",
            p1mS: this.state.letter1+this.state.letter2+this.state.letter3+"נו",
            p2mmS: this.state.letter1+this.state.letter2+this.state.letter3+"תם",
            p2mwS: this.state.letter1+this.state.letter2+this.state.letter3+"תן",
            p3mS: this.state.letter1+this.state.letter2+this.state.letter3+"ו",
            nsmS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
            nswS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
            nmmS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ים",
            nmwS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ות",
            ismS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
            iswS: this.state.letter1+this.state.letter2+this.state.letter3+"י",
            immS: this.state.letter1+this.state.letter2+this.state.letter3+"ו",
            imwS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"נה",
            nsS: this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ה",
            nmS: this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ות",
            asmS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
            aswS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ה",
            ammS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ים",
            amwS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ות",
            f1sS:"א"+this.state.letter2+"ו"+this.state.letter3,
            f2smS:"תי"+this.state.letter2+"ו"+this.state.letter3,
            f2swS: "תי"+this.state.letter2+this.state.letter3+"י",
            f3smS: "יי"+this.state.letter2+"ו"+this.state.letter3,
            f3swS: "תי"+this.state.letter2+"ו"+this.state.letter3,
            f1mS: "ני"+this.state.letter2+"ו"+this.state.letter3,
            f2mmS: "תי"+this.state.letter2+this.state.letter3+"ו",
            f2mwS: "תי"+this.state.letter2+"ו"+this.state.letter3+"נה",
            f3mS: "יי"+this.state.letter2+this.state.letter3+"ו"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              infS: "לי"+this.state.letter2+"ו"+"ך",
              p3smS: this.state.letter1+this.state.letter2+"ך",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ך",
              ismS: this.state.letter1+this.state.letter2+"ו"+"ך",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ך",
              f1sS:"א"+this.state.letter2+"ו"+"ך",
              f2smS:"תי"+this.state.letter2+"ו"+"ך",
              f3smS: "יי"+this.state.letter2+"ו"+"ך",
              f3swS: "תי"+this.state.letter2+"ו"+"ך",
              f1mS: "ני"+this.state.letter2+"ו"+"ך"
            });
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              infS: "לי"+this.state.letter2+"ו"+"ם",
              p3smS: this.state.letter1+this.state.letter2+"ם",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ם",
              ismS: this.state.letter1+this.state.letter2+"ו"+"ם",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ם",
              f1sS:"א"+this.state.letter2+"ו"+"ם",
              f2smS:"תי"+this.state.letter2+"ו"+"ם",
              f3smS: "יי"+this.state.letter2+"ו"+"ם",
              f3swS: "תי"+this.state.letter2+"ו"+"ם",
              f1mS: "ני"+this.state.letter2+"ו"+"ם"
            });
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              f2mwS: "תי"+this.state.letter2+"ו"+"נה",
              imwS: this.state.letter1+this.state.letter2+"ו"+"נה",
              p1mS: this.state.letter1+this.state.letter2+"נו",
              infS: "לי"+this.state.letter2+"ו"+"ן",
              p3smS: this.state.letter1+this.state.letter2+"ן",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ן",
              ismS: this.state.letter1+this.state.letter2+"ו"+"ן",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ן",
              f1sS:"א"+this.state.letter2+"ו"+"ן",
              f2smS:"תי"+this.state.letter2+"ו"+"ן",
              f3smS: "יי"+this.state.letter2+"ו"+"ן",
              f3swS: "תי"+this.state.letter2+"ו"+"ן",
              f1mS: "ני"+this.state.letter2+"ו"+"ן"
            });
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              infS: "לי"+this.state.letter2+"ו"+"ף",
              p3smS: this.state.letter1+this.state.letter2+"ף",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ף",
              ismS: this.state.letter1+this.state.letter2+"ו"+"ף",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ף",
              f1sS:"א"+this.state.letter2+"ו"+"ף",
              f2smS:"תי"+this.state.letter2+"ו"+"ף",
              f3smS: "יי"+this.state.letter2+"ו"+"ף",
              f3swS: "תי"+this.state.letter2+"ו"+"ף",
              f1mS: "ני"+this.state.letter2+"ו"+"ף"
            });
          }
          if(this.state.letter3 == "צ"){
            this.setState({
              infS: "לי"+this.state.letter2+"ו"+"ץ",
              p3smS: this.state.letter1+this.state.letter2+"ץ",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ץ",
              ismS: this.state.letter1+this.state.letter2+"ו"+"ץ",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ץ",
              f1sS:"א"+this.state.letter2+"ו"+"ץ",
              f2smS:"תי"+this.state.letter2+"ו"+"ץ",
              f3smS: "יי"+this.state.letter2+"ו"+"ץ",
              f3swS: "תי"+this.state.letter2+"ו"+"ץ",
              f1mS: "ני"+this.state.letter2+"ו"+"ץ"
            });
          }
        break
        case 'פעל_נסע':
          this.setState({
            p1s: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְתִּי",
            p2sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְתָּ",
            p2sw: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְתְּ",
            p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3,
            p3sw: this.state.letter1+"ָ"+this.state.letter2+"ְ"+this.state.letter3+"ָה",
            p1m: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְנוּ",
            p2mm: this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּם",
            p2mw: this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּן",
            p3m: this.state.letter1+"ָ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+this.state.letter3+"ַ",
            nsw: this.state.letter1+"וֹ"+this.state.letter2+"ַ"+this.state.letter3+"ַת",
            nmm: this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"ִים",
            nmw: this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"וֹת",
            ism: this.state.letter2+"ַ"+this.state.letter3,
            isw: this.state.letter2+"ְ"+this.state.letter3+"ִי",
            imm: this.state.letter2+"ְ"+this.state.letter3+"וּ",
            imw: this.state.letter2+"ַ"+this.state.letter3+"ְנָה",
            ns: this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3+"ָה",
            nm: this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3+"וֹת",
            asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+this.state.letter3,
            asw: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"ָה",
            amm: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"ִים",
            amw: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"וֹת"
          });
        if(this.state.letter2 == "ב" || this.state.letter2 == "כ" || this.state.letter2 == "פ" || this.state.letter2 == "ת"){
          this.setState({inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+this.state.letter3+"ַ"});
        } else {
          this.setState({inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+this.state.letter3+"ַ"});
        }

        this.setState({
          f1s: "אֵ"+this.state.letter2+"ַּ"+this.state.letter3,
          f2sm: "תִּ"+this.state.letter2+"ַּ"+this.state.letter3,
          f2sw: "תִּ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
          f3sm: "יִ"+this.state.letter2+"ַּ"+this.state.letter3,
          f3sw: "תִּ"+this.state.letter2+"ַּ"+this.state.letter3,
          f1m: "נִ"+this.state.letter2+"ַּ"+this.state.letter3,
          f2mm: "תִּ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
          f2mw: "תִּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנָה",
          f3m: "יִ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
          infS: "ל"+this.state.letter1+this.state.letter2+"ו"+this.state.letter3,  
          p1sS: this.state.letter1+this.state.letter2+this.state.letter3+"תי",
          p2smS: this.state.letter1+this.state.letter2+this.state.letter3+"ת",
          p2swS: this.state.letter1+this.state.letter2+this.state.letter3+"ת",
          p3smS: this.state.letter1+this.state.letter2+this.state.letter3,
          p3swS: this.state.letter1+this.state.letter2+this.state.letter3+"ה",
          p1mS: this.state.letter1+this.state.letter2+this.state.letter3+"נו",
          p2mmS: this.state.letter1+this.state.letter2+this.state.letter3+"תם",
          p2mwS: this.state.letter1+this.state.letter2+this.state.letter3+"תן",
          p3mS: this.state.letter1+this.state.letter2+this.state.letter3+"ו",
          nsmS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
          nswS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
          nmmS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ים",
          nmwS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ות",
          ismS: this.state.letter2+this.state.letter3,
          iswS: this.state.letter2+this.state.letter3+"י",
          immS: this.state.letter2+this.state.letter3+"ו",
          imwS: this.state.letter2+"ו"+this.state.letter3+"נה",
          nsS: this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ה",
          nmS: this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ות",
          asmS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
          aswS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ה",
          ammS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ים",
          amwS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ות",
          f1sS:"א"+this.state.letter2+this.state.letter3,
          f2smS:"תי"+this.state.letter2+this.state.letter3,
          f2swS: "תי"+this.state.letter2+this.state.letter3+"י",
          f3smS: "יי"+this.state.letter2+this.state.letter3,
          f3swS: "תי"+this.state.letter2+this.state.letter3,
          f1mS: "ני"+this.state.letter2+this.state.letter3,
          f2mmS: "תי"+this.state.letter2+this.state.letter3+"ו",
          f2mwS: "תי"+this.state.letter2+this.state.letter3+"נה",
          f3mS: "יי"+this.state.letter2+this.state.letter3+"ו"
        });
        break
        case 'פעל_שמח':
        if(this.state.letter1 == "פ" || this.state.letter1 == "ת"||this.state.letter1 == 'כ'||this.state.letter1 == 'ב'||this.state.letter1 == 'ת'){ 
          this.setState({
            p1s: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+this.state.letter3+"ְתִּי",
            p2sm: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+this.state.letter3+"ְתָּ",
            p2sw: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+this.state.letter3+"ְתְּ",
            p3sm: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+this.state.letter3,
            p3sw: this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"ָה",
            p1m: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+this.state.letter3+"ְנוּ",
            p2mm: this.state.letter1+"ְּ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּם",
            p2mw: this.state.letter1+"ְּ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּן",
            p3m: this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            nsm: this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3+"ַ",
            nsw: this.state.letter1+"ְּ"+this.state.letter2+"ֵ"+this.state.letter3+"ָה",
            nmm: this.state.letter1+"ְּ"+this.state.letter2+"ֵ"+this.state.letter3+"ִים",
            nmw: this.state.letter1+"ְֹּ"+this.state.letter2+"ֵ"+this.state.letter3+"וֹת",
            ism: this.state.letter1+"ְּ"+this.state.letter2+"ַ"+this.state.letter3,
            isw: this.state.letter1+"ִּׁ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
            imm: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            imw: this.state.letter1+"ְּ"+this.state.letter2+"ַ"+this.state.letter3+"ְנָה",
            ns: this.state.letter1+"ְּ"+this.state.letter2+"ִי"+this.state.letter3+"ָה",
            nm: this.state.letter1+"ְּ"+this.state.letter2+"ִי"+this.state.letter3+"וֹת",
            asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+this.state.letter3,
            asw: this.state.letter1+"ְּ"+this.state.letter2+"וּ"+this.state.letter3+"ָה",
            amm: this.state.letter1+"ְּ"+this.state.letter2+"וּ"+this.state.letter3+"ִים",
            amw: this.state.letter1+"ְּ"+this.state.letter2+"וּ"+this.state.letter3+"וֹת"
          });                                            
        }else{
          this.setState({
            p1s: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְתִּי",
            p2sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְתָּ",
            p2sw: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְתְּ",
            p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3,
            p3sw: this.state.letter1+"ָ"+this.state.letter2+"ְ"+this.state.letter3+"ָה",
            p1m: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְנוּ",
            p2mm: this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּם",
            p2mw: this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּן",
            p3m: this.state.letter1+"ָ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            nsm: this.state.letter1+"ָ"+this.state.letter2+"ֵ"+this.state.letter3+"ַ",
            nsw: this.state.letter1+"ְ"+this.state.letter2+"ֵ"+this.state.letter3+"ָה",
            nmm: this.state.letter1+"ְ"+this.state.letter2+"ֵ"+this.state.letter3+"ִים",
            nmw: this.state.letter1+"ְ"+this.state.letter2+"ֵ"+this.state.letter3+"וֹת",
            ism: this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3,
            isw: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
            imm: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            imw: this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְנָה",
            ns: this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3+"ָה",
            nm: this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3+"וֹת",
            asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+this.state.letter3,
            asw: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"ָה",
            amm: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"ִים",
            amw: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"וֹת"
          });
        }
        if(this.state.letter2 == 'פ'||this.state.letter2 == 'כ'||this.state.letter2 == 'ב'){
          this.setState({
            inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+this.state.letter3,
            f1s: "אֵ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3,
            f2sm: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3,
            f2sw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
            f3sm: "יִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3,
            f3sw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3,
            f1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3,
            f2mm: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
            f2mw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנָה",
            f3m: "יִ"+this.state.letter1+"ְ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ"
          }); 
        }else{
          this.setState({
            inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+this.state.letter3+"ַ",
            f1s: "אֵ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3,
            f2sm: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3,
            f2sw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
            f3sm: "יִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3,
            f3sw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3,
            f1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3,
            f2mm: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            f2mw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְנָה",
            f3m: "יִ"+this.state.letter1+"ְ"+this.state.letter2+"ְ"+this.state.letter3+"וּ"
          });                                     
        }
        this.setState({
          infS: "ל"+this.state.letter1+this.state.letter2+"ו"+this.state.letter3,  
          p1sS: this.state.letter1+this.state.letter2+this.state.letter3+"תי",
          p2smS: this.state.letter1+this.state.letter2+this.state.letter3+"ת",
          p2swS: this.state.letter1+this.state.letter2+this.state.letter3+"ת",
          p3smS: this.state.letter1+this.state.letter2+this.state.letter3,
          p3swS: this.state.letter1+this.state.letter2+this.state.letter3+"ה",
          p1mS: this.state.letter1+this.state.letter2+this.state.letter3+"נו",
          p2mmS: this.state.letter1+this.state.letter2+this.state.letter3+"תם",
          p2mwS: this.state.letter1+this.state.letter2+this.state.letter3+"תן",
          p3mS: this.state.letter1+this.state.letter2+this.state.letter3+"ו",
          nsmS: this.state.letter1+this.state.letter2+this.state.letter3,
          nswS: this.state.letter1+this.state.letter2+this.state.letter3+"ה",
          nmmS: this.state.letter1+this.state.letter2+this.state.letter3+"ים",
          nmwS: this.state.letter1+this.state.letter2+this.state.letter3+"ות",
          ismS: this.state.letter1+this.state.letter2+this.state.letter3,
          iswS: this.state.letter1+this.state.letter2+this.state.letter3+"י",
          immS: this.state.letter1+this.state.letter2+this.state.letter3+"ו",
          imwS: this.state.letter1+this.state.letter2+this.state.letter3+"נה",
          nsS: this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ה",
          nmS: this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ות",
          asmS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
          aswS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ה",
          ammS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ים",
          amwS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ות",
          f1sS:"א"+this.state.letter1+this.state.letter2+this.state.letter3,
          f2smS:"ת"+this.state.letter1+this.state.letter2+this.state.letter3,
          f2swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"י",
          f3smS: "י"+this.state.letter1+this.state.letter2+this.state.letter3,
          f3swS: "ת"+this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
          f1mS: "נ"+this.state.letter1+this.state.letter2+this.state.letter3,
          f2mmS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
          f2mwS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"נה",
          f3mS: "י"+this.state.letter1+this.state.letter2+this.state.letter3+"ו"
        });
        break
        case 'פעל_אכל':
          this.setState({
            p1s: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְתִּי",
            p2sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְתָּ",
            p2sw: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְתְּ",
            p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3,
            p3sw: this.state.letter1+"ָ"+this.state.letter2+"ְ"+this.state.letter3+"ָה",
            p1m: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְנוּ",
            p2mm: this.state.letter1+"ְַ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּם",
            p2mw: this.state.letter1+"ְַ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּן",
            p3m: this.state.letter1+"ָ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+this.state.letter3,
            nsw: this.state.letter1+"וֹ"+this.state.letter2+"ֶ"+this.state.letter3+"ֶת",
            nmm: this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"ִים",
            nmw: this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"וֹת",
            ism: this.state.letter1+"ְֶ"+this.state.letter2+"ֹ"+this.state.letter3,
            isw: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
            imm: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            imw: this.state.letter1+"ְֶ"+this.state.letter2+"ֹ"+this.state.letter3+"ְנָה",
            ns: this.state.letter1+"ְַ"+this.state.letter2+"ִי"+this.state.letter3+"ָה",
            nm: this.state.letter1+"ְַ"+this.state.letter2+"ִי"+this.state.letter3+"וֹת",
            asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+this.state.letter3,
            asw: this.state.letter1+"ְַ"+this.state.letter2+"וּ"+this.state.letter3+"ָה",
            amm: this.state.letter1+"ְַ"+this.state.letter2+"וּ"+this.state.letter3+"ִים",
            amw: this.state.letter1+"ְַ"+this.state.letter2+"וּ"+this.state.letter3+"וֹת"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ך",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ך",
              ism: this.state.letter1+"ְֶ"+this.state.letter2+"ֹ"+"ך",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ך"
            });
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ם",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ם",
              ism: this.state.letter1+"ְֶ"+this.state.letter2+"ֹ"+"ם",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ם"
            });
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              imw: this.state.letter1+"ְֶ"+this.state.letter2+"ֹ"+"נָּה",
              p1m: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"נּוּ",
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ן",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ן",
              ism: this.state.letter1+"ְֶ"+this.state.letter2+"ֹ"+"ן",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ן"
            });
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ף",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ף",
              ism: this.state.letter1+"ְֶ"+this.state.letter2+"ֹ"+"ף",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ף"
            });
          }
          if(this.state.letter3 == "צ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ץ",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ץ",
              ism: this.state.letter1+"ְֶ"+this.state.letter2+"ֹ"+"ץ",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ץ"
            });
          }
          this.setState({
            inf: "לֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+this.state.letter3,
            f1s: "אֹ"+this.state.letter2+"ַ"+this.state.letter3,
            f2sm: "תֹּ"+this.state.letter1+this.state.letter2+"ַ"+this.state.letter3,
            f2sw: "תֹּ"+this.state.letter1+this.state.letter2+"ְ"+this.state.letter3+"ִי",
            f3sm: "יֹ"+this.state.letter1+this.state.letter2+"ַ"+this.state.letter3,
            f3sw: "תֹּ"+this.state.letter1+this.state.letter2+"ַ"+this.state.letter3,
            f1m: "נֹ"+this.state.letter1+this.state.letter2+"ַ"+this.state.letter3,
            f2mm: "תֹּ"+this.state.letter1+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            f2mw: "תֹּ"+this.state.letter1+this.state.letter2+"ַ"+this.state.letter3+"ְנָה",
            f3m: "יֹ"+this.state.letter1+this.state.letter2+"ְ"+this.state.letter3+"וּ"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              inf: "לֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ך",
              f1s: "אֹ"+this.state.letter2+"ַ"+"ך",
              f2sm: "תֹּ"+this.state.letter1+this.state.letter2+"ַ"+"ך",
              f3sm: "יֹ"+this.state.letter1+this.state.letter2+"ַ"+"ך",
              f3sw: "תֹּ"+this.state.letter1+this.state.letter2+"ַ"+"ך",
              f1m: "נֹ"+this.state.letter1+this.state.letter2+"ַ"+"ך"
            });            
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              inf: "לֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ם",
              f1s: "אֹ"+this.state.letter2+"ַ"+"ך",
              f2sm: "תֹּ"+this.state.letter1+this.state.letter2+"ַ"+"ם",
              f3sm: "יֹ"+this.state.letter1+this.state.letter2+"ַ"+"ם",
              f3sw: "תֹּ"+this.state.letter1+this.state.letter2+"ַ"+"ם",
              f1m: "נֹ"+this.state.letter1+this.state.letter2+"ַ"+"ם"
            });           
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              f2mw: "תֹּ"+this.state.letter1+this.state.letter2+"ַ"+"נָּה",
              inf: "לֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ן",
              f1s: "אֹ"+this.state.letter2+"ַ"+"ן",
              f2sm: "תֹּ"+this.state.letter1+this.state.letter2+"ַ"+"ן",
              f3sm: "יֹ"+this.state.letter1+this.state.letter2+"ַ"+"ן",
              f3sw: "תֹּ"+this.state.letter1+this.state.letter2+"ַ"+"ו",
              f1m: "נֹ"+this.state.letter1+this.state.letter2+"ַ"+"ן"
            });           
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              inf: "לֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ף",
              f1s: "אֹ"+this.state.letter2+"ַ"+"ף",
              f2sm: "תֹּ"+this.state.letter1+this.state.letter2+"ַ"+"ף",
              f3sm: "יֹ"+this.state.letter1+this.state.letter2+"ַ"+"ף",
              f3sw: "תֹּ"+this.state.letter1+this.state.letter2+"ַ"+"ף",
              f1m: "נֹ"+this.state.letter1+this.state.letter2+"ַ"+"ף"
            });            
          } 
          if(this.state.letter3 == "צ"){
            this.setState({
              inf: "לֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ץ",
              f1s: "אֹ"+this.state.letter2+"ַ"+"ץ",
              f2sm: "תֹּ"+this.state.letter1+this.state.letter2+"ַ"+"ץ",
              f3sm: "יֹ"+this.state.letter1+this.state.letter2+"ַ"+"ץ",
              f3sw: "תֹּ"+this.state.letter1+this.state.letter2+"ַ"+"ץ",
              f1m: "נֹ"+this.state.letter1+this.state.letter2+"ַ"+"ץ"
            });            
          }                                       
        
          this.setState({
            infS: "ל"+this.state.letter1+this.state.letter2+"ו"+this.state.letter3,  
            p1sS: this.state.letter1+this.state.letter2+this.state.letter3+"תי",
            p2smS: this.state.letter1+this.state.letter2+this.state.letter3+"ת",
            p2swS: this.state.letter1+this.state.letter2+this.state.letter3+"ת",
            p3smS: this.state.letter1+this.state.letter2+this.state.letter3,
            p3swS: this.state.letter1+this.state.letter2+this.state.letter3+"ה",
            p1mS: this.state.letter1+this.state.letter2+this.state.letter3+"נו",
            p2mmS: this.state.letter1+this.state.letter2+this.state.letter3+"תם",
            p2mwS: this.state.letter1+this.state.letter2+this.state.letter3+"תן",
            p3mS: this.state.letter1+this.state.letter2+this.state.letter3+"ו",
            nsmS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
            nswS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
            nmmS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ים",
            nmwS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ות",
            ismS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
            iswS: this.state.letter1+this.state.letter2+this.state.letter3+"י",
            immS: this.state.letter1+this.state.letter2+this.state.letter3+"ו",
            imwS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"נה",
            nsS: this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ה",
            nmS: this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ות",
            asmS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
            aswS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ה",
            ammS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ים",
            amwS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ות",
            f1sS:"א"+"ו"+this.state.letter2+this.state.letter3,
            f2smS:"ת"+this.state.letter1+this.state.letter2+this.state.letter3,
            f2swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"י",
            f3smS: "י"+this.state.letter1+this.state.letter2+this.state.letter3,
            f3swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3,
            f1mS: "נ"+this.state.letter1+this.state.letter2+this.state.letter3,
            f2mmS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
            f2mwS: "ת"+this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"נה",
            f3mS: "י"+this.state.letter1+this.state.letter2+this.state.letter3+"ו"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              infS: "ל"+this.state.letter1+this.state.letter2+"ו"+"ך",
              p3smS: this.state.letter1+this.state.letter2+"ך",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ך",
              ismS: this.state.letter1+this.state.letter2+"ו"+"ך",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ך",
              f1sS:"א"+this.state.letter2+"ך",
              f2smS:"ת"+this.state.letter1+this.state.letter2+"ך",
              f3smS: "י"+this.state.letter1+this.state.letter2+"ך",
              f3swS: "ת"+this.state.letter1+this.state.letter2+"ך",
              f1mS: "נ"+this.state.letter1+this.state.letter2+"ך"
            });
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              infS: "ל"+this.state.letter1+this.state.letter2+"ו"+"ם",
              p3smS: this.state.letter1+this.state.letter2+"ם",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ם",
              ismS: this.state.letter1+this.state.letter2+"ו"+"ם",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ם",
              f1sS:"א"+this.state.letter2+"ם",
              f2smS:"ת"+this.state.letter1+this.state.letter2+"ם",
              f3smS: "י"+this.state.letter1+this.state.letter2+"ם",
              f3swS: "ת"+this.state.letter1+this.state.letter2+"ם",
              f1mS: "נ"+this.state.letter1+this.state.letter2+"ם"
            });
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              f2mwS: "ת"+this.state.letter1+this.state.letter2+"ו"+"נה",
              imwS: this.state.letter1+this.state.letter2+"ו"+"נה",
              p1mS: this.state.letter1+this.state.letter2+"נו",
              infS: "ל"+this.state.letter1+this.state.letter2+"ו"+"ן",
              p3smS: this.state.letter1+this.state.letter2+"ן",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ן",
              ismS: this.state.letter1+this.state.letter2+"ו"+"ן",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ן",
              f1sS:"א"+this.state.letter2+"ן",
              f2smS:"ת"+this.state.letter1+this.state.letter2+"ן",
              f3smS: "י"+this.state.letter1+this.state.letter2+"ן",
              f3swS: "ת"+this.state.letter1+this.state.letter2+"ן",
              f1mS: "נ"+this.state.letter1+this.state.letter2+"ן"
            });
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              infS: "ל"+this.state.letter1+this.state.letter2+"ו"+"ף",
              p3smS: this.state.letter1+this.state.letter2+"ף",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ף",
              ismS: this.state.letter1+this.state.letter2+"ו"+"ף",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ף",
              f1sS:"א"+this.state.letter2+"ף",
              f2smS:"ת"+this.state.letter1+this.state.letter2+"ף",
              f3smS: "י"+this.state.letter1+this.state.letter2+"ף",
              f3swS: "ת"+this.state.letter1+this.state.letter2+"ף",
              f1mS: "נ"+this.state.letter1+this.state.letter2+"ף"
            });
          }
          if(this.state.letter3 == "צ"){
            this.setState({
              infS: "ל"+this.state.letter1+this.state.letter2+"ו"+"ץ",
              p3smS: this.state.letter1+this.state.letter2+"ץ",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ץ",
              ismS: this.state.letter1+this.state.letter2+"ו"+"ץ",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ץ",
              f1sS:"א"+this.state.letter2+"ץ",
              f2smS:"ת"+this.state.letter1+this.state.letter2+"ץ",
              f3smS: "י"+this.state.letter1+this.state.letter2+"ץ",
              f3swS: "ת"+this.state.letter1+this.state.letter2+"ץ",
              f1mS: "נ"+this.state.letter1+this.state.letter2+"ץ"
            });
          }
        break
        case 'פעל_קרא':
        if(this.state.letter1 == "פ" || this.state.letter1 == "ת"||this.state.letter1 == 'כ'||this.state.letter1 == 'ב'||this.state.letter1 == 'ת'){ 
          this.setState({
            p1s: this.state.letter1+"ָּ"+this.state.letter2+"ָ"+this.state.letter3+"תִי",
            p2sm: this.state.letter1+"ָּ"+this.state.letter2+"ָ"+this.state.letter3+"תָ",
            p2sw: this.state.letter1+"ָּ"+this.state.letter2+"ָ"+this.state.letter3+"תְ",
            p3sm: this.state.letter1+"ָּ"+this.state.letter2+"ָ"+this.state.letter3,
            p3sw: this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"ָה",
            p1m: this.state.letter1+"ָּ"+this.state.letter2+"ָ"+this.state.letter3+"נוּ",
            p2mm: this.state.letter1+"ְּ"+this.state.letter2+"ָ"+this.state.letter3+"תֶם",
            p2mw: this.state.letter1+"ְּ"+this.state.letter2+"ָ"+this.state.letter3+"תֶן",
            p3m: this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            nsm: this.state.letter1+"ּוֹ"+this.state.letter2+"ֵ"+this.state.letter3,
            nsw: this.state.letter1+"ּוֹ"+this.state.letter2+"ֵ"+this.state.letter3+"ת",
            nmm: this.state.letter1+"ּוֹ"+this.state.letter2+"ְ"+this.state.letter3+"ִים",
            nmw: this.state.letter1+"ּוֹ"+this.state.letter2+"ְ"+this.state.letter3+"וֹת",
            ism: this.state.letter1+"ְּ"+this.state.letter2+"ָ"+this.state.letter3,
            isw: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
            imm: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            imw: this.state.letter1+"ְּ"+this.state.letter2+"ֶ"+this.state.letter3+"נָה",
            ns: this.state.letter1+"ְּ"+this.state.letter2+"ִי"+this.state.letter3+"ָה",
            nm: this.state.letter1+"ְּ"+this.state.letter2+"ִי"+this.state.letter3+"וֹת",
            asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+this.state.letter3,
            asw: this.state.letter1+"ְּ"+this.state.letter2+"וּ"+this.state.letter3+"ָה",
            amm: this.state.letter1+"ְּ"+this.state.letter2+"וּ"+this.state.letter3+"ִים",
            amw: this.state.letter1+"ְּ"+this.state.letter2+"וּ"+this.state.letter3+"וֹת"
          });                                    
        }else{
          this.setState({
            p1s: this.state.letter1+"ָ"+this.state.letter2+"ָ"+this.state.letter3+"תִי",
            p2sm: this.state.letter1+"ָ"+this.state.letter2+"ָ"+this.state.letter3+"תָ",
            p2sw: this.state.letter1+"ָ"+this.state.letter2+"ָ"+this.state.letter3+"תְ",
            p3sm: this.state.letter1+"ָ"+this.state.letter2+"ָ"+this.state.letter3,
            p3sw: this.state.letter1+"ָ"+this.state.letter2+"ְ"+this.state.letter3+"ָה",
            p1m: this.state.letter1+"ָ"+this.state.letter2+"ָ"+this.state.letter3+"נוּ",
            p2mm: this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3+"תֶם",
            p2mw: this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3+"תֶן",
            p3m: this.state.letter1+"ָ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+this.state.letter3,
            nsw: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+this.state.letter3+"ת",
            nmm: this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"ִים",
            nmw: this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"וֹת",
            ism: this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3,
            isw: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
            imm: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            imw: this.state.letter1+"ְ"+this.state.letter2+"ֶ"+this.state.letter3+"נָה",
            ns: this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3+"ָה",
            nm: this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3+"וֹת",
            asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+this.state.letter3,
            asw: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"ָה",
            amm: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"ִים",
            amw: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"וֹת"
          });
        }
        if(this.state.letter2 == 'פ'||this.state.letter2 == 'כ'||this.state.letter2 == 'ב'){
          this.setState({
            inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+this.state.letter3,
            f1s: "אֶ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+this.state.letter3,
            f2sm: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+this.state.letter3,
            f2sw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
            f3sm: "יִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+this.state.letter3,
            f3sw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+this.state.letter3,
            f1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+this.state.letter3,
            f2mm: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
            f2mw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֶּ"+this.state.letter3+"נָה",
            f3m: "יִ"+this.state.letter1+"ְ"+this.state.letter2+"ֶּ"+this.state.letter3+"וּ"
          });
        }else{
          this.setState({
            inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+this.state.letter3,
            f1s: "אֶ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3,
            f2sm: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3,
            f2sw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
            f3sm: "יִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3,
            f3sw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3,
            f1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3,
            f2mm: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            f2mw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֶ"+this.state.letter3+"נָה",
            f3m: "יִ"+this.state.letter1+"ְ"+this.state.letter2+"ֶ"+this.state.letter3+"וּ"
          });                                      
        }
        this.setState({
          infS: "ל"+this.state.letter1+this.state.letter2+"ו"+this.state.letter3,  
          p1sS: this.state.letter1+this.state.letter2+this.state.letter3+"תי",
          p2smS: this.state.letter1+this.state.letter2+this.state.letter3+"ת",
          p2swS: this.state.letter1+this.state.letter2+this.state.letter3+"ת",
          p3smS: this.state.letter1+this.state.letter2+this.state.letter3,
          p3swS: this.state.letter1+this.state.letter2+this.state.letter3+"ה",
          p1mS: this.state.letter1+this.state.letter2+this.state.letter3+"נו",
          p2mmS: this.state.letter1+this.state.letter2+this.state.letter3+"תם",
          p2mwS: this.state.letter1+this.state.letter2+this.state.letter3+"תן",
          p3mS: this.state.letter1+this.state.letter2+this.state.letter3+"ו",
          nsmS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
          nswS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
          nmmS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ים",
          nmwS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ות",
          ismS: this.state.letter1+this.state.letter2+this.state.letter3,
          iswS: this.state.letter1+this.state.letter2+this.state.letter3+"י",
          immS: this.state.letter1+this.state.letter2+this.state.letter3+"ו",
          imwS: this.state.letter1+this.state.letter2+this.state.letter3+"נה",
          nsS: this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ה",
          nmS: this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ות",
          asmS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
          aswS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ה",
          ammS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ים",
          amwS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ות",
          f1sS:"א"+this.state.letter1+this.state.letter2+this.state.letter3,
          f2smS:"ת"+this.state.letter1+this.state.letter2+this.state.letter3,
          f2swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"י",
          f3smS: "י"+this.state.letter1+this.state.letter2+this.state.letter3,
          f3swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3,
          f1mS: "נ"+this.state.letter1+this.state.letter2+this.state.letter3,
          f2mmS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
          f2mwS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"נה",
          f3mS: "י"+this.state.letter1+this.state.letter2+this.state.letter3+"ו"
        });
        break
        case 'פעל_בנה':
        if(this.state.letter1 == "פ" || this.state.letter1 == "ת"||this.state.letter1 == 'כ'||this.state.letter1 == 'ב'||this.state.letter1 == 'ת'){ 
          this.setState({
            p1s: this.state.letter1+"ָּ"+this.state.letter2+"ִי"+"תִי",
            p2sm: this.state.letter1+"ָּ"+this.state.letter2+"ִי"+"תָ",
            p2sw: this.state.letter1+"ָּ"+this.state.letter2+"ִי"+"תְ",
            p3sm: this.state.letter1+"ָּ"+this.state.letter2+"ָ"+"ה",
            p3sw: this.state.letter1+"ָּ"+this.state.letter2+"ְ"+"תָה",
            p1m: this.state.letter1+"ָּ"+this.state.letter2+"ִי"+"נוּ",
            p2mm: this.state.letter1+"ְּ"+this.state.letter2+"ִי"+"תֶם",
            p2mw: this.state.letter1+"ְּ"+this.state.letter2+"ִי"+"תֶן",
            p3m: this.state.letter1+"ָּ"+this.state.letter2+"וּ",
            nsm: this.state.letter1+"ּוֹ"+this.state.letter2+"ֶ"+"ה",
            nsw: this.state.letter1+"ּוֹ"+this.state.letter2+"ָ"+"ה",
            nmm: this.state.letter1+"ּוֹ"+this.state.letter2+"ִים",
            nmw: this.state.letter1+"ּוֹ"+this.state.letter2+"וֹת",
            ism: this.state.letter1+"ְּ"+this.state.letter2+"ֵ"+"ה",
            isw: this.state.letter1+"ְּ"+this.state.letter2+"ִי",
            imm: this.state.letter1+"ְּ"+this.state.letter2+"וּ",
            imw: this.state.letter1+"ְּ"+this.state.letter2+"ֶ"+"ינָה",
            ns: this.state.letter1+"ְּ"+this.state.letter2+"ִי"+"ָה",
            nm: this.state.letter1+"ְּ"+this.state.letter2+"ִי"+"וֹת",
            asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+"י",
            asw: this.state.letter1+"ְּ"+this.state.letter2+"וּ"+"יָה",
            amm: this.state.letter1+"ְּ"+this.state.letter2+"וּ"+"יִים",
            amw: this.state.letter1+"ְּ"+this.state.letter2+"וּ"+"יוֹת"
          });                                              
        }else{
          this.setState({
            p1s: this.state.letter1+"ָ"+this.state.letter2+"ִיתִי",
            p2sm: this.state.letter1+"ָ"+this.state.letter2+"ִיתָ",
            p2sw: this.state.letter1+"ָ"+this.state.letter2+"ִיתְ",
            p3sm: this.state.letter1+"ָ"+this.state.letter2+"ָה",
            p3sw: this.state.letter1+"ָ"+this.state.letter2+"ְתָה",
            p1m: this.state.letter1+"ָ"+this.state.letter2+"ִינוּ",
            p2mm: this.state.letter1+"ְ"+this.state.letter2+"ִיתם",
            p2mw: this.state.letter1+"ְ"+this.state.letter2+"ִיתן",
            p3m: this.state.letter1+"ָ"+this.state.letter2+"וּ",
            nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֶ"+"ה",
            nsw: this.state.letter1+"וֹ"+this.state.letter2+"ָה",
            nmm: this.state.letter1+"וֹ"+this.state.letter2+"ִים",
            nmw: this.state.letter1+"וֹ"+this.state.letter2+"וֹת",
            ism: this.state.letter1+"ְ"+this.state.letter2+"ֵ"+"ה",
            isw: this.state.letter1+"ְ"+this.state.letter2+"ִי",
            imm: this.state.letter1+"ְ"+this.state.letter2+"וּ",
            imw: this.state.letter1+"ְ"+this.state.letter2+"ֶ"+"ינָה",
            ns: this.state.letter1+"ְ"+this.state.letter2+"ִיָה",
            nm: this.state.letter1+"ְ"+this.state.letter2+"ִי"+"וֹת",
            asm: this.state.letter1+"ָ"+this.state.letter2+"וּי",
            asw: this.state.letter1+"ְ"+this.state.letter2+"וּ"+"יָה",
            amm: this.state.letter1+"ְ"+this.state.letter2+"וּ"+"יִים",
            amw: this.state.letter1+"ְ"+this.state.letter2+"וּ"+"יוֹת"
          });
        }
        if(this.state.letter2 == 'פ'||this.state.letter2 == 'כ'||this.state.letter2 == 'ב'){
          this.setState({
            inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ּוֹת",
            f1s: "אֶ"+this.state.letter1+"ְ"+this.state.letter2+"ֶּה",
            f2sm: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֶּה",
            f2sw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי",
            f3sm: "יִ"+this.state.letter1+"ְ"+this.state.letter2+"ֶּה",
            f3sw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֶּה",
            f1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֶּה",
            f2mm: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ּוּ",
            f2mw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֶּינָה",
            f3m: "יִ"+this.state.letter1+"ְ"+this.state.letter2+"ּוּ"
          });
        }else{
          this.setState({
            inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"וֹת",
            f1s: "אֶ"+this.state.letter1+"ְ"+this.state.letter2+"ֶה",
            f2sm: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֶה",
            f2sw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ִי",
            f3sm: "יִ"+this.state.letter1+"ְ"+this.state.letter2+"ֶה",
            f3sw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֶה",
            f1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֶה",
            f2mm: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"וּ",
            f2mw: "תִּ"+this.state.letter1+"ְ"+this.state.letter2+"ֶינָה",
            f3m: "יִ"+this.state.letter1+"ְ"+this.state.letter2+"וּ"
          });                                       
        }
        this.setState({
          infS: "ל"+this.state.letter1+this.state.letter2+"ו"+this.state.letter3,  
          p1sS: this.state.letter1+this.state.letter2+"יתי",
          p2smS: this.state.letter1+this.state.letter2+"ית",
          p2swS: this.state.letter1+this.state.letter2+"ית",
          p3smS: this.state.letter1+this.state.letter2+"ה",
          p3swS: this.state.letter1+this.state.letter2+"תה",
          p1mS: this.state.letter1+this.state.letter2+"ינו",
          p2mmS: this.state.letter1+this.state.letter2+"יתם",
          p2mwS: this.state.letter1+this.state.letter2+"יתן",
          p3mS: this.state.letter1+this.state.letter2+"ו",
          nsmS: this.state.letter1+"ו"+this.state.letter2+"ה",
          nswS: this.state.letter1+"ו"+this.state.letter2+"ה",
          nmmS: this.state.letter1+"ו"+this.state.letter2+"ים",
          nmwS: this.state.letter1+"ו"+this.state.letter2+"ות",
          ismS: this.state.letter1+this.state.letter2+"ה",
          iswS: this.state.letter1+this.state.letter2+"ויה",
          immS: this.state.letter1+this.state.letter2+"ו",
          imwS: this.state.letter1+this.state.letter2+"ינה",
          nsS: this.state.letter1+this.state.letter2+"י"+"ה",
          nmS: this.state.letter1+this.state.letter2+"י"+"ות",
          asmS: this.state.letter1+this.state.letter2+"וי",
          aswS: this.state.letter1+this.state.letter2+"ויה",
          ammS: this.state.letter1+this.state.letter2+"ויים",
          amwS: this.state.letter1+this.state.letter2+"ויות",
          f1sS:"א"+this.state.letter1+this.state.letter2+"ה",
          f2smS:"ת"+this.state.letter1+this.state.letter2+"ה",
          f2swS: "ת"+this.state.letter1+this.state.letter2+"י",
          f3smS: "י"+this.state.letter1+this.state.letter2+"ה",
          f3swS: "ת"+this.state.letter1+this.state.letter2+"ה",
          f1mS: "נ"+this.state.letter1+this.state.letter2+"ה",
          f2mmS: "ת"+this.state.letter1+this.state.letter2+"ו",
          f2mwS: "ת"+this.state.letter1+this.state.letter2+"ינה",
          f3mS: "י"+this.state.letter1+this.state.letter2+"ו"
        });
        break
        case 'פעל_קום':
        if(this.state.letter1 == "פ" || this.state.letter1 == "ת"||this.state.letter1 == 'כ'||this.state.letter1 == 'ב'||this.state.letter1 == 'ת'){ 
          this.setState({
            p1s: this.state.letter1+"ַּ"+this.state.letter3+"ְתִּי",
            p2sm: this.state.letter1+"ַּ"+this.state.letter3+"ְתָּ",
            p2sw: this.state.letter1+"ַּ"+this.state.letter3+"ְתְּ",
            p3sm: this.state.letter1+"ָּ"+this.state.letter3,
            p3sw: this.state.letter1+"ָּ"+this.state.letter3+"ָה",
            p1m: this.state.letter1+"ַּ"+this.state.letter3+"ְנוּ",
            p2mm: this.state.letter1+"ַּ"+this.state.letter3+"ְתֶּם",
            p2mw: this.state.letter1+"ַּ"+this.state.letter3+"ְתֶּן",
            p3m: this.state.letter1+"ַּ"+this.state.letter3+"וּ",
            nsm: this.state.letter1+"ַּ"+this.state.letter3,
            nsw: this.state.letter1+"ַּ"+this.state.letter3+"ַה",
            nmm: this.state.letter1+"ַּ"+this.state.letter3+"ִים",
            nmw: this.state.letter1+"ַּ"+this.state.letter3+"וֹת",
            ism: this.state.letter1+"ּוּ"+this.state.letter3,
            isw: this.state.letter1+"ּוּ"+this.state.letter3+"ִי",
            imm: this.state.letter1+"ּוּ"+this.state.letter3+"וּ",
            imw: this.state.letter1+"ֹּ"+this.state.letter3+"ְנָה",
            ns: this.state.letter1+"ִּי"+this.state.letter3+"ָה",
            nm: this.state.letter1+"ִּי"+this.state.letter3+"וֹת",
            asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+this.state.letter3,
            asw: this.state.letter1+"ְּ"+this.state.letter2+"וּ"+this.state.letter3+"ָה",
            amm: this.state.letter1+"ְּ"+this.state.letter2+"וּ"+this.state.letter3+"ִים",
            amw: this.state.letter1+"ְּ"+this.state.letter2+"וּ"+this.state.letter3+"וֹת"
          });
          if (this.state.letter3 == "כ"){
            this.setState({
              p3sm: this.state.letter1+"ָּ"+"ך", 
              nsm: this.state.letter1+"ָּ"+"ך",
              ism: this.state.letter1+"ּוּ"+"ך", 
              asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+"ך"
            });
          }
          if (this.state.letter3 == "מ"){
            this.setState({
              p3sm: this.state.letter1+"ָּ"+"ם", 
              nsm: this.state.letter1+"ָּ"+"ם",
              ism: this.state.letter1+"ּוּ"+"ם", 
              asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+"ם"
            });
          } 
          if (this.state.letter3 == "נ"){
            this.setState({
              imw: this.state.letter1+"ֹּ"+"נָּה",
              p1m: this.state.letter1+"ַּ"+"נּוּ",
              p3sm: this.state.letter1+"ָּ"+"ן", 
              nsm: this.state.letter1+"ָּ"+"ן",
              ism: this.state.letter1+"ּוּ"+"ן", 
              asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+"ו"
            });
          } 
          if (this.state.letter3 == "פ"){
            this.setState({
              p3sm: this.state.letter1+"ָּ"+"ף", 
              nsm: this.state.letter1+"ָּ"+"ף",
              ism: this.state.letter1+"ּוּ"+"ף", 
              asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+"ף"
            });
          }
          if (this.state.letter3 == "צ"){
            this.setState({
              p3sm: this.state.letter1+"ָּ"+"ץ", 
              nsm: this.state.letter1+"ָּ"+"ץ",
              ism: this.state.letter1+"ּוּ"+"ץ", 
              asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+"ץ"
            });
          }                                              
        }else{
          this.setState(
            {p1s: this.state.letter1+"ַ"+this.state.letter3+"ְתִּי",
            p2sm: this.state.letter1+"ַ"+this.state.letter3+"ְתָּ",
            p2sw: this.state.letter1+"ַ"+this.state.letter3+"ְתְּ",
            p3sm: this.state.letter1+"ָ"+this.state.letter3,
            p3sw: this.state.letter1+"ָ"+this.state.letter3+"ָה",
            p1m: this.state.letter1+"ַ"+this.state.letter3+"ְנוּ",
            p2mm: this.state.letter1+"ַ"+this.state.letter3+"ְתֶּם",
            p2mw: this.state.letter1+"ַ"+this.state.letter3+"ְתֶּן",
            p3m: this.state.letter1+"ַ"+this.state.letter3+"וּ",
            nsm: this.state.letter1+"ָ"+this.state.letter3,
            nsw: this.state.letter1+"ָ"+this.state.letter3+"ָה",
            nmm: this.state.letter1+"ָ"+this.state.letter3+"ִים",
            nmw: this.state.letter1+"ָ"+this.state.letter3+"וֹת",
            ism: this.state.letter1+"וּ"+this.state.letter3,
            isw: this.state.letter1+"וּ"+this.state.letter3+"ִי",
            imm: this.state.letter1+"וּ"+this.state.letter3+"וּ",
            imw: this.state.letter1+"ֹ"+this.state.letter3+"ְנָה",
            ns: this.state.letter1+"ִי"+this.state.letter3+"ָה",
            nm: this.state.letter1+"ִי"+this.state.letter3+"וֹת",
            asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+this.state.letter3,
            asw: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"ָה",
            amm: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"ִים",
            amw: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"וֹת"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+"ך",
              nsm: this.state.letter1+"ָ"+"ך",
              ism: this.state.letter1+"וּ"+"ך",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ך"
            });
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+"ם",
              nsm: this.state.letter1+"ָ"+"ם",
              ism: this.state.letter1+"וּ"+"ם",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ם"
            });
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              imw: this.state.letter1+"ֹ"+"נָּה",
              p1m: this.state.letter1+"ַ"+"נּוּ",
              p3sm: this.state.letter1+"ָ"+"ן",
              nsm: this.state.letter1+"ָ"+"ן",
              ism: this.state.letter1+"וּ"+"ן",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ן"
            });
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+"ף",
              nsm: this.state.letter1+"ָ"+"ף",
              ism: this.state.letter1+"וּ"+"ף",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ף"
            });
          }
          if(this.state.letter3 == "צ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+"ץ",
              nsm: this.state.letter1+"ָ"+"ץ",
              ism: this.state.letter1+"וּ"+"ץ",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ץ"
            });
          }
        }
          this.setState({
            inf: "לָ"+this.state.letter1+"וּ"+this.state.letter3,
            f1s: "אָ"+this.state.letter1+"וּ"+this.state.letter3,
            f2sm: "תָּ"+this.state.letter1+"וּ"+this.state.letter3,
            f2sw: "תָּ"+this.state.letter1+"וּ"+this.state.letter3+"ִי",
            f3sm: "יָ"+this.state.letter1+"וּ"+this.state.letter3,
            f3sw: "תָּ"+this.state.letter1+"וּ"+this.state.letter3,
            f1m: "נָ"+this.state.letter1+"וּ"+this.state.letter3,
            f2mm: "תָּ"+this.state.letter1+"וּ"+this.state.letter3+"וּ",
            f2mw: "תָּ"+this.state.letter1+"ֹ"+this.state.letter3+"ְנָה",
            f3m: "יָ"+this.state.letter1+"וּ"+this.state.letter3+"וּ"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              inf: "לָ"+this.state.letter1+"וּ"+"ך",
              f1s: "אָ"+this.state.letter1+"וּ"+"ך",
              f2sm: "תָּ"+this.state.letter1+"וּ"+"ך",
              f3sm: "יָ"+this.state.letter1+"וּ"+"ך",
              f3sw: "תָּ"+this.state.letter1+"וּ"+"ך",
              f1m: "נָ"+this.state.letter1+"וּ"+"ך"
            });            
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              inf: "לָ"+this.state.letter1+"וּ"+"ם",
              f1s: "אָ"+this.state.letter1+"וּ"+"ם",
              f2sm: "תָּ"+this.state.letter1+"וּ"+"ם",
              f3sm: "יָ"+this.state.letter1+"וּ"+"ם",
              f3sw: "תָּ"+this.state.letter1+"וּ"+"ם",
              f1m: "נָ"+this.state.letter1+"וּ"+"ם"
            });            
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              f2mw: "תָּ"+this.state.letter1+"ֹ"+"נָּה",
              inf: "לָ"+this.state.letter1+"וּ"+"ן",
              f1s: "אָ"+this.state.letter1+"וּ"+"ן",
              f2sm: "תָּ"+this.state.letter1+"וּ"+"ן",
              f3sm: "יָ"+this.state.letter1+"וּ"+"ן",
              f3sw: "תָּ"+this.state.letter1+"וּ"+"ן",
              f1m: "נָ"+this.state.letter1+"וּ"+"ן"
            });            
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              inf: "לָ"+this.state.letter1+"וּ"+"ף",
              f1s: "אָ"+this.state.letter1+"וּ"+"ף",
              f2sm: "תָּ"+this.state.letter1+"וּ"+"ף",
              f3sm: "יָ"+this.state.letter1+"וּ"+"ף",
              f3sw: "תָּ"+this.state.letter1+"וּ"+"ף",
              f1m: "נָ"+this.state.letter1+"וּ"+"ף"
            });            
          } 
          if(this.state.letter3 == "צ"){
            this.setState({
              inf: "לָ"+this.state.letter1+"וּ"+"ץ",
              f1s: "אָ"+this.state.letter1+"וּ"+"ץ",
              f2sm: "תָּ"+this.state.letter1+"וּ"+"ץ",
              f3sm: "יָ"+this.state.letter1+"וּ"+"ץ",
              f3sw: "תָּ"+this.state.letter1+"וּ"+"ץ",
              f1m: "נָ"+this.state.letter1+"וּ"+"ץ"
            });            
          }                                       
          this.setState({
            infS: "ל"+this.state.letter1+"ו"+this.state.letter3,  
            p1sS: this.state.letter1+this.state.letter3+"תי",
            p2smS: this.state.letter1+this.state.letter3+"ת",
            p2swS: this.state.letter1+this.state.letter3+"ת",
            p3smS: this.state.letter1+this.state.letter3,
            p3swS: this.state.letter1+this.state.letter3+"ה",
            p1mS: this.state.letter1+this.state.letter3+"נו",
            p2mmS: this.state.letter1+this.state.letter3+"תם",
            p2mwS: this.state.letter1+this.state.letter3+"תן",
            p3mS: this.state.letter1+this.state.letter3+"ו",
            nsmS: this.state.letter1+this.state.letter3,
            nswS: this.state.letter1+this.state.letter3+"ה",
            nmmS: this.state.letter1+this.state.letter3+"ים",
            nmwS: this.state.letter1+this.state.letter3+"ות",
            ismS: this.state.letter1+"ו"+this.state.letter3,
            iswS: this.state.letter1+"ו"+this.state.letter3+"י",
            immS: this.state.letter1+"ו"+this.state.letter3+"ו",
            imwS: this.state.letter1+"ו"+this.state.letter3+"נה",
            nsS: this.state.letter1+"י"+this.state.letter3+"ה",
            nmS: this.state.letter1+"י"+this.state.letter3+"ות",
            asmS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
            aswS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ה",
            ammS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ים",
            amwS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ות",
            f1sS:"א"+this.state.letter1+"ו"+this.state.letter3,
            f2smS:"ת"+this.state.letter1+"ו"+this.state.letter3,
            f2swS: "ת"+this.state.letter1+"ו"+this.state.letter3+"י",
            f3smS: "י"+this.state.letter1+"ו"+this.state.letter3,
            f3swS: "ת"+this.state.letter1+"ו"+this.state.letter3,
            f1mS: "נ"+this.state.letter1+"ו"+this.state.letter3,
            f2mmS: "ת"+this.state.letter1+"ו"+this.state.letter3+"ו",
            f2mwS: "ת"+this.state.letter1+"ו"+this.state.letter3+"נה",
            f3mS: "י"+this.state.letter1+"ו"+this.state.letter3+"ו"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              infS: "ל"+this.state.letter1+"ו"+"ך",
              p3smS: this.state.letter1+"ך",
              nsmS: this.state.letter1+"ך",
              ismS: this.state.letter1+"ו"+"ך",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ך",
              f1sS:"א"+this.state.letter1+"ו"+"ך",
              f2smS:"ת"+this.state.letter1+"ו"+"ך",
              f3smS: "י"+this.state.letter1+"ו"+"ך",
              f3swS: "ת"+this.state.letter1+"ו"+"ך",
              f1mS: "נ"+this.state.letter1+"ו"+"ך"
            });
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              infS: "ל"+this.state.letter1+"ו"+"ם",
              p3smS: this.state.letter1+"ם",
              nsmS: this.state.letter1+"ם",
              ismS: this.state.letter1+"ו"+"ם",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ם",
              f1sS:"א"+this.state.letter1+"ו"+"ם",
              f2smS:"ת"+this.state.letter1+"ו"+"ם",
              f3smS: "י"+this.state.letter1+"ו"+"ם",
              f3swS: "ת"+this.state.letter1+"ו"+"ם",
              f1mS: "נ"+this.state.letter1+"ו"+"ם"
            });
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              f2mwS: "ת"+this.state.letter1+"ו"+"נה",
              imwS: this.state.letter1+"ו"+"נה",
              p1mS: this.state.letter1+"נו",
              infS: "ל"+this.state.letter1+"ו"+"ן",
              p3smS: this.state.letter1+"ן",
              nsmS: this.state.letter1+"ן",
              ismS: this.state.letter1+"ו"+"ן",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ן",
              f1sS:"א"+this.state.letter1+"ו"+"ן",
              f2smS:"ת"+this.state.letter1+"ו"+"ן",
              f3smS: "י"+this.state.letter1+"ו"+"ן",
              f3swS: "ת"+this.state.letter1+"ו"+"ן",
              f1mS: "נ"+this.state.letter1+"ו"+"ן"
            });
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              infS: "ל"+this.state.letter1+"ו"+"ף",
              p3smS: this.state.letter1+"ף",
              nsmS: this.state.letter1+"ף",
              ismS: this.state.letter1+"ו"+"ף",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ף",
              f1sS:"א"+this.state.letter1+"ו"+"ף",
              f2smS:"ת"+this.state.letter1+"ו"+"ף",
              f3smS: "י"+this.state.letter1+"ו"+"ף",
              f3swS: "ת"+this.state.letter1+"ו"+"ף",
              f1mS: "נ"+this.state.letter1+"ו"+"ף"
            });
          }
          if(this.state.letter3 == "צ"){
            this.setState({
              infS: "ל"+this.state.letter1+"ו"+"ץ",
              p3smS: this.state.letter1+"ץ",
              nsmS: this.state.letter1+"ץ",
              ismS: this.state.letter1+"ו"+"ץ",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ץ",
              f1sS:"א"+this.state.letter1+"ו"+"ץ",
              f2smS:"ת"+this.state.letter1+"ו"+"ץ",
              f3smS: "י"+this.state.letter1+"ו"+"ץ",
              f3swS: "ת"+this.state.letter1+"ו"+"ץ",
              f1mS: "נ"+this.state.letter1+"ו"+"ץ"
            });
          }
        break      
        case 'פעל_שיר':
        if(this.state.letter1 == "פ" || this.state.letter1 == "ת"||this.state.letter1 == 'כ'||this.state.letter1 == 'ב'||this.state.letter1 == 'ת'){ 
          this.setState({
            p1s: this.state.letter1+"ַּ"+this.state.letter3+"ְתִּי",
            p2sm: this.state.letter1+"ַּ"+this.state.letter3+"ְתָּ",
            p2sw: this.state.letter1+"ַּ"+this.state.letter3+"ְתְּ",
            p3sm: this.state.letter1+"ָּ"+this.state.letter3,
            p3sw: this.state.letter1+"ָּ"+this.state.letter3+"ָה",
            p1m: this.state.letter1+"ַּ"+this.state.letter3+"ְנוּ",
            p2mm: this.state.letter1+"ַּ"+this.state.letter3+"ְתֶּם",
            p2mw: this.state.letter1+"ַּ"+this.state.letter3+"ְתֶּן",
            p3m: this.state.letter1+"ַּ"+this.state.letter3+"וּ",
            nsm: this.state.letter1+"ַּ"+this.state.letter3,
            nsw: this.state.letter1+"ַּ"+this.state.letter3+"ַה",
            nmm: this.state.letter1+"ַּ"+this.state.letter3+"ִים",
            nmw: this.state.letter1+"ַּ"+this.state.letter3+"וֹת",
            ism: this.state.letter1+"ִּּי"+this.state.letter3,
            isw: this.state.letter1+"ִּי"+this.state.letter3+"ִי",
            imm: this.state.letter1+"ִּי"+this.state.letter3+"וּ",
            imw: this.state.letter1+"ֹּ"+this.state.letter3+"ְנָה",
            ns: this.state.letter1+"ִּי"+this.state.letter3+"ָה",
            nm: this.state.letter1+"ִּי"+this.state.letter3+"וֹת",
            asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+this.state.letter3,
            asw: this.state.letter1+"ְּ"+this.state.letter2+"וּ"+this.state.letter3+"ָה",
            amm: this.state.letter1+"ְּ"+this.state.letter2+"וּ"+this.state.letter3+"ִים",
            amw: this.state.letter1+"ְּ"+this.state.letter2+"וּ"+this.state.letter3+"וֹת"
          });
          if (this.state.letter3 == "כ"){
            this.setState({
              p3sm: this.state.letter1+"ָּ"+"ך", 
              nsm: this.state.letter1+"ָּ"+"ך",
              ism: this.state.letter1+"ִּי"+"ך", 
              asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+"ך"
            });
          }
          if (this.state.letter3 == "מ"){
            this.setState({
              p3sm: this.state.letter1+"ָּ"+"ם", 
              nsm: this.state.letter1+"ָּ"+"ם",
              ism: this.state.letter1+"ִּי"+"ם", 
              asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+"ם"
            });
          } 
          if (this.state.letter3 == "נ"){
            this.setState({
              imw: this.state.letter1+"ֹּ"+"נָּה",
              p1m: this.state.letter1+"ַּ"+"נּוּ",
              p3sm: this.state.letter1+"ָּ"+"ן", 
              nsm: this.state.letter1+"ָּ"+"ן",
              ism: this.state.letter1+"ִּי"+"ן", 
              asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+"ו"
            });
          } 
          if (this.state.letter3 == "פ"){
            this.setState({
              p3sm: this.state.letter1+"ָּ"+"ף", 
              nsm: this.state.letter1+"ָּ"+"ף",
              ism: this.state.letter1+"ִּי"+"ף", 
              asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+"ף"
            });
          }
          if (this.state.letter3 == "צ"){
            this.setState({
              p3sm: this.state.letter1+"ָּ"+"ץ", 
              nsm: this.state.letter1+"ָּ"+"ץ",
              ism: this.state.letter1+"ִּי"+"ץ", 
              asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+"ץ"
            });
          }                                              
        }else{
          this.setState({
            p1s: this.state.letter1+"ַ"+this.state.letter3+"ְתִּי",
            p2sm: this.state.letter1+"ַ"+this.state.letter3+"ְתָּ",
            p2sw: this.state.letter1+"ַ"+this.state.letter3+"ְתְּ",
            p3sm: this.state.letter1+"ָ"+this.state.letter3,
            p3sw: this.state.letter1+"ָ"+this.state.letter3+"ָה",
            p1m: this.state.letter1+"ַ"+this.state.letter3+"ְנוּ",
            p2mm: this.state.letter1+"ַ"+this.state.letter3+"ְתֶּם",
            p2mw: this.state.letter1+"ַ"+this.state.letter3+"ְתֶּן",
            p3m: this.state.letter1+"ַ"+this.state.letter3+"וּ",
            nsm: this.state.letter1+"ָ"+this.state.letter3,
            nsw: this.state.letter1+"ָ"+this.state.letter3+"ָה",
            nmm: this.state.letter1+"ָ"+this.state.letter3+"ִים",
            nmw: this.state.letter1+"ָ"+this.state.letter3+"וֹת",
            ism: this.state.letter1+"ִי"+this.state.letter3,
            isw: this.state.letter1+"ִי"+this.state.letter3+"ִי",
            imm: this.state.letter1+"ִי"+this.state.letter3+"וּ",
            imw: this.state.letter1+"ֵ"+this.state.letter3+"ְנָה",
            ns: this.state.letter1+"ִי"+this.state.letter3+"ָה",
            nm: this.state.letter1+"ִי"+this.state.letter3+"וֹת",
            asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+this.state.letter3,
            asw: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"ָה",
            amm: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"ִים",
            amw: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"וֹת"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+"ך",
              nsm: this.state.letter1+"ָ"+"ך",
              ism: this.state.letter1+"ִי"+"ך",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ך"
            });
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+"ם",
              nsm: this.state.letter1+"ָ"+"ם",
              ism: this.state.letter1+"ִי"+"ם",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ם"
            });
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              imw: this.state.letter1+"ֵ"+"נָּה",
              p1m: this.state.letter1+"ַ"+"נּוּ",
              p3sm: this.state.letter1+"ָ"+"ן",
              nsm: this.state.letter1+"ָ"+"ן",
              ism: this.state.letter1+"ִי"+"ן",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ן"
            });
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+"ף",
              nsm: this.state.letter1+"ָ"+"ף",
              ism: this.state.letter1+"ִי"+"ף",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ף"
            });
          }
          if(this.state.letter3 == "צ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+"ץ",
              nsm: this.state.letter1+"ָ"+"ץ",
              ism: this.state.letter1+"ִי"+"ץ",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ץ"
            });
          }
        }
          this.setState({
            inf: "לָ"+this.state.letter1+"ִי"+this.state.letter3,
            f1s: "אָ"+this.state.letter1+"ִי"+this.state.letter3,
            f2sm: "תָּ"+this.state.letter1+"ִי"+this.state.letter3,
            f2sw: "תָּ"+this.state.letter1+"ִי"+this.state.letter3+"ִי",
            f3sm: "יָ"+this.state.letter1+"ִי"+this.state.letter3,
            f3sw: "תָּ"+this.state.letter1+"ִי"+this.state.letter3,
            f1m: "נָ"+this.state.letter1+"ִי"+this.state.letter3,
            f2mm: "תָּ"+this.state.letter1+"ִי"+this.state.letter3+"וּ",
            f2mw: "תָּ"+this.state.letter1+"ֵ"+this.state.letter3+"ְנָה",
            f3m: "יָ"+this.state.letter1+"ִי"+this.state.letter3+"וּ"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              inf: "לָ"+this.state.letter1+"ִי"+"ך",
              f1s: "אָ"+this.state.letter1+"ִי"+"ך",
              f2sm: "תָּ"+this.state.letter1+"ִי"+"ך",
              f3sm: "יָ"+this.state.letter1+"ִי"+"ך",
              f3sw: "תָּ"+this.state.letter1+"ִי"+"ך",
              f1m: "נָ"+this.state.letter1+"ִי"+"ך"
            });            
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              inf: "לָ"+this.state.letter1+"ִי"+"ם",
              f1s: "אָ"+this.state.letter1+"ִי"+"ם",
              f2sm: "תָּ"+this.state.letter1+"ִי"+"ם",
              f3sm: "יָ"+this.state.letter1+"ִי"+"ם",
              f3sw: "תָּ"+this.state.letter1+"ִי"+"ם",
              f1m: "נָ"+this.state.letter1+"ִי"+"ם"
            });            
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              f2mw: "תָּ"+this.state.letter1+"ֵ"+"נָּה",
              inf: "לָ"+this.state.letter1+"ִי"+"ן",
              f1s: "אָ"+this.state.letter1+"ִי"+"ן",
              f2sm: "תָּ"+this.state.letter1+"ִי"+"ן",
              f3sm: "יָ"+this.state.letter1+"ִי"+"ן",
              f3sw: "תָּ"+this.state.letter1+"ִי"+"ן",
              f1m: "נָ"+this.state.letter1+"ִי"+"ן"
            });           
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              inf: "לָ"+this.state.letter1+"ִי"+"ף",
              f1s: "אָ"+this.state.letter1+"ִי"+"ף",
              f2sm: "תָּ"+this.state.letter1+"ִי"+"ף",
              f3sm: "יָ"+this.state.letter1+"ִי"+"ף",
              f3sw: "תָּ"+this.state.letter1+"ִי"+"ף",
              f1m: "נָ"+this.state.letter1+"ִי"+"ף"
            });            
          } 
          if(this.state.letter3 == "צ"){
            this.setState({
              inf: "לָ"+this.state.letter1+"ִי"+"ץ",
              f1s: "אָ"+this.state.letter1+"ִי"+"ץ",
              f2sm: "תָּ"+this.state.letter1+"ִי"+"ץ",
              f3sm: "יָ"+this.state.letter1+"ִי"+"ץ",
              f3sw: "תָּ"+this.state.letter1+"ִי"+"ץ",
              f1m: "נָ"+this.state.letter1+"ִי"+"ץ"
            });            
          }                                       
          this.setState({
            infS: "ל"+this.state.letter1+"י"+this.state.letter3,  
            p1sS: this.state.letter1+this.state.letter3+"תי",
            p2smS: this.state.letter1+this.state.letter3+"ת",
            p2swS: this.state.letter1+this.state.letter3+"ת",
            p3smS: this.state.letter1+this.state.letter3,
            p3swS: this.state.letter1+this.state.letter3+"ה",
            p1mS: this.state.letter1+this.state.letter3+"נו",
            p2mmS: this.state.letter1+this.state.letter3+"תם",
            p2mwS: this.state.letter1+this.state.letter3+"תן",
            p3mS: this.state.letter1+this.state.letter3+"ו",
            nsmS: this.state.letter1+this.state.letter3,
            nswS: this.state.letter1+this.state.letter3+"ה",
            nmmS: this.state.letter1+this.state.letter3+"ים",
            nmwS: this.state.letter1+this.state.letter3+"ות",
            ismS: this.state.letter1+"י"+this.state.letter3,
            iswS: this.state.letter1+"י"+this.state.letter3+"י",
            immS: this.state.letter1+"י"+this.state.letter3+"ו",
            imwS: this.state.letter1+"ֵ"+this.state.letter3+"נה",
            nsS: this.state.letter1+"י"+this.state.letter3+"ה",
            nmS: this.state.letter1+"י"+this.state.letter3+"ות",
            asmS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
            aswS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ה",
            ammS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ים",
            amwS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ות",
            f1sS:"א"+this.state.letter1+"י"+this.state.letter3,
            f2smS:"ת"+this.state.letter1+"י"+this.state.letter3,
            f2swS: "ת"+this.state.letter1+"י"+this.state.letter3+"י",
            f3smS: "י"+this.state.letter1+"י"+this.state.letter3,
            f3swS: "ת"+this.state.letter1+"י"+this.state.letter3,
            f1mS: "נ"+this.state.letter1+"י"+this.state.letter3,
            f2mmS: "ת"+this.state.letter1+"י"+this.state.letter3+"ו",
            f2mwS: "ת"+this.state.letter1+this.state.letter3+"נה",
            f3mS: "י"+this.state.letter1+"י"+this.state.letter3+"ו"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              infS: "ל"+this.state.letter1+"י"+"ך",
              p3smS: this.state.letter1+"ך",
              nsmS: this.state.letter1+"ך",
              ismS: this.state.letter1+"י"+"ך",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ך",
              f1sS:"א"+this.state.letter1+"י"+"ך",
              f2smS:"ת"+this.state.letter1+"י"+"ך",
              f3smS: "י"+this.state.letter1+"י"+"ך",
              f3swS: "ת"+this.state.letter1+"י"+"ך",
              f1mS: "נ"+this.state.letter1+"י"+"ך"
            });
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              infS: "ל"+this.state.letter1+"י"+"ם",
              p3smS: this.state.letter1+"ם",
              nsmS: this.state.letter1+"ם",
              ismS: this.state.letter1+"י"+"ם",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ם",
              f1sS:"א"+this.state.letter1+"י"+"ם",
              f2smS:"ת"+this.state.letter1+"י"+"ם",
              f3smS: "י"+this.state.letter1+"י"+"ם",
              f3swS: "ת"+this.state.letter1+"י"+"ם",
              f1mS: "נ"+this.state.letter1+"י"+"ם"
            });
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              f2mwS: "ת"+this.state.letter1+"נה",
              imwS: this.state.letter1+"ֵ"+"נה",
              p1mS: this.state.letter1+"נו",
              infS: "ל"+this.state.letter1+"י"+"ן",
              p3smS: this.state.letter1+"ן",
              nsmS: this.state.letter1+"ן",
              ismS: this.state.letter1+"י"+"ן",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ן",
              f1sS:"א"+this.state.letter1+"י"+"ן",
              f2smS:"ת"+this.state.letter1+"י"+"ן",
              f3smS: "י"+this.state.letter1+"י"+"ן",
              f3swS: "ת"+this.state.letter1+"י"+"ן",
              f1mS: "נ"+this.state.letter1+"י"+"ן"
            });
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              infS: "ל"+this.state.letter1+"י"+"ף",
              p3smS: this.state.letter1+"ף",
              nsmS: this.state.letter1+"ף",
              ismS: this.state.letter1+"י"+"ף",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ף",
              f1sS:"א"+this.state.letter1+"י"+"ף",
              f2smS:"ת"+this.state.letter1+"י"+"ף",
              f3smS: "י"+this.state.letter1+"י"+"ף",
              f3swS: "ת"+this.state.letter1+"י"+"ף",
              f1mS: "נ"+this.state.letter1+"י"+"ף"
            });
          }
          if(this.state.letter3 == "צ"){
            this.setState({
              infS: "ל"+this.state.letter1+"י"+"ץ",
              p3smS: this.state.letter1+"ץ",
              nsmS: this.state.letter1+"ץ",
              ismS: this.state.letter1+"י"+"ץ",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ץ",
              f1sS:"א"+this.state.letter1+"י"+"ץ",
              f2smS:"ת"+this.state.letter1+"י"+"ץ",
              f3smS: "י"+this.state.letter1+"י"+"ץ",
              f3swS: "ת"+this.state.letter1+"י"+"ץ",
              f1mS: "נ"+this.state.letter1+"י"+"ץ"
            });
          }
        break
        case 'פעל_ארז':
          this.setState({
            p1s: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְתִּי",
            p2sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְתָּ",
            p2sw: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְתְּ",
            p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3,
            p3sw: this.state.letter1+"ָ"+this.state.letter2+"ְ"+this.state.letter3+"ָה",
            p1m: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְנוּ",
            p2mm: this.state.letter1+"ְַ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּם",
            p2mw: this.state.letter1+"ְַ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּן",
            p3m: this.state.letter1+"ָ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+this.state.letter3,
            nsw: this.state.letter1+"וֹ"+this.state.letter2+"ֶ"+this.state.letter3+"ֶת",
            nmm: this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"ִים",
            nmw: this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"וֹת",
            ism: this.state.letter1+"ְֶ"+this.state.letter2+"ֹ"+this.state.letter3,
            isw: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
            imm: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            imw: this.state.letter1+"ְֶ"+this.state.letter2+"ֹ"+this.state.letter3+"ְנָה",
            ns: this.state.letter1+"ְַ"+this.state.letter2+"ִי"+this.state.letter3+"ָה",
            nm: this.state.letter1+"ְַ"+this.state.letter2+"ִי"+this.state.letter3+"וֹת",
            asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+this.state.letter3,
            asw: this.state.letter1+"ְַ"+this.state.letter2+"וּ"+this.state.letter3+"ָה",
            amm: this.state.letter1+"ְַ"+this.state.letter2+"וּ"+this.state.letter3+"ִים",
            amw: this.state.letter1+"ְַ"+this.state.letter2+"וּ"+this.state.letter3+"וֹת"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ך",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ך",
              ism: this.state.letter1+"ְֶ"+this.state.letter2+"ֹ"+"ך",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ך"
            });
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ם",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ם",
              ism: this.state.letter1+"ְֶ"+this.state.letter2+"ֹ"+"ם",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ם"
            });
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              imw: this.state.letter1+"ְֶ"+this.state.letter2+"ֹ"+"נָּה",
              p1m: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"נּוּ",
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ן",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ן",
              ism: this.state.letter1+"ְֶ"+this.state.letter2+"ֹ"+"ן",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ן"
            });
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ף",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ף",
              ism: this.state.letter1+"ְֶ"+this.state.letter2+"ֹ"+"ף",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ף"
            });
          }
          if(this.state.letter3 == "צ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ץ",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ץ",
              ism: this.state.letter1+"ְֶ"+this.state.letter2+"ֹ"+"ץ",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ץ"
            });
          }
          this.setState({
            inf: "לֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+this.state.letter3,
            f1s: "אֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+this.state.letter3,
            f2sm: "תֶּ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+this.state.letter3,
            f2sw: "תֶּ"+this.state.letter1+"ֶ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
            f3sm: "יֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+this.state.letter3,
            f3sw: "תֶּ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+this.state.letter3,
            f1m: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+this.state.letter3,
            f2mm: "תֶּ"+this.state.letter1+"ֶ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            f2mw: "תֶּ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+this.state.letter3+"ְנָה",
            f3m: "יֶ"+this.state.letter1+"ֶ"+this.state.letter2+"ְ"+this.state.letter3+"וּ"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              inf: "לֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ך",
              f1s: "אֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ך",
              f2sm: "תֶּ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ך",
              f3sm: "יֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ך",
              f3sw: "תֶּ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ך",
              f1m: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ך"
            });            
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              inf: "לֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ם",
              f1s: "אֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ם",
              f2sm: "תֶּ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ם",
              f3sm: "יֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ם",
              f3sw: "תֶּ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ם",
              f1m: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ם"
            });           
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              f2mw: "תֶּ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"נָּה",
              inf: "לֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ן",
              f1s: "אֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ן",
              f2sm: "תֶּ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ן",
              f3sm: "יֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ן",
              f3sw: "תֶּ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ן",
              f1m: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ן"
            });           
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              inf: "לֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ף",
              f1s: "אֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ף",
              f2sm: "תֶּ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ף",
              f3sm: "יֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"פ",
              f3sw: "תֶּ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"פ",
              f1m: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"פ"
            });            
          } 
          if(this.state.letter3 == "צ"){
            this.setState({
              inf: "לֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ץ",
              f1s: "אֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ץ",
              f2sm: "תֶּ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ץ",
              f3sm: "יֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ץ",
              f3sw: "תֶּ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ץ",
              f1m: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֹ"+"ץ"
            });            
          }                                       
        
          this.setState({
            infS: "ל"+this.state.letter1+this.state.letter2+"ו"+this.state.letter3,  
            p1sS: this.state.letter1+this.state.letter2+this.state.letter3+"תי",
            p2smS: this.state.letter1+this.state.letter2+this.state.letter3+"ת",
            p2swS: this.state.letter1+this.state.letter2+this.state.letter3+"ת",
            p3smS: this.state.letter1+this.state.letter2+this.state.letter3,
            p3swS: this.state.letter1+this.state.letter2+this.state.letter3+"ה",
            p1mS: this.state.letter1+this.state.letter2+this.state.letter3+"נו",
            p2mmS: this.state.letter1+this.state.letter2+this.state.letter3+"תם",
            p2mwS: this.state.letter1+this.state.letter2+this.state.letter3+"תן",
            p3mS: this.state.letter1+this.state.letter2+this.state.letter3+"ו",
            nsmS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
            nswS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
            nmmS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ים",
            nmwS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ות",
            ismS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
            iswS: this.state.letter1+this.state.letter2+this.state.letter3+"י",
            immS: this.state.letter1+this.state.letter2+this.state.letter3+"ו",
            imwS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"נה",
            nsS: this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ה",
            nmS: this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ות",
            asmS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
            aswS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ה",
            ammS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ים",
            amwS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ות",
            f1sS:"א"+this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
            f2smS:"ת"+this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
            f2swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"י",
            f3smS: "י"+this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
            f3swS: "ת"+this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
            f1mS: "נ"+this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
            f2mmS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
            f2mwS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"נה",
            f3mS: "י"+this.state.letter1+this.state.letter2+this.state.letter3+"ו"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              infS: "ל"+this.state.letter1+this.state.letter2+"ו"+"ך",
              p3smS: this.state.letter1+this.state.letter2+"ך",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ך",
              ismS: this.state.letter1+this.state.letter2+"ו"+"ך",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ך",
              f1sS:"א"+this.state.letter1+this.state.letter2+"ו"+"ך",
              f2smS:"ת"+this.state.letter1+this.state.letter2+"ו"+"ך",
              f3smS: "י"+this.state.letter1+this.state.letter2+"ו"+"ך",
              f3swS: "ת"+this.state.letter1+this.state.letter2+"ו"+"ך",
              f1mS: "נ"+this.state.letter1+this.state.letter2+"ו"+"ך"
            });
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              infS: "ל"+this.state.letter1+this.state.letter2+"ו"+"ם",
              p3smS: this.state.letter1+this.state.letter2+"ם",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ם",
              ismS: this.state.letter1+this.state.letter2+"ו"+"ם",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ם",
              f1sS:"א"+this.state.letter1+this.state.letter2+"ו"+"ם",
              f2smS:"ת"+this.state.letter1+this.state.letter2+"ו"+"ם",
              f3smS: "י"+this.state.letter1+this.state.letter2+"ו"+"ם",
              f3swS: "ת"+this.state.letter1+this.state.letter2+"ו"+"ם",
              f1mS: "נ"+this.state.letter1+this.state.letter2+"ו"+"ם"
            });
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              f2mwS: "ת"+this.state.letter1+this.state.letter2+"נה",
              imwS: this.state.letter1+this.state.letter2+"ו"+"נה",
              p1mS: this.state.letter1+this.state.letter2+"נו",
              infS: "ל"+this.state.letter1+this.state.letter2+"ו"+"ן",
              p3smS: this.state.letter1+this.state.letter2+"ן",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ן",
              ismS: this.state.letter1+this.state.letter2+"ו"+"ן",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ן",
              f1sS:"א"+this.state.letter1+this.state.letter2+"ו"+"ן",
              f2smS:"ת"+this.state.letter1+this.state.letter2+"ו"+"ן",
              f3smS: "י"+this.state.letter1+this.state.letter2+"ו"+"ן",
              f3swS: "ת"+this.state.letter1+this.state.letter2+"ו"+"ן",
              f1mS: "נ"+this.state.letter1+this.state.letter2+"ו"+"ן"
            });
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              infS: "ל"+this.state.letter1+this.state.letter2+"ו"+"ף",
              p3smS: this.state.letter1+this.state.letter2+"ף",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ף",
              ismS: this.state.letter1+this.state.letter2+"ו"+"ף",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ף",
              f1sS:"א"+this.state.letter1+this.state.letter2+"ו"+"ף",
              f2smS:"ת"+this.state.letter1+this.state.letter2+"ו"+"ף",
              f3smS: "י"+this.state.letter1+this.state.letter2+"ו"+"ף",
              f3swS: "ת"+this.state.letter1+this.state.letter2+"ו"+"ף",
              f1mS: "נ"+this.state.letter1+this.state.letter2+"ו"+"ף"
            });
          }
          if(this.state.letter3 == "צ"){
            this.setState({
              infS: "ל"+this.state.letter1+this.state.letter2+"ו"+"ץ",
              p3smS: this.state.letter1+this.state.letter2+"ץ",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ץ",
              ismS: this.state.letter1+this.state.letter2+"ו"+"ץ",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ץ",
              f1sS:"א"+this.state.letter1+this.state.letter2+"ו"+"ץ",
              f2smS:"ת"+this.state.letter1+this.state.letter2+"ו"+"ץ",
              f3smS: "י"+this.state.letter1+this.state.letter2+"ו"+"ץ",
              f3swS: "ת"+this.state.letter1+this.state.letter2+"ו"+"ץ",
              f1mS: "נ"+this.state.letter1+this.state.letter2+"ו"+"ץ"
            });
          }
        break 
        case 'פעל_סבב':
        if(this.state.letter1 == "פ" || this.state.letter1 == "ת"||this.state.letter1 == 'כ'||this.state.letter1 == 'ב'||this.state.letter1 == 'ת'){ 
          this.setState({
            p1s: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+this.state.letter3+"ְתִּי",
            p2sm: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+this.state.letter3+"ְתָּ",
            p2sw: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+this.state.letter3+"ְתְּ",
            p3sm: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+this.state.letter3,
            p3sw: this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"ָה",
            p1m: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+this.state.letter3+"ְנוּ",
            p2mm: this.state.letter1+"ְּ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּם",
            p2mw: this.state.letter1+"ְּ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּן",
            p3m: this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            nsm: this.state.letter1+"ּוֹ"+this.state.letter2+"ֵ"+this.state.letter3,
            nsw: this.state.letter1+"ּוֹ"+this.state.letter2+"ֶ"+this.state.letter3+"ֶת",
            nmm: this.state.letter1+"ּוֹ"+this.state.letter2+"ְ"+this.state.letter3+"ִים",
            nmw: this.state.letter1+"ּוֹ"+this.state.letter2+"ְ"+this.state.letter3+"וֹת",
            ism: this.state.letter1+"ֹּ"+this.state.letter3,
            isw: this.state.letter1+"ֹּ"+this.state.letter3+"ִי",
            imm: this.state.letter1+"ֹּ"+this.state.letter3+"וּ",
            imw: this.state.letter1+"ֹּ"+this.state.letter3+"ְנָה",
            ns: this.state.letter1+"ְּ"+this.state.letter2+"ִי"+this.state.letter3+"ָה",
            nm: this.state.letter1+"ְּ"+this.state.letter2+"ִי"+this.state.letter3+"וֹת",
            asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+this.state.letter3,
            asw: this.state.letter1+"ְּ"+this.state.letter2+"וּ"+this.state.letter3+"ָה",
            amm: this.state.letter1+"ְּ"+this.state.letter2+"וּ"+this.state.letter3+"ִים",
            amw: this.state.letter1+"ְּ"+this.state.letter2+"וּ"+this.state.letter3+"וֹת"
          });
          if (this.state.letter3 == "כ"){
            this.setState({
              p3sm: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+"ך", 
              nsm: this.state.letter1+"ּוֹ"+this.state.letter2+"ֵ"+"ך",
              ism: this.state.letter1+"ֹּ"+"ך", 
              asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+"ך"
            });
          }
          if (this.state.letter3 == "מ"){
            this.setState({
              p3sm: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+"ם", 
              nsm: this.state.letter1+"ּוֹ"+this.state.letter2+"ֵ"+"ם",
              ism: this.state.letter1+"ֹּ"+"ם", 
              asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+"ם"
            });
          } 
          if (this.state.letter3 == "נ"){
            this.setState({
              imw: this.state.letter1+"ֹּ"+"נָּה",
              p1m: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+"נּוּ",
              p3sm: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+"ן", 
              nsm: this.state.letter1+"ּוֹ"+this.state.letter2+"ֵ"+"ן",
              ism: this.state.letter1+"ֹּ"+"ן", 
              asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+"ו"
            });
          } 
          if (this.state.letter3 == "פ"){
            this.setState({
              p3sm: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+"ף", 
              nsm: this.state.letter1+"ּוֹ"+this.state.letter2+"ֵ"+"ף",
              ism: this.state.letter1+"ֹּ"+"ף", 
              asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+"ף"
            });
          }
          if (this.state.letter3 == "צ"){
            this.setState({
              p3sm: this.state.letter1+"ָּ"+this.state.letter2+"ַ"+"ץ", 
              nsm: this.state.letter1+"ּוֹ"+this.state.letter2+"ֵ"+"ץ",
              ism: this.state.letter1+"ֹּ"+"ץ", 
              asm: this.state.letter1+"ָּ"+this.state.letter2+"וּ"+"ץ"
            });
          }                                              
        }else{
          this.setState({
            p1s: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְתִּי",
            p2sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְתָּ",
            p2sw: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְתְּ",
            p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3,
            p3sw: this.state.letter1+"ָ"+this.state.letter2+"ְ"+this.state.letter3+"ָה",
            p1m: this.state.letter1+"ָ"+this.state.letter2+"ַ"+this.state.letter3+"ְנוּ",
            p2mm: this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּם",
            p2mw: this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּן",
            p3m: this.state.letter1+"ָ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֶ"+this.state.letter3,
            nsw: this.state.letter1+"וֹ"+this.state.letter2+"ֶ"+this.state.letter3+"ֶת",
            nmm: this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"ִים",
            nmw: this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"וֹת",
            ism: this.state.letter1+"ֹ"+this.state.letter3,
            isw: this.state.letter1+"ֹ"+this.state.letter3+"ִי",
            imm: this.state.letter1+"ֹ"+this.state.letter3+"וּ",
            imw: this.state.letter1+"ֹ"+this.state.letter3+"ְנָה",
            ns: this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3+"ָה",
            nm: this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3+"וֹת",
            asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+this.state.letter3,
            asw: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"ָה",
            amm: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"ִים",
            amw: this.state.letter1+"ְ"+this.state.letter2+"וּ"+this.state.letter3+"וֹת"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ך",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֶ"+"ך",
              ism: this.state.letter1+"ֹ"+"ך",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ך"
            });
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ם",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֶ"+"ם",
              ism: this.state.letter1+"ֹ"+"ם",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ם"
            });
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              imw: this.state.letter1+"ֹ"+"נָּה",
              p1m: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"נּוּ",
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ן",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֶ"+"ן",
              ism: this.state.letter1+"ֹ"+"ן",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ן"
            });
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ף",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֶ"+"ף",
              ism: this.state.letter1+"ֹ"+"ף",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ף"
            });
          }
          if(this.state.letter3 == "צ"){
            this.setState({
              p3sm: this.state.letter1+"ָ"+this.state.letter2+"ַ"+"ץ",
              nsm: this.state.letter1+"וֹ"+this.state.letter2+"ֶ"+"ץ",
              ism: this.state.letter1+"ֹ"+"ץ",
              asm: this.state.letter1+"ָ"+this.state.letter2+"וּ"+"ץ"
            });
          }
        }
        if(this.state.letter2 == 'פ'||this.state.letter2 == 'כ'||this.state.letter2 == 'ב'){
          this.setState({
            inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+this.state.letter3,
            f1s: "אָ"+this.state.letter1+"ֹ"+this.state.letter3,
            f2sm: "תָּ"+this.state.letter1+"ֹ"+this.state.letter3,
            f2sw: "תָּ"+this.state.letter1+"ֹ"+this.state.letter2+"ִּי",
            f3sm: "יָ"+this.state.letter1+"ֹ"+this.state.letter3,
            f3sw: "תָּ"+this.state.letter1+"ֹ"+this.state.letter3,
            f1m: "נָ"+this.state.letter1+"ֹ"+this.state.letter3,
            f2mm: "תָּ"+this.state.letter1+"ֹ"+this.state.letter2+"ּוּ",
            f2mw: "תָּ"+this.state.letter1+"ֹ"+this.state.letter3+"ְנָה",
            f3m: "יָ"+this.state.letter1+"ֹ"+this.state.letter2+"ּוּ"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ך",
              f1s: "אָ"+this.state.letter1+"ֹ"+"ך",
              f2sm: "תָּ"+this.state.letter1+"ֹ"+"ך",
              f3sm: "יָ"+this.state.letter1+"ֹ"+"ך",
              f3sw: "תָּּ"+this.state.letter1+"ֹ"+"ך",
              f1m: "נָ"+this.state.letter1+"ֹ"+"ך"
            });            
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ם",
              f1s: "אָ"+this.state.letter1+"ֹ"+"ם",
              f2sm: "תָּ"+this.state.letter1+"ֹ"+"ם",
              f3sm: "יָ"+this.state.letter1+"ֹ"+"ם",
              f3sw: "תָּּ"+this.state.letter1+"ֹ"+"ם",
              f1m: "נָ"+this.state.letter1+"ֹ"+"ם"
            });            
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              f2mw: "תָּ"+this.state.letter1+"ֹ"+"נָּה",
              inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ן",
              f1s: "אָ"+this.state.letter1+"ֹ"+"ן",
              f2sm: "תָּ"+this.state.letter1+"ֹ"+"ן",
              f3sm: "יָ"+this.state.letter1+"ֹ"+"ן",
              f3sw: "תָּּ"+this.state.letter1+"ֹ"+"ן",
              f1m: "נָ"+this.state.letter1+"ֹ"+"ן"
            });            
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ף",
              f1s: "אָ"+this.state.letter1+"ֹ"+"ף",
              f2sm: "תָּ"+this.state.letter1+"ֹ"+"ף",
              f3sm: "יָ"+this.state.letter1+"ֹ"+"ף",
              f3sw: "תָּּ"+this.state.letter1+"ֹ"+"ף",
              f1m: "נָ"+this.state.letter1+"ֹ"+"ף"
            });            
          } 
          if(this.state.letter3 == "צ"){
            this.setState({
              inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹּ"+"ץ",
              f1s: "אָ"+this.state.letter1+"ֹ"+"ץ",
              f2sm: "תָּ"+this.state.letter1+"ֹ"+"ץ",
              f3sm: "יָ"+this.state.letter1+"ֹ"+"ץ",
              f3sw: "תָּּ"+this.state.letter1+"ֹ"+"ץ",
              f1m: "נָ"+this.state.letter1+"ֹ"+"ץ"
            });            
          } 
        }else{
          this.setState({
            inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+this.state.letter3,
            f1s: "אָ"+this.state.letter1+"ֹ"+this.state.letter3,
            f2sm: "תָּ"+this.state.letter1+"ֹ"+this.state.letter3,
            f2sw: "תָּ"+this.state.letter1+"ֹ"+this.state.letter3+"ִי",
            f3sm: "יָ"+this.state.letter1+"ֹ"+this.state.letter3,
            f3sw: "תָּ"+this.state.letter1+"ֹ"+this.state.letter3,
            f1m: "נָ"+this.state.letter1+"ֹ"+this.state.letter3,
            f2mm: "תָּ"+this.state.letter1+"ֹ"+this.state.letter3+"וּ",
            f2mw: "תָּ"+this.state.letter1+"ֹ"+this.state.letter3+"ְנָה",
            f3m: "יָ"+this.state.letter1+"ֹ"+this.state.letter3+"וּ"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ך",
              f1s: "אָ"+this.state.letter1+"ֹ"+"ך",
              f2sm: "תָּ"+this.state.letter1+"ֹ"+"ך",
              f3sm: "יָ"+this.state.letter1+"ֹ"+"ך",
              f3sw: "תָּ"+this.state.letter1+"ֹ"+"ך",
              f1m: "נָ"+this.state.letter1+"ֹ"+"ך"
            });            
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ם",
              f1s: "אָ"+this.state.letter1+"ֹ"+"ם",
              f2sm: "תָּ"+this.state.letter1+"ֹ"+"ם",
              f3sm: "יָ"+this.state.letter1+"ֹ"+"ם",
              f3sw: "תָּ"+this.state.letter1+"ֹ"+"ם",
              f1m: "נָ"+this.state.letter1+"ֹ"+"ם"
            });           
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              f2mw: "תָּ"+this.state.letter1+"ֹ"+"נָּה",
              inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ן",
              f1s: "אָ"+this.state.letter1+"ֹ"+"ן",
              f2sm: "תָּ"+this.state.letter1+"ֹ"+"ן",
              f3sm: "יָ"+this.state.letter1+"ֹ"+"ן",
              f3sw: "תָּ"+this.state.letter1+"ֹ"+"ן",
              f1m: "נָ"+this.state.letter1+"ֹ"+"ן"
            });            
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ף",
              f1s: "אָ"+this.state.letter1+"ֹ"+"ף",
              f2sm: "תָּ"+this.state.letter1+"ֹ"+"ף",
              f3sm: "יָ"+this.state.letter1+"ֹ"+"ף",
              f3sw: "תָּ"+this.state.letter1+"ֹ"+"ף",
              f1m: "נָ"+this.state.letter1+"ֹ"+"ף"
            });            
          } 
          if(this.state.letter3 == "צ"){
            this.setState({
              inf: "לִ"+this.state.letter1+"ְ"+this.state.letter2+"ֹ"+"ץ",
              f1s: "אָ"+this.state.letter1+"ֹ"+"ץ",
              f2sm: "תָּ"+this.state.letter1+"ֹ"+"ץ",
              f3sm: "יָ"+this.state.letter1+"ֹ"+"ץ",
              f3sw: "תָּ"+this.state.letter1+"ֹ"+"ץ",
              f1m: "נָ"+this.state.letter1+"ֹ"+"ץ"
            });            
          }                                       
        }
          this.setState({
            infS: "ל"+this.state.letter1+this.state.letter2+"ו"+this.state.letter3,  
            p1sS: this.state.letter1+this.state.letter2+this.state.letter3+"תי",
            p2smS: this.state.letter1+this.state.letter2+this.state.letter3+"ת",
            p2swS: this.state.letter1+this.state.letter2+this.state.letter3+"ת",
            p3smS: this.state.letter1+this.state.letter2+this.state.letter3,
            p3swS: this.state.letter1+this.state.letter2+this.state.letter3+"ה",
            p1mS: this.state.letter1+this.state.letter2+this.state.letter3+"נו",
            p2mmS: this.state.letter1+this.state.letter2+this.state.letter3+"תם",
            p2mwS: this.state.letter1+this.state.letter2+this.state.letter3+"תן",
            p3mS: this.state.letter1+this.state.letter2+this.state.letter3+"ו",
            nsmS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
            nswS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
            nmmS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ים",
            nmwS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ות",
            ismS: this.state.letter1+"ו"+this.state.letter3,
            iswS: this.state.letter1+"ו"+this.state.letter3+"י",
            immS: this.state.letter1+"ו"+this.state.letter3+"ו",
            imwS: this.state.letter1+"ו"+this.state.letter3+"נה",
            nsS: this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ה",
            nmS: this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ות",
            asmS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3,
            aswS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ה",
            ammS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ים",
            amwS: this.state.letter1+this.state.letter2+"ו"+this.state.letter3+"ות",
            f1sS:"א"+this.state.letter1+"ו"+this.state.letter3,
            f2smS:"ת"+this.state.letter1+"ו"+this.state.letter3,
            f2swS: "ת"+this.state.letter1+"ו"+this.state.letter3+"י",
            f3smS: "י"+this.state.letter1+"ו"+this.state.letter3,
            f3swS: "ת"+this.state.letter1+"ו"+this.state.letter3,
            f1mS: "נ"+this.state.letter1+"ו"+this.state.letter3,
            f2mmS: "ת"+this.state.letter1+"ו"+this.state.letter3+"ו",
            f2mwS: "ת"+this.state.letter1+"ו"+this.state.letter3+"נה",
            f3mS: "י"+this.state.letter1+"ן"+this.state.letter3+"ו"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              infS: "ל"+this.state.letter1+this.state.letter2+"ו"+"ך",
              p3smS: this.state.letter1+this.state.letter2+"ך",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ך",
              ismS: this.state.letter1+"ו"+"ך",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ך",
              f1sS:"א"+this.state.letter1+"ו"+"ך",
              f2smS:"ת"+this.state.letter1+"ו"+"ך",
              f3smS: "י"+this.state.letter1+"ו"+"ך",
              f3swS: "ת"+this.state.letter1+"ו"+"ך",
              f1mS: "נ"+this.state.letter1+"ו"+"ך"
            });
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              infS: "ל"+this.state.letter1+this.state.letter2+"ו"+"ם",
              p3smS: this.state.letter1+this.state.letter2+"ם",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ם",
              ismS: this.state.letter1+"ו"+"ם",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ם",
              f1sS:"א"+this.state.letter1+"ו"+"ם",
              f2smS:"ת"+this.state.letter1+"ו"+"ם",
              f3smS: "י"+this.state.letter1+"ו"+"ם",
              f3swS: "ת"+this.state.letter1+"ו"+"ם",
              f1mS: "נ"+this.state.letter1+"ו"+"ם"
            });
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              f2mwS: "ת"+this.state.letter1+"ו"+"נה",
              imwS: this.state.letter1+"ו"+"נה",
              p1mS: this.state.letter1+this.state.letter2+"נו",
              infS: "ל"+this.state.letter1+this.state.letter2+"ו"+"ן",
              p3smS: this.state.letter1+this.state.letter2+"ן",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ן",
              ismS: this.state.letter1+"ו"+"ן",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ן",
              f1sS:"א"+this.state.letter1+"ו"+"ן",
              f2smS:"ת"+this.state.letter1+"ו"+"ן",
              f3smS: "י"+this.state.letter1+"ו"+"ן",
              f3swS: "ת"+this.state.letter1+"ו"+"ן",
              f1mS: "נ"+this.state.letter1+"ו"+"ן"
            });
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              infS: "ל"+this.state.letter1+this.state.letter2+"ו"+"ף",
              p3smS: this.state.letter1+this.state.letter2+"ף",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ף",
              ismS: this.state.letter1+"ו"+"ף",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ף",
              f1sS:"א"+this.state.letter1+"ו"+"ף",
              f2smS:"ת"+this.state.letter1+"ו"+"ף",
              f3smS: "י"+this.state.letter1+"ו"+"ף",
              f3swS: "ת"+this.state.letter1+"ו"+"ף",
              f1mS: "נ"+this.state.letter1+"ו"+"ף"
            });
          }
          if(this.state.letter3 == "צ"){
            this.setState({
              infS: "ל"+this.state.letter1+this.state.letter2+"ו"+"ץ",
              p3smS: this.state.letter1+this.state.letter2+"ץ",
              nsmS: this.state.letter1+"ו"+this.state.letter2+"ץ",
              ismS: this.state.letter1+"ו"+"ץ",
              asmS: this.state.letter1+this.state.letter2+"ו"+"ץ",
              f1sS:"א"+this.state.letter1+"ו"+"ץ",
              f2smS:"ת"+this.state.letter1+"ו"+"ץ",
              f3smS: "י"+this.state.letter1+"ו"+"ץ",
              f3swS: "ת"+this.state.letter1+"ו"+"ץ",
              f1mS: "נ"+this.state.letter1+"ו"+"ץ"
            });
          }
        break
        case 'נפעל_נכנס':
          this.setState({
            inf: "לְהִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
            f1s: "אֶ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
            f2sm: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
            f2sw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
            f3sm: "יִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
            f3sw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
            f1m: "נִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
            f2mm: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            f2mw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3+"ְנָה",
            f3m: "יִ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            ism: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
            isw: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
            imm: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            imw: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3+"ְנָה",
            ns: this.state.letter1+"ְּ"+this.state.letter2+"ִי"+this.state.letter3+"ָה",
            nm: this.state.letter1+"ְּ"+this.state.letter2+"ִי"+this.state.letter3+"וֹת"
          });
          if (this.state.letter3 == "כ"){
            this.setState({
              inf: "לְהִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
              f1s: "אֶ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
              f2sm: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
              f3sm: "יִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
              f3sw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
              f1m: "נִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
              ism: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך"
            });
          }
          if (this.state.letter3 == "מ"){
            this.setState({
              inf: "לְהִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
              f1s: "אֶ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
              f2sm: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
              f3sm: "יִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
              f3sw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
              f1m: "נִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
              ism: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם"
            });
          } 
          if (this.state.letter3 == "נ"){
            this.setState({
              imw: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"נָּה",
              f2mw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"נָּה",
              inf: "לְהִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
              f1s: "אֶ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
              f2sm: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
              f3sm: "יִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
              f3sw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
              f1m: "נִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
              ism: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן"
            });
          } 
          if (this.state.letter3 == "פ"){
            this.setState({
              inf: "לְהִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
              f1s: "אֶ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
              f2sm: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
              f3sm: "יִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
              f3sw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
              f1m: "נִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
              ism: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף"
            }); 
          }
          if (this.state.letter3 == "צ"){
            this.setState({
              inf: "לְהִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
              f1s: "אֶ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
              f2sm: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
              f3sm: "יִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
              f3sw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
              f1m: "נִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
              ism: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ"
            }); 
          }                                              

        if(this.state.letter2 == 'פ'||this.state.letter2 == 'כ'||this.state.letter2 == 'ב'){
          this.setState({
            p1s: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתִּי",
            p2sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתָּ",
            p2sw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתְּ",
            p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3,
            p3sw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ְּ"+this.state.letter3+"ָה",
            p1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנוּ",
            p2mm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּם",
            p2mw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּן",
            p3m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
            nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+this.state.letter3,
            nsw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֶּ"+this.state.letter3+"ֶת",
            nmm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+this.state.letter3+"ִים",
            nmw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+this.state.letter3+"וֹת"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ך",
              nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+"ך"
            });            
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ם",
              nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+"ם"
            });           
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              p1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"נּוּ",
              p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ן",
              nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+"ן"
            });            
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ף",
              nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+"ף"
            });            
          } 
          if(this.state.letter3 == "צ"){
            this.setState({
              p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ץ",
              nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+"ץ"
            });           
          } 
        }else{
          this.setState({
            p1s: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתִּי",
            p2sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתָּ",
            p2sw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתְּ",
            p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3,
            p3sw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ְ"+this.state.letter3+"ָה",
            p1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְנוּ",
            p2mm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּם",
            p2mw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּן",
            p3m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3,
            nsw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֶ"+this.state.letter3+"ֶת",
            nmm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3+"ִים",
            nmw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3+"וֹת"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ך",
              nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+"ך"              
              });            
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ם",
              nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+"ם"
            });
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              p1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"נּוּ",
              p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ן",
              nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+"ן"
            });            
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ף",
              nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+"ף"
            });         
          } 
          if(this.state.letter3 == "צ"){
            this.setState({
              p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ץ",
              nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+"ץ"
            });            
          }                                       
        }
          this.setState({
            infS:"להי"+this.state.letter1+this.state.letter2+this.state.letter3,
            p1sS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"תי",
            p2smS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
            p2swS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
            p3smS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3,
            p3swS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ה",
            p1mS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"נו",
            p2mmS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"תם",
            p2mwS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"תן",
            p3mS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
            nsmS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3,
            nswS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
            nmmS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ים",
            nmwS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ות",
            f1sS:"אי"+this.state.letter1+this.state.letter2+this.state.letter3,
            f2smS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3,
            f2swS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3+"י",
            f3smS:"יי"+this.state.letter1+this.state.letter2+this.state.letter3,
            f3swS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3,
            f1mS:"ני"+this.state.letter1+this.state.letter2+this.state.letter3,
            f2mmS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
            f2mwS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3+"נה",
            f3mS:"יי"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
            ismS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3,
            iswS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3+"י",
            immS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
            imwS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3+"נה",
            nsS:this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ה",
            nmS:this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ות"
          });  
          if(this.state.letter3 == "כ"){
            this.setState({
              infS:"להי"+this.state.letter1+this.state.letter2+"ך",
              p3smS:"נ"+this.state.letter1+this.state.letter2+"ך",
              nsmS:"נ"+this.state.letter1+this.state.letter2+"ך",
              f1sS:"אי"+this.state.letter1+this.state.letter2+"ך",
              f2smS:"תי"+this.state.letter1+this.state.letter2+"ך",
              f3smS:"יי"+this.state.letter1+this.state.letter2+"ך",
              f3swS:"תי"+this.state.letter1+this.state.letter2+"ך",
              f1mS:"ני"+this.state.letter1+this.state.letter2+"ך",
              ismS:"הי"+this.state.letter1+this.state.letter2+"ך"
            });
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              infS:"להי"+this.state.letter1+this.state.letter2+"ם",
              p3smS:"נ"+this.state.letter1+this.state.letter2+"ם",
              nsmS:"נ"+this.state.letter1+this.state.letter2+"ם",
              f1sS:"אי"+this.state.letter1+this.state.letter2+"ם",
              f2smS:"תי"+this.state.letter1+this.state.letter2+"ם",
              f3smS:"יי"+this.state.letter1+this.state.letter2+"ם",
              f3swS:"תי"+this.state.letter1+this.state.letter2+"ם",
              f1mS:"ני"+this.state.letter1+this.state.letter2+"ם",
              ismS:"הי"+this.state.letter1+this.state.letter2+"ם"
            });
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              imwS:"הי"+this.state.letter1+this.state.letter2+"נה",
              f2mwS:"תי"+this.state.letter1+this.state.letter2+"נה",
              p1mS:"נ"+this.state.letter1+this.state.letter2+"נו",
              infS:"להי"+this.state.letter1+this.state.letter2+"ן",
              p3smS:"נ"+this.state.letter1+this.state.letter2+"ן",
              nsmS:"נ"+this.state.letter1+this.state.letter2+"ן",
              f1sS:"אי"+this.state.letter1+this.state.letter2+"ן",
              f2smS:"תי"+this.state.letter1+this.state.letter2+"ן",
              f3smS:"יי"+this.state.letter1+this.state.letter2+"ן",
              f3swS:"תי"+this.state.letter1+this.state.letter2+"ן",
              f1mS:"ני"+this.state.letter1+this.state.letter2+"ן",
              ismS:"הי"+this.state.letter1+this.state.letter2+"ן"
            });
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              infS:"להי"+this.state.letter1+this.state.letter2+"ף",
              p3smS:"נ"+this.state.letter1+this.state.letter2+"ף",
              nsmS:"נ"+this.state.letter1+this.state.letter2+"ף",
              f1sS:"אי"+this.state.letter1+this.state.letter2+"ף",
              f2smS:"תי"+this.state.letter1+this.state.letter2+"ף",
              f3smS:"יי"+this.state.letter1+this.state.letter2+"ף",
              f3swS:"תי"+this.state.letter1+this.state.letter2+"ף",
              f1mS:"ני"+this.state.letter1+this.state.letter2+"ף",
              ismS:"הי"+this.state.letter1+this.state.letter2+"ף"
            });
          }
          if(this.state.letter3 == "צ"){
            this.setState({
              infS:"להי"+this.state.letter1+this.state.letter2+"ץ",
              p3smS:"נ"+this.state.letter1+this.state.letter2+"ץ",
              nsmS:"נ"+this.state.letter1+this.state.letter2+"ץ",
              f1sS:"אי"+this.state.letter1+this.state.letter2+"ץ",
              f2smS:"תי"+this.state.letter1+this.state.letter2+"ץ",
              f3smS:"יי"+this.state.letter1+this.state.letter2+"ץ",
              f3swS:"תי"+this.state.letter1+this.state.letter2+"ץ",
              f1mS:"ני"+this.state.letter1+this.state.letter2+"ץ",
              ismS:"הי"+this.state.letter1+this.state.letter2+"ץ"
            });
          }
        break    
        case 'נפעל_נשאר':

          this.setState({
            inf: "לְהִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
            f1s: "אֶ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
            f2sm: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
            f2sw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֲ"+this.state.letter3+"ִי",
            f3sm: "יִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
            f3sw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
            f1m: "נִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
            f2mm: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֲ"+this.state.letter3+"וּ",
            f2mw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3+"ְנָה",
            f3m: "יִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֲ"+this.state.letter3+"וּ",
            ism: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
            isw: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֲ"+this.state.letter3+"ִי",
            imm: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֲ"+this.state.letter3+"וּ",
            imw: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3+"ְנָה",
            ns: this.state.letter1+"ְּ"+this.state.letter2+"ִי"+this.state.letter3+"ָה",
            nm: this.state.letter1+"ְּ"+this.state.letter2+"ִי"+this.state.letter3+"וֹת"
          });
          if (this.state.letter3 == "כ"){
            this.setState({
              inf: "לְהִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
              f1s: "אֶ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
              f2sm: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
              f3sm: "יִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
              f3sw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
              f1m: "נִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
              ism: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך"
            });
          }
          if (this.state.letter3 == "מ"){
            this.setState({
              inf: "לְהִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
              f1s: "אֶ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
              f2sm: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
              f3sm: "יִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
              f3sw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
              f1m: "נִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
              ism: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם"
            });
          } 
          if (this.state.letter3 == "נ"){
            this.setState({
              imw: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"נָּה",
              f2mw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"נָּה",
              inf: "לְהִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
              f1s: "אֶ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
              f2sm: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
              f3sm: "יִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
              f3sw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
              f1m: "נִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
              ism: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן"
            });
          } 
          if (this.state.letter3 == "פ"){
            this.setState({
              inf: "לְהִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
              f1s: "אֶ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
              f2sm: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
              f3sm: "יִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
              f3sw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
              f1m: "נִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
              ism: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף"
            }); 
          }
          if (this.state.letter3 == "צ"){
            this.setState({
              inf: "לְהִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
              f1s: "אֶ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
              f2sm: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
              f3sm: "יִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
              f3sw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
              f1m: "נִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
              ism: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ"
            }); 
          }                                              

        if(this.state.letter2 == 'פ'||this.state.letter2 == 'כ'||this.state.letter2 == 'ב'){
          this.setState({
            p1s: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתִּי",
            p2sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתָּ",
            p2sw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתְּ",
            p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3,
            p3sw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֲּ"+this.state.letter3+"ָה",
            p1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנוּ",
            p2mm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּם",
            p2mw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּן",
            p3m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֲּ"+this.state.letter3+"וּ",
            nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+this.state.letter3,
            nsw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֶּ"+this.state.letter3+"ֶת",
            nmm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+this.state.letter3+"ִים",
            nmw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+this.state.letter3+"וֹת"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ך",
              nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+"ך"
            });            
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ם",
              nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+"ם"
            });           
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              p1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"נּוּ",
              p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ן",
              nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+"ן"
            });            
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ף",
              nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+"ף"
            });            
          } 
          if(this.state.letter3 == "צ"){
            this.setState({
              p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ץ",
              nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+"ץ"
            });           
          } 
        }else{
          this.setState({
            p1s: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתִּי",
            p2sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתָּ",
            p2sw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתְּ",
            p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3,
            p3sw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֲ"+this.state.letter3+"ָה",
            p1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְנוּ",
            p2mm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּם",
            p2mw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּן",
            p3m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֲ"+this.state.letter3+"וּ",
            nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3,
            nsw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֶ"+this.state.letter3+"ֶת",
            nmm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3+"ִים",
            nmw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3+"וֹת"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ך",
              nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+"ך"              
              });            
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ם",
              nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+"ם"
            });
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              p1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"נּוּ",
              p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ן",
              nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+"ן"
            });            
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ף",
              nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+"ף"
            });         
          } 
          if(this.state.letter3 == "צ"){
            this.setState({
              p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ץ",
              nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+"ץ"
            });            
          }                                       
        }
          this.setState({
            infS:"להי"+this.state.letter1+this.state.letter2+this.state.letter3,
            p1sS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"תי",
            p2smS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
            p2swS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
            p3smS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3,
            p3swS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ה",
            p1mS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"נו",
            p2mmS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"תם",
            p2mwS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"תן",
            p3mS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
            nsmS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3,
            nswS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
            nmmS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ים",
            nmwS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ות",
            f1sS:"אי"+this.state.letter1+this.state.letter2+this.state.letter3,
            f2smS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3,
            f2swS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3+"י",
            f3smS:"יי"+this.state.letter1+this.state.letter2+this.state.letter3,
            f3swS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3,
            f1mS:"ני"+this.state.letter1+this.state.letter2+this.state.letter3,
            f2mmS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
            f2mwS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3+"נה",
            f3mS:"יי"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
            ismS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3,
            iswS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3+"י",
            immS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
            imwS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3+"נה",
            nsS:this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ה",
            nmS:this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ות"
          });  
          if(this.state.letter3 == "כ"){
            this.setState({
              infS:"להי"+this.state.letter1+this.state.letter2+"ך",
              p3smS:"נ"+this.state.letter1+this.state.letter2+"ך",
              nsmS:"נ"+this.state.letter1+this.state.letter2+"ך",
              f1sS:"אי"+this.state.letter1+this.state.letter2+"ך",
              f2smS:"תי"+this.state.letter1+this.state.letter2+"ך",
              f3smS:"יי"+this.state.letter1+this.state.letter2+"ך",
              f3swS:"תי"+this.state.letter1+this.state.letter2+"ך",
              f1mS:"ני"+this.state.letter1+this.state.letter2+"ך",
              ismS:"הי"+this.state.letter1+this.state.letter2+"ך"
            });
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              infS:"להי"+this.state.letter1+this.state.letter2+"ם",
              p3smS:"נ"+this.state.letter1+this.state.letter2+"ם",
              nsmS:"נ"+this.state.letter1+this.state.letter2+"ם",
              f1sS:"אי"+this.state.letter1+this.state.letter2+"ם",
              f2smS:"תי"+this.state.letter1+this.state.letter2+"ם",
              f3smS:"יי"+this.state.letter1+this.state.letter2+"ם",
              f3swS:"תי"+this.state.letter1+this.state.letter2+"ם",
              f1mS:"ני"+this.state.letter1+this.state.letter2+"ם",
              ismS:"הי"+this.state.letter1+this.state.letter2+"ם"
            });
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              imwS:"הי"+this.state.letter1+this.state.letter2+"נה",
              f2mwS:"תי"+this.state.letter1+this.state.letter2+"נה",
              p1mS:"נ"+this.state.letter1+this.state.letter2+"נו",
              infS:"להי"+this.state.letter1+this.state.letter2+"ן",
              p3smS:"נ"+this.state.letter1+this.state.letter2+"ן",
              nsmS:"נ"+this.state.letter1+this.state.letter2+"ן",
              f1sS:"אי"+this.state.letter1+this.state.letter2+"ן",
              f2smS:"תי"+this.state.letter1+this.state.letter2+"ן",
              f3smS:"יי"+this.state.letter1+this.state.letter2+"ן",
              f3swS:"תי"+this.state.letter1+this.state.letter2+"ן",
              f1mS:"ני"+this.state.letter1+this.state.letter2+"ן",
              ismS:"הי"+this.state.letter1+this.state.letter2+"ן"
            });
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              infS:"להי"+this.state.letter1+this.state.letter2+"ף",
              p3smS:"נ"+this.state.letter1+this.state.letter2+"ף",
              nsmS:"נ"+this.state.letter1+this.state.letter2+"ף",
              f1sS:"אי"+this.state.letter1+this.state.letter2+"ף",
              f2smS:"תי"+this.state.letter1+this.state.letter2+"ף",
              f3smS:"יי"+this.state.letter1+this.state.letter2+"ף",
              f3swS:"תי"+this.state.letter1+this.state.letter2+"ף",
              f1mS:"ני"+this.state.letter1+this.state.letter2+"ף",
              ismS:"הי"+this.state.letter1+this.state.letter2+"ף"
            });
          }
          if(this.state.letter3 == "צ"){
            this.setState({
              infS:"להי"+this.state.letter1+this.state.letter2+"ץ",
              p3smS:"נ"+this.state.letter1+this.state.letter2+"ץ",
              nsmS:"נ"+this.state.letter1+this.state.letter2+"ץ",
              f1sS:"אי"+this.state.letter1+this.state.letter2+"ץ",
              f2smS:"תי"+this.state.letter1+this.state.letter2+"ץ",
              f3smS:"יי"+this.state.letter1+this.state.letter2+"ץ",
              f3swS:"תי"+this.state.letter1+this.state.letter2+"ץ",
              f1mS:"ני"+this.state.letter1+this.state.letter2+"ץ",
              ismS:"הי"+this.state.letter1+this.state.letter2+"ץ"
            });
          }
        break 
        case 'נפעל_נרגע':
          this.setState({
            inf: "לְהֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ַ"+this.state.letter3,
            f1s: "אֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ַ"+this.state.letter3,
            f2sm: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ַ"+this.state.letter3,
            f2sw: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
            f3sm: "יֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ַ"+this.state.letter3,
            f3sw: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ַ"+this.state.letter3,
            f1m: "נֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ַ"+this.state.letter3,
            f2mm: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            f2mw: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ַ"+this.state.letter3+"ְנָה",
            f3m: "יֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            ism: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ַ"+this.state.letter3,
            isw: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
            imm: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            imw: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ַ"+this.state.letter3+"ְנָה",
            ns: this.state.letter1+"ְּ"+this.state.letter2+"ִי"+this.state.letter3+"ָה",
            nm: this.state.letter1+"ְּ"+this.state.letter2+"ִי"+this.state.letter3+"וֹת"
          });                                             


        if(this.state.letter2 == 'פ'||this.state.letter2 == 'כ'||this.state.letter2 == 'ב'){
          this.setState({
            p1s: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתִּי",
            p2sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתָּ",
            p2sw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתְּ",
            p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3,
            p3sw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ְּ"+this.state.letter3+"ָה",
            p1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנוּ",
            p2mm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּם",
            p2mw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּן",
            p3m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
            nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+this.state.letter3,
            nsw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ַת",
            nmm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+this.state.letter3+"ִים",
            nmw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+this.state.letter3+"וֹת"
          });
        }else{
          this.setState({
            p1s: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתִּי",
            p2sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתָּ",
            p2sw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתְּ",
            p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3,
            p3sw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ְ"+this.state.letter3+"ָה",
            p1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְנוּ",
            p2mm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּם",
            p2mw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּן",
            p3m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3,
            nsw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ַת",
            nmm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3+"ִים",
            nmw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3+"וֹת"
          });                                     
        }
          this.setState({
            infS:"להי"+this.state.letter1+this.state.letter2+this.state.letter3,
            p1sS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"תי",
            p2smS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
            p2swS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
            p3smS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3,
            p3swS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ה",
            p1mS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"נו",
            p2mmS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"תם",
            p2mwS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"תן",
            p3mS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
            nsmS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3,
            nswS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
            nmmS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ים",
            nmwS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ות",
            f1sS:"אי"+this.state.letter1+this.state.letter2+this.state.letter3,
            f2smS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3,
            f2swS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3+"י",
            f3smS:"יי"+this.state.letter1+this.state.letter2+this.state.letter3,
            f3swS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3,
            f1mS:"ני"+this.state.letter1+this.state.letter2+this.state.letter3,
            f2mmS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
            f2mwS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3+"נה",
            f3mS:"יי"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
            ismS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3,
            iswS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3+"י",
            immS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
            imwS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3+"נה",
            nsS:this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ה",
            nmS:this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ות"
          });         
        break
        case 'נפעל_נולד':       
          this.setState({
            inf: "לְהִ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
            f1s: "אֶ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
            f2sm: "תִּ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
            f2sw: "תִּ"+"ו"+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
            f3sm: "יִ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
            f3sw: "תִּ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
            f1m: "נִ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
            f2mm: "תִּ"+"ו"+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            f2mw: "תִּ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3+"ְנָה",
            f3m: "יִ"+"ו"+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            ism: "הִ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
            isw: "הִ"+"ו"+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
            imm: "הִ"+"ו"+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            imw: "הִ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3+"ְנָה",
            ns: "הִוָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּת"
            
          });
          if (this.state.letter3 == "כ"){
            this.setState({
              inf: "לְהִ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ך",
              f1s: "אֶ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ך",
              f2sm: "תִּ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ך",
              f3sm: "יִ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ך",
              f3sw: "תִּ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ך",
              f1m: "נִ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ך",
              ism: "הִ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ך"
            });
          }
          if (this.state.letter3 == "מ"){
            this.setState({
              inf: "לְהִ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ם",
              f1s: "אֶ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ם",
              f2sm: "תִּ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ם",
              f3sm: "יִ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ם",
              f3sw: "תִּ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ם",
              f1m: "נִ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ם",
              ism: "הִ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ם"
            });
          } 
          if (this.state.letter3 == "נ"){
            this.setState({
              imw: "הִ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"נָּה",
              f2mw: "תִּ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"נָּה",
              inf: "לְהִ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ן",
              f1s: "אֶ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ן",
              f2sm: "תִּ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ן",
              f3sm: "יִ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ן",
              f3sw: "תִּ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ן",
              f1m: "נִ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ן",
              ism: "הִ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ן"
            });
          } 
          if (this.state.letter3 == "פ"){
            this.setState({
              inf: "לְהִ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ף",
              f1s: "אֶ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ף",
              f2sm: "תִּ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ף",
              f3sm: "יִ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ף",
              f3sw: "תִּ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ף",
              f1m: "נִ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ף",
              ism: "הִ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ף"
            }); 
          }
          if (this.state.letter3 == "צ"){
            this.setState({
              inf: "לְהִ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ץ",
              f1s: "אֶ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ץ",
              f2sm: "תִּ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ץ",
              f3sm: "יִ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ץ",
              f3sw: "תִּ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ץ",
              f1m: "נִ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ץ",
              ism: "הִ"+"ו"+"ָּ"+this.state.letter2+"ֵ"+"ץ"
            }); 
          }                                              

        if(this.state.letter2 == 'פ'||this.state.letter2 == 'כ'||this.state.letter2 == 'ב'){
          this.setState({
            p1s: "נוֹ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתִּי",
            p2sm: "נוֹ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתָּ",
            p2sw: "נוֹ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתְּ",
            p3sm: "נוֹ"+this.state.letter2+"ַּ"+this.state.letter3,
            p3sw: "נוֹ"+this.state.letter2+"ְּ"+this.state.letter3+"ָה",
            p1m: "נוֹ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנוּ",
            p2mm: "נוֹ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּם",
            p2mw: "נוֹ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּן",
            p3m: "נוֹ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
            nsm: "נוֹ"+this.state.letter2+"ָּ"+this.state.letter3,
            nsw: "נוֹ"+this.state.letter2+"ֶּ"+this.state.letter3+"ֶת",
            nmm: "נוֹ"+this.state.letter2+"ָּ"+this.state.letter3+"ִים",
            nmw: "נוֹ"+this.state.letter2+"ָּ"+this.state.letter3+"וֹת"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              p3sm: "נוֹ"+this.state.letter2+"ַּ"+"ך",
              nsm: "נוֹ"+this.state.letter2+"ָּ"+"ך"
            });            
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              p3sm: "נוֹ"+this.state.letter2+"ַּ"+"ם",
              nsm: "נוֹ"+this.state.letter2+"ָּ"+"ם"
            });           
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              p1m: "נוֹ"+this.state.letter2+"ַּ"+"נּוּ",
              p3sm: "נוֹ"+this.state.letter2+"ַּ"+"ן",
              nsm: "נוֹ"+this.state.letter2+"ָּ"+"ן"
            });            
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              p3sm: "נוֹ"+this.state.letter2+"ַּ"+"ף",
              nsm: "נוֹ"+this.state.letter2+"ָּ"+"ף"
            });            
          } 
          if(this.state.letter3 == "צ"){
            this.setState({
              p3sm: "נוֹ"+this.state.letter2+"ַּ"+"ץ",
              nsm: "נוֹ"+this.state.letter2+"ָּ"+"ץ"
            });           
          } 
        }else{
          this.setState({
            p1s: "נוֹ"+this.state.letter2+"ַ"+this.state.letter3+"ְתִּי",
            p2sm: "נוֹ"+this.state.letter2+"ַ"+this.state.letter3+"ְתָּ",
            p2sw: "נוֹ"+this.state.letter2+"ַ"+this.state.letter3+"ְתְּ",
            p3sm: "נוֹ"+this.state.letter2+"ַ"+this.state.letter3,
            p3sw: "נוֹ"+this.state.letter2+"ְ"+this.state.letter3+"ָה",
            p1m: "נוֹ"+this.state.letter2+"ַ"+this.state.letter3+"ְנוּ",
            p2mm: "נוֹ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּם",
            p2mw: "נוֹ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּן",
            p3m: "נוֹ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
            nsm: "נוֹ"+this.state.letter2+"ָ"+this.state.letter3,
            nsw: "נוֹ"+this.state.letter2+"ֶ"+this.state.letter3+"ֶת",
            nmm: "נוֹ"+this.state.letter2+"ָ"+this.state.letter3+"ִים",
            nmw: "נוֹ"+this.state.letter2+"ָ"+this.state.letter3+"וֹת"
          });
          if(this.state.letter3 == "כ"){
            this.setState({
              p3sm: "נוֹ"+this.state.letter2+"ַ"+"ך",
              nsm: "נוֹ"+this.state.letter2+"ָ"+"ך"              
              });            
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              p3sm: "נוֹ"+this.state.letter2+"ַ"+"ם",
              nsm: "נוֹ"+this.state.letter2+"ָ"+"ם"
            });
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              p1m: "נוֹ"+this.state.letter2+"ַ"+"נּוּ",
              p3sm: "נוֹ"+this.state.letter2+"ַ"+"ן",
              nsm: "נוֹ"+this.state.letter2+"ָ"+"ן"
            });            
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              p3sm: "נוֹ"+this.state.letter2+"ַ"+"ף",
              nsm: "נוֹ"+this.state.letter2+"ָ"+"ף"
            });         
          } 
          if(this.state.letter3 == "צ"){
            this.setState({
              p3sm: "נוֹ"+this.state.letter2+"ַ"+"ץ",
              nsm: "נוֹ"+this.state.letter2+"ָ"+"ץ"
            });            
          }                                       
        }
          this.setState({
            infS:"להיוו"+this.state.letter2+this.state.letter3,
            p1sS:"נ"+"ו"+this.state.letter2+this.state.letter3+"תי",
            p2smS:"נ"+"ו"+this.state.letter2+this.state.letter3+"ת",
            p2swS:"נ"+"ו"+this.state.letter2+this.state.letter3+"ת",
            p3smS:"נ"+"ו"+this.state.letter2+this.state.letter3,
            p3swS:"נ"+"ו"+this.state.letter2+this.state.letter3+"ה",
            p1mS:"נ"+"ו"+this.state.letter2+this.state.letter3+"נו",
            p2mmS:"נ"+"ו"+this.state.letter2+this.state.letter3+"תם",
            p2mwS:"נ"+"ו"+this.state.letter2+this.state.letter3+"תן",
            p3mS:"נ"+"ו"+this.state.letter2+this.state.letter3+"ו",
            nsmS:"נ"+"ו"+this.state.letter2+this.state.letter3,
            nswS:"נ"+"ו"+this.state.letter2+this.state.letter3+"ת",
            nmmS:"נ"+"ו"+this.state.letter2+this.state.letter3+"ים",
            nmwS:"נ"+"ו"+this.state.letter2+this.state.letter3+"ות",
            f1sS:"אי"+"וו"+this.state.letter2+this.state.letter3,
            f2smS:"תי"+"וו"+this.state.letter2+this.state.letter3,
            f2swS:"תי"+"וו"+this.state.letter2+this.state.letter3+"י",
            f3smS:"יי"+"וו"+this.state.letter2+this.state.letter3,
            f3swS:"תי"+"וו"+this.state.letter2+this.state.letter3,
            f1mS:"ני"+"וו"+this.state.letter2+this.state.letter3,
            f2mmS:"תי"+"וו"+this.state.letter2+this.state.letter3+"ו",
            f2mwS:"תי"+"וו"+this.state.letter2+this.state.letter3+"נה",
            f3mS:"יי"+"וו"+this.state.letter2+this.state.letter3+"ו",
            ismS:"הי"+"וו"+this.state.letter2+this.state.letter3,
            iswS:"הי"+"וו"+this.state.letter2+this.state.letter3+"י",
            immS:"הי"+"וו"+this.state.letter2+this.state.letter3+"ו",
            imwS:"הי"+"וו"+this.state.letter2+this.state.letter3+"נה",
            nsS:"היוו"+this.state.letter2+this.state.letter3+"ות"
            
          });  
          if(this.state.letter3 == "כ"){
            this.setState({
              infS:"להי"+"וו"+this.state.letter2+"ך",
              p3smS:"נ"+"וו"+this.state.letter2+"ך",
              nsmS:"נ"+"וו"+this.state.letter2+"ך",
              f1sS:"אי"+"וו"+this.state.letter2+"ך",
              f2smS:"תי"+"וו"+this.state.letter2+"ך",
              f3smS:"יי"+"וו"+this.state.letter2+"ך",
              f3swS:"תי"+"וו"+this.state.letter2+"ך",
              f1mS:"ני"+"וו"+this.state.letter2+"ך",
              ismS:"הי"+"וו"+this.state.letter2+"ך"
            });
          }
          if(this.state.letter3 == "מ"){
            this.setState({
              infS:"להי"+"וו"+this.state.letter2+"ם",
              p3smS:"נ"+"וו"+this.state.letter2+"ם",
              nsmS:"נ"+"וו"+this.state.letter2+"ם",
              f1sS:"אי"+"וו"+this.state.letter2+"ם",
              f2smS:"תי"+"וו"+this.state.letter2+"ם",
              f3smS:"יי"+"וו"+this.state.letter2+"ם",
              f3swS:"תי"+"וו"+this.state.letter2+"ם",
              f1mS:"ני"+"וו"+this.state.letter2+"ם",
              ismS:"הי"+"וו"+this.state.letter2+"ם"
            });
          }
          if(this.state.letter3 == "נ"){
            this.setState({
              imwS:"הי"+"וו"+this.state.letter2+"נה",
              f2mwS:"תי"+"וו"+this.state.letter2+"נה",
              p1mS:"נ"+"ו"+this.state.letter2+"נו",
              infS:"להי"+"וו"+this.state.letter2+"ן",
              p3smS:"נ"+"וו"+this.state.letter2+"ן",
              nsmS:"נ"+"וו"+this.state.letter2+"ן",
              f1sS:"אי"+"וו"+this.state.letter2+"ן",
              f2smS:"תי"+"וו"+this.state.letter2+"ן",
              f3smS:"יי"+"וו"+this.state.letter2+"ן",
              f3swS:"תי"+"וו"+this.state.letter2+"ן",
              f1mS:"ני"+"וו"+this.state.letter2+"ן",
              ismS:"הי"+"וו"+this.state.letter2+"ן"
            });
          }
          if(this.state.letter3 == "פ"){
            this.setState({
              infS:"להי"+"וו"+this.state.letter2+"ף",
              p3smS:"נ"+"וו"+this.state.letter2+"ף",
              nsmS:"נ"+"וו"+this.state.letter2+"ף",
              f1sS:"אי"+"וו"+this.state.letter2+"ף",
              f2smS:"תי"+"וו"+this.state.letter2+"ף",
              f3smS:"יי"+"וו"+this.state.letter2+"ף",
              f3swS:"תי"+"וו"+this.state.letter2+"ף",
              f1mS:"ני"+"וו"+this.state.letter2+"ף",
              ismS:"הי"+"וו"+this.state.letter2+"ף"
            });
          }
          if(this.state.letter3 == "צ"){
            this.setState({
              infS:"להי"+"וו"+this.state.letter2+"ץ",
              p3smS:"נ"+"וו"+this.state.letter2+"ץ",
              nsmS:"נ"+"וו"+this.state.letter2+"ץ",
              f1sS:"אי"+"וו"+this.state.letter2+"ץ",
              f2smS:"תי"+"וו"+this.state.letter2+"ץ",
              f3smS:"יי"+"וו"+this.state.letter2+"ץ",
              f3swS:"תי"+"וו"+this.state.letter2+"ץ",
              f1mS:"ני"+"וו"+this.state.letter2+"ץ",
              ismS:"הי"+"וו"+this.state.letter2+"ץ"
            });
          }
        break
        case 'נפעל_נאבק':
        this.setState({
          inf: "לְהֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
          f1s: "אֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
          f2sm: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
          f2sw: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
          f3sm: "יֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
          f3sw: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
          f1m: "נֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
          f2mm: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
          f2mw: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3+"ְנָה",
          f3m: "יֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
          ism: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
          isw: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
          imm: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
          imw: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3+"ְנָה",
          ns: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּת"
        });
        if (this.state.letter3 == "כ"){
          this.setState({
            inf: "לְהֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
            f1s: "אֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
            f2sm: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
            f3sm: "יֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
            f3sw: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
            f1m: "נֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
            ism: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך"
          });
        }
        if (this.state.letter3 == "מ"){
          this.setState({
            inf: "לְהֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
            f1s: "אֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
            f2sm: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
            f3sm: "יֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
            f3sw: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
            f1m: "נֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
            ism: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם"
          });
        } 
        if (this.state.letter3 == "נ"){
          this.setState({
            imw: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"נָּה",
            f2mw: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"נָּה",
            inf: "לְהֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
            f1s: "אֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
            f2sm: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
            f3sm: "יֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
            f3sw: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
            f1m: "נֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
            ism: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן"
          });
        } 
        if (this.state.letter3 == "פ"){
          this.setState({
            inf: "לְהֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
            f1s: "אֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
            f2sm: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
            f3sm: "יֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
            f3sw: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
            f1m: "נֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
            ism: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף"
          }); 
        }
        if (this.state.letter3 == "צ"){
          this.setState({
            inf: "לְהֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
            f1s: "אֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
            f2sm: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
            f3sm: "יֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
            f3sw: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
            f1m: "נֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
            ism: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ"
          }); 
        }                                              

      if(this.state.letter2 == 'פ'||this.state.letter2 == 'כ'||this.state.letter2 == 'ב'){
        this.setState({
          p1s: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתִּי",
          p2sm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתָּ",
          p2sw: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתְּ",
          p3sm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ַּ"+this.state.letter3,
          p3sw: "נֶ"+this.state.letter1+"ֶ"+this.state.letter2+"ְּ"+this.state.letter3+"ָה",
          p1m: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנוּ",
          p2mm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּם",
          p2mw: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּן",
          p3m: "נֶ"+this.state.letter1+"ֶ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
          nsm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ָּ"+this.state.letter3,
          nsw: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֶּ"+this.state.letter3+"ֶת",
          nmm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ָּ"+this.state.letter3+"ִים",
          nmw: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ָּ"+this.state.letter3+"וֹת"
        });
        if(this.state.letter3 == "כ"){
          this.setState({
            p3sm: "ֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ַּ"+"ך",
            nsm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ָּ"+"ך"
          });            
        }
        if(this.state.letter3 == "מ"){
          this.setState({
            p3sm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ַּ"+"ם",
            nsm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ָּ"+"ם"
          });           
        }
        if(this.state.letter3 == "נ"){
          this.setState({
            p1m: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ַּ"+"נּוּ",
            p3sm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ַּ"+"ן",
            nsm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ָּ"+"ן"
          });            
        }
        if(this.state.letter3 == "פ"){
          this.setState({
            p3sm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ַּ"+"ף",
            nsm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ָּ"+"ף"
          });            
        } 
        if(this.state.letter3 == "צ"){
          this.setState({
            p3sm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ַּ"+"ץ",
            nsm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ָּ"+"ץ"
          });           
        } 
      }else{
        this.setState({
          p1s: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ַ"+this.state.letter3+"ְתִּי",
          p2sm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ַ"+this.state.letter3+"ְתָּ",
          p2sw: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ַ"+this.state.letter3+"ְתְּ",
          p3sm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ַ"+this.state.letter3,
          p3sw: "נֶ"+this.state.letter1+"ֶ"+this.state.letter2+"ְ"+this.state.letter3+"ָה",
          p1m: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ַ"+this.state.letter3+"ְנוּ",
          p2mm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּם",
          p2mw: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּן",
          p3m: "נֶ"+this.state.letter1+"ֶ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
          nsm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ָ"+this.state.letter3,
          nsw: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ֶ"+this.state.letter3+"ֶת",
          nmm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ָ"+this.state.letter3+"ִים",
          nmw: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ָ"+this.state.letter3+"וֹת"
        });
        if(this.state.letter3 == "כ"){
          this.setState({
            p3sm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ַ"+"ך",
            nsm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ָ"+"ך"              
            });            
        }
        if(this.state.letter3 == "מ"){
          this.setState({
            p3sm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ַ"+"ם",
            nsm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ָ"+"ם"
          });
        }
        if(this.state.letter3 == "נ"){
          this.setState({
            p1m: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ַ"+"נּוּ",
            p3sm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ַ"+"ן",
            nsm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ָ"+"ן"
          });            
        }
        if(this.state.letter3 == "פ"){
          this.setState({
            p3sm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ַ"+"ף",
            nsm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ָ"+"ף"
          });         
        } 
        if(this.state.letter3 == "צ"){
          this.setState({
            p3sm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ַ"+"ץ",
            nsm: "נֶ"+this.state.letter1+"ֱ"+this.state.letter2+"ָ"+"ץ"
          });            
        }                                       
      }
        this.setState({
          infS:"להי"+this.state.letter1+this.state.letter2+this.state.letter3,
          p1sS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"תי",
          p2smS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
          p2swS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
          p3smS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3,
          p3swS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ה",
          p1mS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"נו",
          p2mmS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"תם",
          p2mwS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"תן",
          p3mS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
          nsmS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3,
          nswS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
          nmmS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ים",
          nmwS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ות",
          f1sS:"אי"+this.state.letter1+this.state.letter2+this.state.letter3,
          f2smS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3,
          f2swS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3+"י",
          f3smS:"יי"+this.state.letter1+this.state.letter2+this.state.letter3,
          f3swS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3,
          f1mS:"ני"+this.state.letter1+this.state.letter2+this.state.letter3,
          f2mmS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
          f2mwS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3+"נה",
          f3mS:"יי"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
          ismS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3,
          iswS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3+"י",
          immS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
          imwS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3+"נה",
          nsS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3+"ות"
          
        });  
        if(this.state.letter3 == "כ"){
          this.setState({
            infS:"להי"+this.state.letter1+this.state.letter2+"ך",
            p3smS:"נ"+this.state.letter1+this.state.letter2+"ך",
            nsmS:"נ"+this.state.letter1+this.state.letter2+"ך",
            f1sS:"אי"+this.state.letter1+this.state.letter2+"ך",
            f2smS:"תי"+this.state.letter1+this.state.letter2+"ך",
            f3smS:"יי"+this.state.letter1+this.state.letter2+"ך",
            f3swS:"תי"+this.state.letter1+this.state.letter2+"ך",
            f1mS:"ני"+this.state.letter1+this.state.letter2+"ך",
            ismS:"הי"+this.state.letter1+this.state.letter2+"ך"
          });
        }
        if(this.state.letter3 == "מ"){
          this.setState({
            infS:"להי"+this.state.letter1+this.state.letter2+"ם",
            p3smS:"נ"+this.state.letter1+this.state.letter2+"ם",
            nsmS:"נ"+this.state.letter1+this.state.letter2+"ם",
            f1sS:"אי"+this.state.letter1+this.state.letter2+"ם",
            f2smS:"תי"+this.state.letter1+this.state.letter2+"ם",
            f3smS:"יי"+this.state.letter1+this.state.letter2+"ם",
            f3swS:"תי"+this.state.letter1+this.state.letter2+"ם",
            f1mS:"ני"+this.state.letter1+this.state.letter2+"ם",
            ismS:"הי"+this.state.letter1+this.state.letter2+"ם"
          });
        }
        if(this.state.letter3 == "נ"){
          this.setState({
            imwS:"הי"+this.state.letter1+this.state.letter2+"נה",
            f2mwS:"תי"+this.state.letter1+this.state.letter2+"נה",
            p1mS:"נ"+this.state.letter1+this.state.letter2+"נו",
            infS:"להי"+this.state.letter1+this.state.letter2+"ן",
            p3smS:"נ"+this.state.letter1+this.state.letter2+"ן",
            nsmS:"נ"+this.state.letter1+this.state.letter2+"ן",
            f1sS:"אי"+this.state.letter1+this.state.letter2+"ן",
            f2smS:"תי"+this.state.letter1+this.state.letter2+"ן",
            f3smS:"יי"+this.state.letter1+this.state.letter2+"ן",
            f3swS:"תי"+this.state.letter1+this.state.letter2+"ן",
            f1mS:"ני"+this.state.letter1+this.state.letter2+"ן",
            ismS:"הי"+this.state.letter1+this.state.letter2+"ן"
          });
        }
        if(this.state.letter3 == "פ"){
          this.setState({
            infS:"להי"+this.state.letter1+this.state.letter2+"ף",
            p3smS:"נ"+this.state.letter1+this.state.letter2+"ף",
            nsmS:"נ"+this.state.letter1+this.state.letter2+"ף",
            f1sS:"אי"+this.state.letter1+this.state.letter2+"ף",
            f2smS:"תי"+this.state.letter1+this.state.letter2+"ף",
            f3smS:"יי"+this.state.letter1+this.state.letter2+"ף",
            f3swS:"תי"+this.state.letter1+this.state.letter2+"ף",
            f1mS:"ני"+this.state.letter1+this.state.letter2+"ף",
            ismS:"הי"+this.state.letter1+this.state.letter2+"ף"
          });
        }
        if(this.state.letter3 == "צ"){
          this.setState({
            infS:"להי"+this.state.letter1+this.state.letter2+"ץ",
            p3smS:"נ"+this.state.letter1+this.state.letter2+"ץ",
            nsmS:"נ"+this.state.letter1+this.state.letter2+"ץ",
            f1sS:"אי"+this.state.letter1+this.state.letter2+"ץ",
            f2smS:"תי"+this.state.letter1+this.state.letter2+"ץ",
            f3smS:"יי"+this.state.letter1+this.state.letter2+"ץ",
            f3swS:"תי"+this.state.letter1+this.state.letter2+"ץ",
            f1mS:"ני"+this.state.letter1+this.state.letter2+"ץ",
            ismS:"הי"+this.state.letter1+this.state.letter2+"ץ"
          });
        }
      break
      case 'נפעל_נרשם':
      this.setState({
        inf: "לְהֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
        f1s: "אֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
        f2sm: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
        f2sw: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
        f3sm: "יֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
        f3sw: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
        f1m: "נֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
        f2mm: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
        f2mw: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3+"ְנָה",
        f3m: "יֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
        ism: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
        isw: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
        imm: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
        imw: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3+"ְנָה",
        ns: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּת"
      });
      if (this.state.letter3 == "כ"){
        this.setState({
          inf: "לְהֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
          f1s: "אֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
          f2sm: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
          f3sm: "יֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
          f3sw: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
          f1m: "נֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
          ism: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך"
        });
      }
      if (this.state.letter3 == "מ"){
        this.setState({
          inf: "לְהֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
          f1s: "אֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
          f2sm: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
          f3sm: "יֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
          f3sw: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
          f1m: "נֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
          ism: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם"
        });
      } 
      if (this.state.letter3 == "נ"){
        this.setState({
          imw: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"נָּה",
          f2mw: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"נָּה",
          inf: "לְהֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
          f1s: "אֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
          f2sm: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
          f3sm: "יֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
          f3sw: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
          f1m: "נֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
          ism: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן"
        });
      } 
      if (this.state.letter3 == "פ"){
        this.setState({
          inf: "לְהֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
          f1s: "אֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
          f2sm: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
          f3sm: "יֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
          f3sw: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
          f1m: "נֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
          ism: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף"
        }); 
      }
      if (this.state.letter3 == "צ"){
        this.setState({
          inf: "לְהֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
          f1s: "אֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
          f2sm: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
          f3sm: "יֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
          f3sw: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
          f1m: "נֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
          ism: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ"
        }); 
      }                                              

      if(this.state.letter2 == 'פ'||this.state.letter2 == 'כ'||this.state.letter2 == 'ב'){
        this.setState({
          p1s: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתִּי",
          p2sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתָּ",
          p2sw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתְּ",
          p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3,
          p3sw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ְּ"+this.state.letter3+"ָה",
          p1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנוּ",
          p2mm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּם",
          p2mw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּן",
          p3m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
          nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+this.state.letter3,
          nsw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֶּ"+this.state.letter3+"ֶת",
          nmm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+this.state.letter3+"ִים",
          nmw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+this.state.letter3+"וֹת"
        });
        if(this.state.letter3 == "כ"){
          this.setState({
            p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ך",
            nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+"ך"
          });            
        }
        if(this.state.letter3 == "מ"){
          this.setState({
            p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ם",
            nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+"ם"
          });           
        }
        if(this.state.letter3 == "נ"){
          this.setState({
            p1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"נּוּ",
            p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ן",
            nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+"ן"
          });            
        }
        if(this.state.letter3 == "פ"){
          this.setState({
            p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ף",
            nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+"ף"
          });            
        } 
        if(this.state.letter3 == "צ"){
          this.setState({
            p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ץ",
            nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+"ץ"
          });           
        } 
      }else{
        this.setState({
          p1s: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתִּי",
          p2sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתָּ",
          p2sw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתְּ",
          p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3,
          p3sw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ְ"+this.state.letter3+"ָה",
          p1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְנוּ",
          p2mm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּם",
          p2mw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּן",
          p3m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
          nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3,
          nsw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֶ"+this.state.letter3+"ֶת",
          nmm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3+"ִים",
          nmw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3+"וֹת"
        });
        if(this.state.letter3 == "כ"){
          this.setState({
            p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ך",
            nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+"ך"              
            });            
        }
        if(this.state.letter3 == "מ"){
          this.setState({
            p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ם",
            nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+"ם"
          });
        }
        if(this.state.letter3 == "נ"){
          this.setState({
            p1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"נּוּ",
            p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ן",
            nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+"ן"
          });            
        }
        if(this.state.letter3 == "פ"){
          this.setState({
            p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ף",
            nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+"ף"
          });         
        } 
        if(this.state.letter3 == "צ"){
          this.setState({
            p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ץ",
            nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+"ץ"
          });            
        }                                       
      }
      this.setState({
        infS:"להי"+this.state.letter1+this.state.letter2+this.state.letter3,
        p1sS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"תי",
        p2smS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
        p2swS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
        p3smS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3,
        p3swS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ה",
        p1mS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"נו",
        p2mmS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"תם",
        p2mwS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"תן",
        p3mS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
        nsmS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3,
        nswS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
        nmmS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ים",
        nmwS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ות",
        f1sS:"אי"+this.state.letter1+this.state.letter2+this.state.letter3,
        f2smS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3,
        f2swS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3+"י",
        f3smS:"יי"+this.state.letter1+this.state.letter2+this.state.letter3,
        f3swS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3,
        f1mS:"ני"+this.state.letter1+this.state.letter2+this.state.letter3,
        f2mmS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
        f2mwS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3+"נה",
        f3mS:"יי"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
        ismS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3,
        iswS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3+"י",
        immS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
        imwS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3+"נה",
        nsS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3+"ות"
        
      });  
      if(this.state.letter3 == "כ"){
        this.setState({
          infS:"להי"+this.state.letter1+this.state.letter2+"ך",
          p3smS:"נ"+this.state.letter1+this.state.letter2+"ך",
          nsmS:"נ"+this.state.letter1+this.state.letter2+"ך",
          f1sS:"אי"+this.state.letter1+this.state.letter2+"ך",
          f2smS:"תי"+this.state.letter1+this.state.letter2+"ך",
          f3smS:"יי"+this.state.letter1+this.state.letter2+"ך",
          f3swS:"תי"+this.state.letter1+this.state.letter2+"ך",
          f1mS:"ני"+this.state.letter1+this.state.letter2+"ך",
          ismS:"הי"+this.state.letter1+this.state.letter2+"ך"
        });
      }
      if(this.state.letter3 == "מ"){
        this.setState({
          infS:"להי"+this.state.letter1+this.state.letter2+"ם",
          p3smS:"נ"+this.state.letter1+this.state.letter2+"ם",
          nsmS:"נ"+this.state.letter1+this.state.letter2+"ם",
          f1sS:"אי"+this.state.letter1+this.state.letter2+"ם",
          f2smS:"תי"+this.state.letter1+this.state.letter2+"ם",
          f3smS:"יי"+this.state.letter1+this.state.letter2+"ם",
          f3swS:"תי"+this.state.letter1+this.state.letter2+"ם",
          f1mS:"ני"+this.state.letter1+this.state.letter2+"ם",
          ismS:"הי"+this.state.letter1+this.state.letter2+"ם"
        });
      }
      if(this.state.letter3 == "נ"){
        this.setState({
          imwS:"הי"+this.state.letter1+this.state.letter2+"נה",
          f2mwS:"תי"+this.state.letter1+this.state.letter2+"נה",
          p1mS:"נ"+this.state.letter1+this.state.letter2+"נו",
          infS:"להי"+this.state.letter1+this.state.letter2+"ן",
          p3smS:"נ"+this.state.letter1+this.state.letter2+"ן",
          nsmS:"נ"+this.state.letter1+this.state.letter2+"ן",
          f1sS:"אי"+this.state.letter1+this.state.letter2+"ן",
          f2smS:"תי"+this.state.letter1+this.state.letter2+"ן",
          f3smS:"יי"+this.state.letter1+this.state.letter2+"ן",
          f3swS:"תי"+this.state.letter1+this.state.letter2+"ן",
          f1mS:"ני"+this.state.letter1+this.state.letter2+"ן",
          ismS:"הי"+this.state.letter1+this.state.letter2+"ן"
        });
      }
      if(this.state.letter3 == "פ"){
        this.setState({
          infS:"להי"+this.state.letter1+this.state.letter2+"ף",
          p3smS:"נ"+this.state.letter1+this.state.letter2+"ף",
          nsmS:"נ"+this.state.letter1+this.state.letter2+"ף",
          f1sS:"אי"+this.state.letter1+this.state.letter2+"ף",
          f2smS:"תי"+this.state.letter1+this.state.letter2+"ף",
          f3smS:"יי"+this.state.letter1+this.state.letter2+"ף",
          f3swS:"תי"+this.state.letter1+this.state.letter2+"ף",
          f1mS:"ני"+this.state.letter1+this.state.letter2+"ף",
          ismS:"הי"+this.state.letter1+this.state.letter2+"ף"
        });
      }
      if(this.state.letter3 == "צ"){
        this.setState({
          infS:"להי"+this.state.letter1+this.state.letter2+"ץ",
          p3smS:"נ"+this.state.letter1+this.state.letter2+"ץ",
          nsmS:"נ"+this.state.letter1+this.state.letter2+"ץ",
          f1sS:"אי"+this.state.letter1+this.state.letter2+"ץ",
          f2smS:"תי"+this.state.letter1+this.state.letter2+"ץ",
          f3smS:"יי"+this.state.letter1+this.state.letter2+"ץ",
          f3swS:"תי"+this.state.letter1+this.state.letter2+"ץ",
          f1mS:"ני"+this.state.letter1+this.state.letter2+"ץ",
          ismS:"הי"+this.state.letter1+this.state.letter2+"ץ"
        });
      }
    break 
    case 'נפעל_נבנה':
    this.setState({
      inf: "לְהִ"+this.state.letter1+"ָּ"+this.state.letter2+"וֹת",
      f1s: "אֶ"+this.state.letter1+"ָּ"+this.state.letter2+"ֶה",
      f2sm: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֶה",
      f2sw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ִי",
      f3sm: "יִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֶה",
      f3sw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֶה",
      f1m: "נִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֶה",
      f2mm: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"וּ",
      f2mw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֶינָה",
      f3m: "יִ"+this.state.letter1+"ָּ"+this.state.letter2+"וּ",
      ism: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֶה",
      isw: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ִי",
      imm: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"וּ",
      imw: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֶינָה"
    });                                             

  if(this.state.letter2 == 'פ'||this.state.letter2 == 'כ'||this.state.letter2 == 'ב'){
    this.setState({
      p1s: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֵּיתי",
      p2sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֵּיתָ",
      p2sw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֵּית",
      p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּה",
      p3sw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ְּתָה",
      p1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֵּינוּ",
      p2mm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֵּיתֵם",
      p2mw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֵּיתֵן",
      p3m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ּוּ",
      nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֶּה",
      nsw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֵּית",
      nmm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ִּים",
      nmw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ּוֹת"
    });

  }else{
    this.setState({
      p1s: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֵיתי",
      p2sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֵיתָ",
      p2sw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֵית",
      p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָה",
      p3sw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ְתָה",
      p1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֵינוּ",
      p2mm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֵיתֵם",
      p2mw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֵיתֵן",
      p3m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"וּ",
      nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֶה",
      nsw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֵית",
      nmm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ִים",
      nmw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"וֹת"
    });                                     
  }
    this.setState({
      infS:"להי"+this.state.letter1+this.state.letter2+"ות",
      p1sS:"נ"+this.state.letter1+this.state.letter2+"יתי",
      p2smS:"נ"+this.state.letter1+this.state.letter2+"ית",
      p2swS:"נ"+this.state.letter1+this.state.letter2+"ית",
      p3smS:"נ"+this.state.letter1+this.state.letter2+"ה",
      p3swS:"נ"+this.state.letter1+this.state.letter2+"תה",
      p1mS:"נ"+this.state.letter1+this.state.letter2+"ינו",
      p2mmS:"נ"+this.state.letter1+this.state.letter2+"יתם",
      p2mwS:"נ"+this.state.letter1+this.state.letter2+"יתן",
      p3mS:"נ"+this.state.letter1+this.state.letter2+"ו",
      nsmS:"נ"+this.state.letter1+this.state.letter2+"ה",
      nswS:"נ"+this.state.letter1+this.state.letter2+"ית",
      nmmS:"נ"+this.state.letter1+this.state.letter2+"ים",
      nmwS:"נ"+this.state.letter1+this.state.letter2+"ות",
      f1sS:"אי"+this.state.letter1+this.state.letter2+"ה",
      f2smS:"תי"+this.state.letter1+this.state.letter2+"ה",
      f2swS:"תי"+this.state.letter1+this.state.letter2+"י",
      f3smS:"יי"+this.state.letter1+this.state.letter2+"ה",
      f3swS:"תי"+this.state.letter1+this.state.letter2+"ה",
      f1mS:"ני"+this.state.letter1+this.state.letter2+"ה",
      f2mmS:"תי"+this.state.letter1+this.state.letter2+"ו",
      f2mwS:"תי"+this.state.letter1+this.state.letter2+"ינה",
      f3mS:"יי"+this.state.letter1+this.state.letter2+"ו",
      ismS:"הי"+this.state.letter1+this.state.letter2+"ה",
      iswS:"הי"+this.state.letter1+this.state.letter2+"י",
      immS:"הי"+this.state.letter1+this.state.letter2+"ו",
      imwS:"הי"+this.state.letter1+this.state.letter2+"ינה"
    });  
  break 
  case 'נפעל_נעשה':
  this.setState({
    inf: "לְהֵ"+this.state.letter1+"ָּ"+this.state.letter2+"וֹת",
    f1s: "אֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֶה",
    f2sm: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֶה",
    f2sw: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ִי",
    f3sm: "יֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֶה",
    f3sw: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֶה",
    f1m: "נֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֶה",
    f2mm: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"וּ",
    f2mw: "תֵּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֶינָה",
    f3m: "יֵ"+this.state.letter1+"ָּ"+this.state.letter2+"וּ",
    ism: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֶה",
    isw: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ִי",
    imm: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"וּ",
    imw: "הֵ"+this.state.letter1+"ָּ"+this.state.letter2+"ֶינָה"
  });                                             

if(this.state.letter2 == 'פ'||this.state.letter2 == 'כ'||this.state.letter2 == 'ב'){
  this.setState({
    p1s: "נַ"+this.state.letter1+"ֲ"+this.state.letter2+"ֵּיתי",
    p2sm: "נַ"+this.state.letter1+"ֲ"+this.state.letter2+"ֵּיתָ",
    p2sw: "נַ"+this.state.letter1+"ֲ"+this.state.letter2+"ֵּית",
    p3sm: "נַ"+this.state.letter1+"ֲ"+this.state.letter2+"ָּה",
    p3sw: "נַ"+this.state.letter1+"ֲ"+this.state.letter2+"ְּתָה",
    p1m: "נַ"+this.state.letter1+"ֲ"+this.state.letter2+"ֵּינוּ",
    p2mm: "נַ"+this.state.letter1+"ֲ"+this.state.letter2+"ֵּיתֵם",
    p2mw: "נַ"+this.state.letter1+"ֲ"+this.state.letter2+"ֵּיתֵן",
    p3m: "נַ"+this.state.letter1+"ֲ"+this.state.letter2+"ּוּ",
    nsm: "נַ"+this.state.letter1+"ֲ"+this.state.letter2+"ֶּה",
    nsw: "נַ"+this.state.letter1+"ֲ"+this.state.letter2+"ֵּית",
    nmm: "נַ"+this.state.letter1+"ֲ"+this.state.letter2+"ִּים",
    nmw: "נַ"+this.state.letter1+"ֲ"+this.state.letter2+"ּוֹת"
  });

}else{
  this.setState({
    p1s: "נַ"+this.state.letter1+"ֲ"+this.state.letter2+"ֵיתי",
    p2sm: "נַ"+this.state.letter1+"ֲ"+this.state.letter2+"ֵיתָ",
    p2sw: "נַ"+this.state.letter1+"ֲ"+this.state.letter2+"ֵית",
    p3sm: "נַ"+this.state.letter1+"ֲ"+this.state.letter2+"ָה",
    p3sw: "נַ"+this.state.letter1+"ֲ"+this.state.letter2+"ְתָה",
    p1m: "נַ"+this.state.letter1+"ֲ"+this.state.letter2+"ֵינוּ",
    p2mm: "נַ"+this.state.letter1+"ֲ"+this.state.letter2+"ֵיתֵם",
    p2mw: "נַ"+this.state.letter1+"ֲ"+this.state.letter2+"ֵיתֵן",
    p3m: "נַ"+this.state.letter1+"ֲ"+this.state.letter2+"וּ",
    nsm: "נַ"+this.state.letter1+"ֲ"+this.state.letter2+"ֶה",
    nsw: "נַ"+this.state.letter1+"ֲ"+this.state.letter2+"ֵית",
    nmm: "נַ"+this.state.letter1+"ֲ"+this.state.letter2+"ִים",
    nmw: "נַ"+this.state.letter1+"ֲ"+this.state.letter2+"וֹת"
  });                                     
}
  this.setState({
    infS:"להי"+this.state.letter1+this.state.letter2+"ות",
    p1sS:"נ"+this.state.letter1+this.state.letter2+"יתי",
    p2smS:"נ"+this.state.letter1+this.state.letter2+"ית",
    p2swS:"נ"+this.state.letter1+this.state.letter2+"ית",
    p3smS:"נ"+this.state.letter1+this.state.letter2+"ה",
    p3swS:"נ"+this.state.letter1+this.state.letter2+"תה",
    p1mS:"נ"+this.state.letter1+this.state.letter2+"ינו",
    p2mmS:"נ"+this.state.letter1+this.state.letter2+"יתם",
    p2mwS:"נ"+this.state.letter1+this.state.letter2+"יתן",
    p3mS:"נ"+this.state.letter1+this.state.letter2+"ו",
    nsmS:"נ"+this.state.letter1+this.state.letter2+"ה",
    nswS:"נ"+this.state.letter1+this.state.letter2+"ית",
    nmmS:"נ"+this.state.letter1+this.state.letter2+"ים",
    nmwS:"נ"+this.state.letter1+this.state.letter2+"ות",
    f1sS:"אי"+this.state.letter1+this.state.letter2+"ה",
    f2smS:"תי"+this.state.letter1+this.state.letter2+"ה",
    f2swS:"תי"+this.state.letter1+this.state.letter2+"י",
    f3smS:"יי"+this.state.letter1+this.state.letter2+"ה",
    f3swS:"תי"+this.state.letter1+this.state.letter2+"ה",
    f1mS:"ני"+this.state.letter1+this.state.letter2+"ה",
    f2mmS:"תי"+this.state.letter1+this.state.letter2+"ו",
    f2mwS:"תי"+this.state.letter1+this.state.letter2+"ינה",
    f3mS:"יי"+this.state.letter1+this.state.letter2+"ו",
    ismS:"הי"+this.state.letter1+this.state.letter2+"ה",
    iswS:"הי"+this.state.letter1+this.state.letter2+"י",
    immS:"הי"+this.state.letter1+this.state.letter2+"ו",
    imwS:"הי"+this.state.letter1+this.state.letter2+"ינה"
  });  
break  
case 'נפעל_ניתן':
this.setState({
  inf: "לְהִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
  f1s: "אֶ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
  f2sm: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
  f2sw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
  f3sm: "יִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
  f3sw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
  f1m: "נִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
  f2mm: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
  f2mw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ְנָה",
  f3m: "יִ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
  ism: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
  isw: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
  imm: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
  imw: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ְנָה",
  ns: this.state.letter1+"ְּ"+this.state.letter2+"ִי"+this.state.letter3+"ָה",
  nm: this.state.letter1+"ְּ"+this.state.letter2+"ִי"+this.state.letter3+"וֹת"
});
if (this.state.letter3 == "כ"){
  this.setState({
    inf: "לְהִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
    f1s: "אֶ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
    f2sm: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
    f3sm: "יִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
    f3sw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
    f1m: "נִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
    ism: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך"
  });
}
if (this.state.letter3 == "מ"){
  this.setState({
    inf: "לְהִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
    f1s: "אֶ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
    f2sm: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
    f3sm: "יִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
    f3sw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
    f1m: "נִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
    ism: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם"
  });
} 
if (this.state.letter3 == "נ"){
  this.setState({
    inf: "לְהִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
    f1s: "אֶ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
    f2sm: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
    f3sm: "יִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
    f3sw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
    f1m: "נִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
    ism: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן"
  });
} 
if (this.state.letter3 == "פ"){
  this.setState({
    inf: "לְהִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
    f1s: "אֶ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
    f2sm: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
    f3sm: "יִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
    f3sw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
    f1m: "נִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
    ism: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף"
  }); 
}
if (this.state.letter3 == "צ"){
  this.setState({
    inf: "לְהִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
    f1s: "אֶ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
    f2sm: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
    f3sm: "יִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
    f3sw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
    f1m: "נִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
    ism: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ"
  }); 
}                                              

if(this.state.letter2 == 'פ'||this.state.letter2 == 'כ'||this.state.letter2 == 'ב'){
this.setState({
  p1s: "נִ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתִּי",
  p2sm: "נִ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתָּ",
  p2sw: "נִ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתְּ",
  p3sm: "נִ"+this.state.letter2+"ַּ"+this.state.letter3,
  p3sw: "נִ"+this.state.letter2+"ְּ"+this.state.letter3+"ָה",
  p1m: "נִ"+this.state.letter2+"ַּ"+"נּוּ",
  p2mm: "נִ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּם",
  p2mw: "נִ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּן",
  p3m: "נִ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
  nsm: "נִ"+this.state.letter2+"ָּ"+this.state.letter3,
  nsw: "נִ"+this.state.letter2+"ֶּ"+this.state.letter3+"ֶת",
  nmm: "נִ"+this.state.letter2+"ָּ"+this.state.letter3+"ִים",
  nmw: "נִ"+this.state.letter2+"ָּ"+this.state.letter3+"וֹת"
});
if(this.state.letter3 == "כ"){
  this.setState({
    p3sm: "נִ"+this.state.letter2+"ַּ"+"ך",
    nsm: "נִ"+this.state.letter2+"ָּ"+"ך"
  });            
}
if(this.state.letter3 == "מ"){
  this.setState({
    p3sm: "נִ"+this.state.letter2+"ַּ"+"ם",
    nsm: "נִ"+this.state.letter2+"ָּ"+"ם"
  });           
}
if(this.state.letter3 == "נ"){
  this.setState({
    p3sm: "נִ"+this.state.letter2+"ַּ"+"ן",
    nsm: "נִ"+this.state.letter2+"ָּ"+"ן"
  });            
}
if(this.state.letter3 == "פ"){
  this.setState({
    p3sm: "נִ"+this.state.letter2+"ַּ"+"ף",
    nsm: "נִ"+this.state.letter2+"ָּ"+"ף"
  });            
} 
if(this.state.letter3 == "צ"){
  this.setState({
    p3sm: "נִ"+this.state.letter2+"ַּ"+"ץ",
    nsm: "נִ"+this.state.letter2+"ָּ"+"ץ"
  });           
} 
}else{
this.setState({
  p1s: "נִ"+this.state.letter2+"ַ"+this.state.letter3+"ְתִּי",
  p2sm: "נִ"+this.state.letter2+"ַ"+this.state.letter3+"ְתָּ",
  p2sw: "נִ"+this.state.letter2+"ַ"+this.state.letter3+"ְתְּ",
  p3sm: "נִ"+this.state.letter2+"ַ"+this.state.letter3,
  p3sw: "נִ"+this.state.letter2+"ְ"+this.state.letter3+"ָה",
  p1m: "נִ"+this.state.letter2+"ַ"+"נּוּ",
  p2mm: "נִ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּם",
  p2mw: "נִ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּן",
  p3m: "נִ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
  nsm: "נִ"+this.state.letter2+"ָ"+this.state.letter3,
  nsw: "נִ"+this.state.letter2+"ֶ"+this.state.letter3+"ֶת",
  nmm: "נִ"+this.state.letter2+"ָ"+this.state.letter3+"ִים",
  nmw: "נִ"+this.state.letter2+"ָ"+this.state.letter3+"וֹת"
});
if(this.state.letter3 == "כ"){
  this.setState({
    p3sm: "נִ"+this.state.letter2+"ַ"+"ך",
    nsm: "נִ"+this.state.letter2+"ָ"+"ך"              
    });            
}
if(this.state.letter3 == "מ"){
  this.setState({
    p3sm: "נִ"+this.state.letter2+"ַ"+"ם",
    nsm: "נִ"+this.state.letter2+"ָ"+"ם"
  });
}
if(this.state.letter3 == "נ"){
  this.setState({
    p3sm: "נִ"+this.state.letter2+"ַ"+"ן",
    nsm: "נִ"+this.state.letter2+"ָ"+"ן"
  });            
}
if(this.state.letter3 == "פ"){
  this.setState({
    p3sm: "נִ"+this.state.letter2+"ַ"+"ף",
    nsm: "נִ"+this.state.letter2+"ָ"+"ף"
  });         
} 
if(this.state.letter3 == "צ"){
  this.setState({
    p3sm: "נִ"+this.state.letter2+"ַ"+"ץ",
    nsm: "נִ"+this.state.letter2+"ָ"+"ץ"
  });            
}                                       
}
this.setState({
  infS:"להי"+this.state.letter1+this.state.letter2+this.state.letter3,
  p1sS:"נ"+this.state.letter2+this.state.letter3+"תי",
  p2smS:"נ"+this.state.letter2+this.state.letter3+"ת",
  p2swS:"נ"+this.state.letter2+this.state.letter3+"ת",
  p3smS:"נ"+this.state.letter2+this.state.letter3,
  p3swS:"נ"+this.state.letter2+this.state.letter3+"ה",
  p1mS:"נ"+this.state.letter2+"נו",
  p2mmS:"נ"+this.state.letter2+this.state.letter3+"תם",
  p2mwS:"נ"+this.state.letter2+this.state.letter3+"תן",
  p3mS:"נ"+this.state.letter2+this.state.letter3+"ו",
  nsmS:"נ"+this.state.letter2+this.state.letter3,
  nswS:"נ"+this.state.letter2+this.state.letter3+"ת",
  nmmS:"נ"+this.state.letter2+this.state.letter3+"ים",
  nmwS:"נ"+this.state.letter2+this.state.letter3+"ות",
  f1sS:"אי"+this.state.letter1+this.state.letter2+this.state.letter3,
  f2smS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3,
  f2swS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3+"י",
  f3smS:"יי"+this.state.letter1+this.state.letter2+this.state.letter3,
  f3swS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3,
  f1mS:"ני"+this.state.letter1+this.state.letter2+this.state.letter3,
  f2mmS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
  f2mwS:"תי"+this.state.letter1+this.state.letter2+"נה",
  f3mS:"יי"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
  ismS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3,
  iswS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3+"י",
  immS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
  imwS:"הי"+this.state.letter1+this.state.letter2+"נה",
  nsS:this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ה",
  nmS:this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ות"
});  
if(this.state.letter3 == "כ"){
  this.setState({
    infS:"להי"+this.state.letter1+this.state.letter2+"ך",
    p3smS:"נ"+this.state.letter2+"ך",
    nsmS:"נ"+this.state.letter2+"ך",
    f1sS:"אי"+this.state.letter1+this.state.letter2+"ך",
    f2smS:"תי"+this.state.letter1+this.state.letter2+"ך",
    f3smS:"יי"+this.state.letter1+this.state.letter2+"ך",
    f3swS:"תי"+this.state.letter1+this.state.letter2+"ך",
    f1mS:"ני"+this.state.letter1+this.state.letter2+"ך",
    ismS:"הי"+this.state.letter1+this.state.letter2+"ך"
  });
}
if(this.state.letter3 == "מ"){
  this.setState({
    infS:"להי"+this.state.letter1+this.state.letter2+"ם",
    p3smS:"נ"+this.state.letter2+"ם",
    nsmS:"נ"+this.state.letter2+"ם",
    f1sS:"אי"+this.state.letter1+this.state.letter2+"ם",
    f2smS:"תי"+this.state.letter1+this.state.letter2+"ם",
    f3smS:"יי"+this.state.letter1+this.state.letter2+"ם",
    f3swS:"תי"+this.state.letter1+this.state.letter2+"ם",
    f1mS:"ני"+this.state.letter1+this.state.letter2+"ם",
    ismS:"הי"+this.state.letter1+this.state.letter2+"ם"
  });
}
if(this.state.letter3 == "נ"){
  this.setState({
    infS:"להי"+this.state.letter1+this.state.letter2+"ן",
    p3smS:"נ"+this.state.letter2+"ן",
    nsmS:"נ"+this.state.letter2+"ן",
    f1sS:"אי"+this.state.letter1+this.state.letter2+"ן",
    f2smS:"תי"+this.state.letter1+this.state.letter2+"ן",
    f3smS:"יי"+this.state.letter1+this.state.letter2+"ן",
    f3swS:"תי"+this.state.letter1+this.state.letter2+"ן",
    f1mS:"ני"+this.state.letter1+this.state.letter2+"ן",
    ismS:"הי"+this.state.letter1+this.state.letter2+"ן"
  });
}
if(this.state.letter3 == "פ"){
  this.setState({
    infS:"להי"+this.state.letter1+this.state.letter2+"ף",
    p3smS:"נ"+this.state.letter2+"ף",
    nsmS:"נ"+this.state.letter2+"ף",
    f1sS:"אי"+this.state.letter1+this.state.letter2+"ף",
    f2smS:"תי"+this.state.letter1+this.state.letter2+"ף",
    f3smS:"יי"+this.state.letter1+this.state.letter2+"ף",
    f3swS:"תי"+this.state.letter1+this.state.letter2+"ף",
    f1mS:"ני"+this.state.letter1+this.state.letter2+"ף",
    ismS:"הי"+this.state.letter1+this.state.letter2+"ף"
  });
}
if(this.state.letter3 == "צ"){
  this.setState({
    infS:"להי"+this.state.letter1+this.state.letter2+"ץ",
    p3smS:"נ"+this.state.letter2+"ץ",
    nsmS:"נ"+this.state.letter2+"ץ",
    f1sS:"אי"+this.state.letter1+this.state.letter2+"ץ",
    f2smS:"תי"+this.state.letter1+this.state.letter2+"ץ",
    f3smS:"יי"+this.state.letter1+this.state.letter2+"ץ",
    f3swS:"תי"+this.state.letter1+this.state.letter2+"ץ",
    f1mS:"ני"+this.state.letter1+this.state.letter2+"ץ",
    ismS:"הי"+this.state.letter1+this.state.letter2+"ץ"
  });
}
break
case 'נפעל_נמצא':
this.setState({
  inf: "לְהִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
  f1s: "אֶ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
  f2sm: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
  f2sw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
  f3sm: "יִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
  f3sw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
  f1m: "נִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
  f2mm: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
  f2mw: "תִּ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3+"נָה",
  f3m: "יִ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
  ism: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
  isw: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
  imm: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
  imw: "הִ"+this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3+"נָה",
  ns: "הִ"+this.state.letter1+"ָ"+this.state.letter2+"ְ"+this.state.letter3+"וּת"
  });                                              

if(this.state.letter2 == 'פ'||this.state.letter2 == 'כ'||this.state.letter2 == 'ב'){
this.setState({
  p1s: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֵּ"+this.state.letter3+"תִי",
  p2sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֵּ"+this.state.letter3+"תָ",
  p2sw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֵּ"+this.state.letter3+"ת",
  p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+this.state.letter3,
  p3sw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ְּ"+this.state.letter3+"ָה",
  p1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֵּ"+this.state.letter3+"נוּ",
  p2mm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֵּ"+this.state.letter3+"תֶם",
  p2mw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֵּ"+this.state.letter3+"תֶן",
  p3m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
  nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+this.state.letter3,
  nsw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֶּ"+this.state.letter3+"ת",
  nmm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+this.state.letter3+"ִים",
  nmw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+this.state.letter3+"וֹת"
}); 
}else{
this.setState({
  p1s: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֵ"+this.state.letter3+"תִי",
  p2sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֵ"+this.state.letter3+"תָ",
  p2sw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֵ"+this.state.letter3+"ת",
  p3sm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3,
  p3sw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ְ"+this.state.letter3+"ָה",
  p1m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֵ"+this.state.letter3+"נוּ",
  p2mm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֵ"+this.state.letter3+"תֶם",
  p2mw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֵ"+this.state.letter3+"תֶן",
  p3m: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
  nsm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3,
  nsw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ֶ"+this.state.letter3+"ת",
  nmm: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3+"ִים",
  nmw: "נִ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3+"וֹת"
});                                       
}
this.setState({
  infS:"להי"+this.state.letter1+this.state.letter2+this.state.letter3,
  p1sS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"תי",
  p2smS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
  p2swS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
  p3smS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3,
  p3swS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ה",
  p1mS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"נו",
  p2mmS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"תם",
  p2mwS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"תן",
  p3mS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
  nsmS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3,
  nswS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
  nmmS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ים",
  nmwS:"נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ות",
  f1sS:"אי"+this.state.letter1+this.state.letter2+this.state.letter3,
  f2smS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3,
  f2swS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3+"י",
  f3smS:"יי"+this.state.letter1+this.state.letter2+this.state.letter3,
  f3swS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3,
  f1mS:"ני"+this.state.letter1+this.state.letter2+this.state.letter3,
  f2mmS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
  f2mwS:"תי"+this.state.letter1+this.state.letter2+this.state.letter3+"נה",
  f3mS:"יי"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
  ismS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3,
  iswS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3+"י",
  immS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
  imwS:"הי"+this.state.letter1+this.state.letter2+this.state.letter3+"נה",
  nsS:"ה"+this.state.letter1+this.state.letter2+this.state.letter3+"ות"
});  
break
case 'פיעל_נצל' :
if(this.state.letter1 == "ב" ||this.state.letter1 == "כ"||this.state.letter1 == "פ" || this.state.letter1 == "ת" || this.state.letter1 == "ת" || this.state.letter1 == "ת"){
  this.setState({
    p1s: this.state.letter1+"ִּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתִּי",
    p2sm: this.state.letter1+"ִּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתָּ",
    p2sw: this.state.letter1+"ִּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתְּ",
    p3sm: this.state.letter1+"ִּ"+this.state.letter2+"ֵּ"+this.state.letter3,
    p3sw: this.state.letter1+"ִּ"+this.state.letter2+"ְּ"+this.state.letter3+"ָה",
    p1m: this.state.letter1+"ִּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנוּ",
    p2mm: this.state.letter1+"ִּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּם",
    p2mw: this.state.letter1+"ִּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּן",
    p3m: this.state.letter1+"ִּ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
    ism: this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+this.state.letter3,
    isw: this.state.letter1+"ַּ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
    imm: this.state.letter1+"ַּ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
    imw: this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+this.state.letter3+"ְנָה",
    ns: this.state.letter1+"ִּ"+this.state.letter2+"וּ"+this.state.letter3,
    nm: this.state.letter1+"ִּ"+this.state.letter2+"וּ"+this.state.letter3+"ִים"
  });
  if(this.state.letter3 == 'כ'){
    this.setState({
      p3sm: this.state.letter1+"ִּ"+this.state.letter2+"ֵּ"+"ך",
      ism: this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ך",
      ns: this.state.letter1+"ִּ"+this.state.letter2+"וּ"+"ך"
    });
  }
  if(this.state.letter3 == 'מ'){
    this.setState({
      p3sm: this.state.letter1+"ִּ"+this.state.letter2+"ֵּ"+"ם",
      ism: this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ם",
      ns: this.state.letter1+"ִּ"+this.state.letter2+"וּ"+"ם"
    });
  }
  if(this.state.letter3 == 'נ'){
    this.setState({
      imw: this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"נָּה",
      p1m: this.state.letter1+"ִּ"+this.state.letter2+"ַּ"+"נּוּ",
      p3sm: this.state.letter1+"ִּ"+this.state.letter2+"ֵּ"+"ן",
      ism: this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ן",
      ns: this.state.letter1+"ִּ"+this.state.letter2+"וּ"+"ן"
    });
  }
  if(this.state.letter3 == 'פ'){
    this.setState({
      p3sm: this.state.letter1+"ִּ"+this.state.letter2+"ֵּ"+"ף",
      ism: this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ף",
      ns: this.state.letter1+"ִּ"+this.state.letter2+"וּ"+"ף"
    });
  }
  if(this.state.letter3 == 'צ'){
    this.setState({
      p3sm: this.state.letter1+"ִּ"+this.state.letter2+"ֵּ"+"ץ",
      ism: this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ץ",
      ns: this.state.letter1+"ִּ"+this.state.letter2+"וּ"+"ץ"
    });
  }
}else{
  this.setState({
    p1s: this.state.letter1+"ִ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתִּי",
    p2sm: this.state.letter1+"ִ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתָּ",
    p2sw: this.state.letter1+"ִ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתְּ",
    p3sm: this.state.letter1+"ִ"+this.state.letter2+"ֵּ"+this.state.letter3,
    p3sw: this.state.letter1+"ִ"+this.state.letter2+"ְּ"+this.state.letter3+"ָה",
    p1m: this.state.letter1+"ִ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנוּ",
    p2mm: this.state.letter1+"ִ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּם",
    p2mw: this.state.letter1+"ִ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּן",
    p3m: this.state.letter1+"ִ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
    ism: this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
    isw: this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
    imm: this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
    imw: this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3+"ְנָה",
    ns: this.state.letter1+"ִ"+this.state.letter2+"וּ"+this.state.letter3,
    nm: this.state.letter1+"ִ"+this.state.letter2+"וּ"+this.state.letter3+"ִים"
  });
  if(this.state.letter3 == 'כ'){
    this.setState({
      p3sm: this.state.letter1+"ִ"+this.state.letter2+"ֵּ"+"ך",
      ism: this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
      ns: this.state.letter1+"ִ"+this.state.letter2+"וּ"+"ך"
    });
  }
  if(this.state.letter3 == 'מ'){
    this.setState({
      p3sm: this.state.letter1+"ִ"+this.state.letter2+"ֵּ"+"ם",
      ism: this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
      ns: this.state.letter1+"ִ"+this.state.letter2+"וּ"+"ם"
    });
  }
  if(this.state.letter3 == 'נ'){
    this.setState({
      imw: this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"נָּה",
      p1m: this.state.letter1+"ִ"+this.state.letter2+"ַּ"+"נּוּ",
      p3sm: this.state.letter1+"ִ"+this.state.letter2+"ֵּ"+"ן",
      ism: this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
      ns: this.state.letter1+"ִ"+this.state.letter2+"וּ"+"ן"
    });
  }
  if(this.state.letter3 == 'פ'){
    this.setState({
      p3sm: this.state.letter1+"ִ"+this.state.letter2+"ֵּ"+"ף",
      ism: this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
      ns: this.state.letter1+"ִ"+this.state.letter2+"וּ"+"ף"
    });
  }
  if(this.state.letter3 == 'צ'){
    this.setState({
      p3sm: this.state.letter1+"ִ"+this.state.letter2+"ֵּ"+"ץ",
      ism: this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
      ns: this.state.letter1+"ִ"+this.state.letter2+"וּ"+"ץ"
    });
  }
}
this.setState({
  inf: "לְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  nsm: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  nsw: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ֶּ"+this.state.letter3+"ֶת",
  nmm: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"ִים",
  nmw: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"וֹת",
  f1s: "אֲ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  f2sm: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  f2sw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
  f3sm: "יְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  f3sw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  f1m: "נְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  f2mm: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
  f2mw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3+"ְנָה",
  f3m: "יְ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
  infS: "ל"+this.state.letter1+this.state.letter2+this.state.letter3,
  p1sS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"תי",
  p2smS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"ת",
  p2swS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"ת",
  p3smS: this.state.letter1+"י"+this.state.letter2+this.state.letter3,
  p3swS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"ה",
  p1mS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"נו",
  p2mmS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"תם",
  p2mwS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"תן",
  p3mS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"ו",
  nsmS: "מ"+this.state.letter1+this.state.letter2+this.state.letter3,
  nswS: "מ"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
  nmmS: "מ"+this.state.letter1+this.state.letter2+this.state.letter3+"ים",
  nmwS: "מ"+this.state.letter1+this.state.letter2+this.state.letter3+"ות",
  f1sS: "א"+this.state.letter1+this.state.letter2+this.state.letter3,
  f2smS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3,
  f2swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"י",
  f3smS: "י"+this.state.letter1+this.state.letter2+this.state.letter3,
  f3swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3,
  f1mS: "נ"+this.state.letter1+this.state.letter2+this.state.letter3,
  f2mmS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
  f2mwS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"נה",
  f3mS: "י"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
  ismS: this.state.letter1+this.state.letter2+this.state.letter3,
  iswS: this.state.letter1+this.state.letter2+this.state.letter3+"י",
  immS: this.state.letter1+this.state.letter2+this.state.letter3+"ו",
  imwS: this.state.letter1+this.state.letter2+this.state.letter3+"נה",
  nsS: this.state.letter1+"י"+this.state.letter2+"ו"+this.state.letter3,
  nmS: this.state.letter1+"י"+this.state.letter2+"ו"+this.state.letter3+"ים"
});
if(this.state.letter3 == 'כ'){
  this.setState({
    inf: "לְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
    nsm: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
    f1s: "אֲ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
    f2sm: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
    f3sm: "יְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
    f3sw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
    f1m: "נְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
    infS: "ל"+this.state.letter1+this.state.letter2+"ך",
    p3smS: this.state.letter1+"י"+this.state.letter2+"ך",
    nsmS: "מ"+this.state.letter1+this.state.letter2+"ך",
    f1sS: "א"+this.state.letter1+this.state.letter2+"ך",
    f2smS: "ת"+this.state.letter1+this.state.letter2+"ך",
    f3smS: "י"+this.state.letter1+this.state.letter2+"ך",
    f3swS: "ת"+this.state.letter1+this.state.letter2+"ך",
    f1mS: "נ"+this.state.letter1+this.state.letter2+"ך",
    ismS: this.state.letter1+this.state.letter2+"ך",
    nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"ך"
  });
}
if(this.state.letter3 == 'מ'){
  this.setState({
    inf: "לְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
    nsm: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
    f1s: "אֲ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
    f2sm: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
    f3sm: "יְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
    f3sw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
    f1m: "נְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
    infS: "ל"+this.state.letter1+this.state.letter2+"ם",
    p3smS: this.state.letter1+"י"+this.state.letter2+"ם",
    nsmS: "מ"+this.state.letter1+this.state.letter2+"ם",
    f1sS: "א"+this.state.letter1+this.state.letter2+"ם",
    f2smS: "ת"+this.state.letter1+this.state.letter2+"ם",
    f3smS: "י"+this.state.letter1+this.state.letter2+"ם",
    f3swS: "ת"+this.state.letter1+this.state.letter2+"ם",
    f1mS: "נ"+this.state.letter1+this.state.letter2+"ם",
    ismS: this.state.letter1+this.state.letter2+"ם",
    nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"ם"
  });
}
if(this.state.letter3 == 'נ'){
  this.setState({
    imwS: this.state.letter1+this.state.letter2+"נה",
    f2mwS: "ת"+this.state.letter1+this.state.letter2+"נה",
    p1mS: this.state.letter1+"י"+this.state.letter2+"נו",
    f2mw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"נָּה",
    inf: "לְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
    nsm: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
    f1s: "אֲ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
    f2sm: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
    f3sm: "יְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
    f3sw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
    f1m: "נְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
    infS: "ל"+this.state.letter1+this.state.letter2+"ן",
    p3smS: this.state.letter1+"י"+this.state.letter2+"ן",
    nsmS: "מ"+this.state.letter1+this.state.letter2+"ן",
    f1sS: "א"+this.state.letter1+this.state.letter2+"ן",
    f2smS: "ת"+this.state.letter1+this.state.letter2+"ן",
    f3smS: "י"+this.state.letter1+this.state.letter2+"ן",
    f3swS: "ת"+this.state.letter1+this.state.letter2+"ן",
    f1mS: "נ"+this.state.letter1+this.state.letter2+"ן",
    ismS: this.state.letter1+this.state.letter2+"ן",
    nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"ן"
  });
}
if(this.state.letter3 == 'פ'){
  this.setState({
    inf: "לְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
    nsm: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
    f1s: "אֲ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
    f2sm: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
    f3sm: "יְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
    f3sw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
    f1m: "נְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
    infS: "ל"+this.state.letter1+this.state.letter2+"ף",
    p3smS: this.state.letter1+"י"+this.state.letter2+"ף",
    nsmS: "מ"+this.state.letter1+this.state.letter2+"ף",
    f1sS: "א"+this.state.letter1+this.state.letter2+"ף",
    f2smS: "ת"+this.state.letter1+this.state.letter2+"ף",
    f3smS: "י"+this.state.letter1+this.state.letter2+"ף",
    f3swS: "ת"+this.state.letter1+this.state.letter2+"ף",
    f1mS: "נ"+this.state.letter1+this.state.letter2+"ף",
    ismS: this.state.letter1+this.state.letter2+"ף",
    nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"ף"
  });
}
if(this.state.letter3 == 'צ'){
  this.setState({
    inf: "לְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
    nsm: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
    f1s: "אֲ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
    f2sm: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
    f3sm: "יְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
    f3sw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
    f1m: "נְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
    infS: "ל"+this.state.letter1+this.state.letter2+"ץ",
    p3smS: this.state.letter1+"י"+this.state.letter2+"ץ",
    nsmS: "מ"+this.state.letter1+this.state.letter2+"ץ",
    f1sS: "א"+this.state.letter1+this.state.letter2+"ץ",
    f2smS: "ת"+this.state.letter1+this.state.letter2+"ץ",
    f3smS: "י"+this.state.letter1+this.state.letter2+"ץ",
    f3swS: "ת"+this.state.letter1+this.state.letter2+"ץ",
    f1mS: "נ"+this.state.letter1+this.state.letter2+"ץ",
    ismS: this.state.letter1+this.state.letter2+"ץ",
    nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"ץ"
  });
}
break 
case 'פיעל_ישב' :
if(this.state.letter1 == "ב" ||this.state.letter1 == "כ"||this.state.letter1 == "פ" || this.state.letter1 == "ת" || this.state.letter1 == "ת" || this.state.letter1 == "ת"){
  this.setState({
    p1s: this.state.letter1+"ִּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתִּי",
    p2sm: this.state.letter1+"ִּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתָּ",
    p2sw: this.state.letter1+"ִּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתְּ",
    p3sm: this.state.letter1+"ִּ"+this.state.letter2+"ֵּ"+this.state.letter3,
    p3sw: this.state.letter1+"ִּ"+this.state.letter2+"ְּ"+this.state.letter3+"ָה",
    p1m: this.state.letter1+"ִּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנוּ",
    p2mm: this.state.letter1+"ִּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּם",
    p2mw: this.state.letter1+"ִּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּן",
    p3m: this.state.letter1+"ִּ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
    ism: this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+this.state.letter3,
    isw: this.state.letter1+"ַּ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
    imm: this.state.letter1+"ַּ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
    imw: this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+this.state.letter3+"ְנָה",
    ns: this.state.letter1+"ִּ"+this.state.letter2+"וּ"+this.state.letter3,
    nm: this.state.letter1+"ִּ"+this.state.letter2+"וּ"+this.state.letter3+"ִים"
  });
  if(this.state.letter3 == 'כ'){
    this.setState({
      p3sm: this.state.letter1+"ִּ"+this.state.letter2+"ֵּ"+"ך",
      ism: this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ך",
      ns: this.state.letter1+"ִּ"+this.state.letter2+"וּ"+"ך"
    });
  }
  if(this.state.letter3 == 'מ'){
    this.setState({
      p3sm: this.state.letter1+"ִּ"+this.state.letter2+"ֵּ"+"ם",
      ism: this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ם",
      ns: this.state.letter1+"ִּ"+this.state.letter2+"וּ"+"ם"
    });
  }
  if(this.state.letter3 == 'נ'){
    this.setState({
      imw: this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"נָּה",
      p1m: this.state.letter1+"ִּ"+this.state.letter2+"ַּ"+"נּוּ",
      p3sm: this.state.letter1+"ִּ"+this.state.letter2+"ֵּ"+"ן",
      ism: this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ן",
      ns: this.state.letter1+"ִּ"+this.state.letter2+"וּ"+"ן"
    });
  }
  if(this.state.letter3 == 'פ'){
    this.setState({
      p3sm: this.state.letter1+"ִּ"+this.state.letter2+"ֵּ"+"ף",
      ism: this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ף",
      ns: this.state.letter1+"ִּ"+this.state.letter2+"וּ"+"ף"
    });
  }
  if(this.state.letter3 == 'צ'){
    this.setState({
      p3sm: this.state.letter1+"ִּ"+this.state.letter2+"ֵּ"+"ץ",
      ism: this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ץ",
      ns: this.state.letter1+"ִּ"+this.state.letter2+"וּ"+"ץ"
    });
  }
}else{
  this.setState({
    p1s: this.state.letter1+"ִ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתִּי",
    p2sm: this.state.letter1+"ִ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתָּ",
    p2sw: this.state.letter1+"ִ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתְּ",
    p3sm: this.state.letter1+"ִ"+this.state.letter2+"ֵּ"+this.state.letter3,
    p3sw: this.state.letter1+"ִ"+this.state.letter2+"ְּ"+this.state.letter3+"ָה",
    p1m: this.state.letter1+"ִ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנוּ",
    p2mm: this.state.letter1+"ִ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּם",
    p2mw: this.state.letter1+"ִ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּן",
    p3m: this.state.letter1+"ִ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
    ism: this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
    isw: this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
    imm: this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
    imw: this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3+"ְנָה",
    ns: this.state.letter1+"ִ"+this.state.letter2+"וּ"+this.state.letter3,
    nm: this.state.letter1+"ִ"+this.state.letter2+"וּ"+this.state.letter3+"ִים"
  });
  if(this.state.letter3 == 'כ'){
    this.setState({
      p3sm: this.state.letter1+"ִ"+this.state.letter2+"ֵּ"+"ך",
      ism: this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
      ns: this.state.letter1+"ִ"+this.state.letter2+"וּ"+"ך"
    });
  }
  if(this.state.letter3 == 'מ'){
    this.setState({
      p3sm: this.state.letter1+"ִ"+this.state.letter2+"ֵּ"+"ם",
      ism: this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
      ns: this.state.letter1+"ִ"+this.state.letter2+"וּ"+"ם"
    });
  }
  if(this.state.letter3 == 'נ'){
    this.setState({
      imw: this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"נָּה",
      p1m: this.state.letter1+"ִ"+this.state.letter2+"ַּ"+"נּוּ",
      p3sm: this.state.letter1+"ִ"+this.state.letter2+"ֵּ"+"ן",
      ism: this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
      ns: this.state.letter1+"ִ"+this.state.letter2+"וּ"+"ן"
    });
  }
  if(this.state.letter3 == 'פ'){
    this.setState({
      p3sm: this.state.letter1+"ִ"+this.state.letter2+"ֵּ"+"ף",
      ism: this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
      ns: this.state.letter1+"ִ"+this.state.letter2+"וּ"+"ף"
    });
  }
  if(this.state.letter3 == 'צ'){
    this.setState({
      p3sm: this.state.letter1+"ִ"+this.state.letter2+"ֵּ"+"ץ",
      ism: this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
      ns: this.state.letter1+"ִ"+this.state.letter2+"וּ"+"ץ"
    });
  }
}
this.setState({
  inf: "לְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  nsm: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  nsw: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ֶּ"+this.state.letter3+"ֶת",
  nmm: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"ִים",
  nmw: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"וֹת",
  f1s: "אֲ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  f2sm: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  f2sw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
  f3sm: "יְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  f3sw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  f1m: "נְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  f2mm: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
  f2mw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3+"ְנָה",
  f3m: "יְ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
  infS: "ל"+this.state.letter1+this.state.letter1+this.state.letter2+this.state.letter3,
  p1sS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"תי",
  p2smS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"ת",
  p2swS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"ת",
  p3smS: this.state.letter1+"י"+this.state.letter2+this.state.letter3,
  p3swS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"ה",
  p1mS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"נו",
  p2mmS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"תם",
  p2mwS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"תן",
  p3mS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"ו",
  nsmS: "מ"+this.state.letter1+this.state.letter1+this.state.letter2+this.state.letter3,
  nswS: "מ"+this.state.letter1+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
  nmmS: "מ"+this.state.letter1+this.state.letter1+this.state.letter2+this.state.letter3+"ים",
  nmwS: "מ"+this.state.letter1+this.state.letter1+this.state.letter2+this.state.letter3+"ות",
  f1sS: "א"+this.state.letter1+this.state.letter1+this.state.letter2+this.state.letter3,
  f2smS: "ת"+this.state.letter1+this.state.letter1+this.state.letter2+this.state.letter3,
  f2swS: "ת"+this.state.letter1+this.state.letter1+this.state.letter2+this.state.letter3+"י",
  f3smS: "י"+this.state.letter1+this.state.letter2+this.state.letter3,
  f3swS: "ת"+this.state.letter1+this.state.letter1+this.state.letter2+this.state.letter3,
  f1mS: "נ"+this.state.letter1+this.state.letter1+this.state.letter2+this.state.letter3,
  f2mmS: "ת"+this.state.letter1+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
  f2mwS: "ת"+this.state.letter1+this.state.letter1+this.state.letter2+this.state.letter3+"נה",
  f3mS: "י"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
  ismS: this.state.letter1+this.state.letter2+this.state.letter3,
  iswS: this.state.letter1+this.state.letter2+this.state.letter3+"י",
  immS: this.state.letter1+this.state.letter2+this.state.letter3+"ו",
  imwS: this.state.letter1+this.state.letter2+this.state.letter3+"נה",
  nsS: this.state.letter1+"י"+this.state.letter2+"ו"+this.state.letter3,
  nmS: this.state.letter1+"י"+this.state.letter2+"ו"+this.state.letter3+"ים"
});
if(this.state.letter3 == 'כ'){
  this.setState({
    inf: "לְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
    nsm: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
    f1s: "אֲ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
    f2sm: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
    f3sm: "יְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
    f3sw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
    f1m: "נְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
    infS: "ל"+this.state.letter1+this.state.letter1+this.state.letter2+"ך",
    p3smS: this.state.letter1+"י"+this.state.letter2+"ך",
    nsmS: "מ"+this.state.letter1+this.state.letter1+this.state.letter2+"ך",
    f1sS: "א"+this.state.letter1+this.state.letter1+this.state.letter2+"ך",
    f2smS: "ת"+this.state.letter1+this.state.letter1+this.state.letter2+"ך",
    f3smS: "י"+this.state.letter1+this.state.letter2+"ך",
    f3swS: "ת"+this.state.letter1+this.state.letter1+this.state.letter2+"ך",
    f1mS: "נ"+this.state.letter1+this.state.letter1+this.state.letter2+"ך",
    ismS: this.state.letter1+this.state.letter2+"ך",
    nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"ך"
  });
}
if(this.state.letter3 == 'מ'){
  this.setState({
    inf: "לְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
    nsm: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
    f1s: "אֲ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
    f2sm: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
    f3sm: "יְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
    f3sw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
    f1m: "נְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
    infS: "ל"+this.state.letter1+this.state.letter1+this.state.letter2+"ם",
    p3smS: this.state.letter1+"י"+this.state.letter2+"ם",
    nsmS: "מ"+this.state.letter1+this.state.letter1+this.state.letter2+"ם",
    f1sS: "א"+this.state.letter1+this.state.letter1+this.state.letter2+"ם",
    f2smS: "ת"+this.state.letter1+this.state.letter1+this.state.letter2+"ם",
    f3smS: "י"+this.state.letter1+this.state.letter2+"ם",
    f3swS: "ת"+this.state.letter1+this.state.letter1+this.state.letter2+"ם",
    f1mS: "נ"+this.state.letter1+this.state.letter1+this.state.letter2+"ם",
    ismS: this.state.letter1+this.state.letter2+"ם",
    nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"ם"
  });
}
if(this.state.letter3 == 'נ'){
  this.setState({
    imwS: this.state.letter1+this.state.letter2+"נה",
    f2mwS: "ת"+this.state.letter1+this.state.letter1+this.state.letter2+"נה",
    p1mS: this.state.letter1+"י"+this.state.letter2+"נו",
    f2mw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"נָּה",
    inf: "לְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
    nsm: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
    f1s: "אֲ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
    f2sm: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
    f3sm: "יְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
    f3sw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
    f1m: "נְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
    infS: "ל"+this.state.letter1+this.state.letter1+this.state.letter2+"ן",
    p3smS: this.state.letter1+"י"+this.state.letter2+"ן",
    nsmS: "מ"+this.state.letter1+this.state.letter1+this.state.letter2+"ן",
    f1sS: "א"+this.state.letter1+this.state.letter1+this.state.letter2+"ן",
    f2smS: "ת"+this.state.letter1+this.state.letter1+this.state.letter2+"ן",
    f3smS: "י"+this.state.letter1+this.state.letter2+"ן",
    f3swS: "ת"+this.state.letter1+this.state.letter1+this.state.letter2+"ן",
    f1mS: "נ"+this.state.letter1+this.state.letter1+this.state.letter2+"ן",
    ismS: this.state.letter1+this.state.letter2+"ן",
    nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"ן"
  });
}
if(this.state.letter3 == 'פ'){
  this.setState({
    inf: "לְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
    nsm: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
    f1s: "אֲ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
    f2sm: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
    f3sm: "יְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
    f3sw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
    f1m: "נְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
    infS: "ל"+this.state.letter1+this.state.letter1+this.state.letter2+"ף",
    p3smS: this.state.letter1+"י"+this.state.letter2+"ף",
    nsmS: "מ"+this.state.letter1+this.state.letter1+this.state.letter2+"ף",
    f1sS: "א"+this.state.letter1+this.state.letter1+this.state.letter2+"ף",
    f2smS: "ת"+this.state.letter1+this.state.letter1+this.state.letter2+"ף",
    f3smS: "י"+this.state.letter1+this.state.letter2+"ף",
    f3swS: "ת"+this.state.letter1+this.state.letter1+this.state.letter2+"ף",
    f1mS: "נ"+this.state.letter1+this.state.letter1+this.state.letter2+"ף",
    ismS: this.state.letter1+this.state.letter2+"ף",
    nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"ף"
  });
}
if(this.state.letter3 == 'צ'){
  this.setState({
    inf: "לְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
    nsm: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
    f1s: "אֲ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
    f2sm: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
    f3sm: "יְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
    f3sw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
    f1m: "נְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
    infS: "ל"+this.state.letter1+this.state.letter1+this.state.letter2+"ץ",
    p3smS: this.state.letter1+"י"+this.state.letter2+"ץ",
    nsmS: "מ"+this.state.letter1+this.state.letter1+this.state.letter2+"ץ",
    f1sS: "א"+this.state.letter1+this.state.letter1+this.state.letter2+"ץ",
    f2smS: "ת"+this.state.letter1+this.state.letter1+this.state.letter2+"ץ",
    f3smS: "י"+this.state.letter1+this.state.letter2+"ץ",
    f3swS: "ת"+this.state.letter1+this.state.letter1+this.state.letter2+"ץ",
    f1mS: "נ"+this.state.letter1+this.state.letter1+this.state.letter2+"ץ",
    ismS: this.state.letter1+this.state.letter2+"ץ",
    nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"ץ"
  });
}
break
case "פיעל_תאר":
this.setState({
  inf: "לְ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+this.state.letter3,
  p1s: this.state.letter1+"ֵּ"+this.state.letter2+"ַ"+this.state.letter3+"ְתִּי",
  p2sm: this.state.letter1+"ֵּ"+this.state.letter2+"ַ"+this.state.letter3+"ְתָּ",
  p2sw: this.state.letter1+"ֵּ"+this.state.letter2+"ַ"+this.state.letter3+"ְתְּ",
  p3sm: this.state.letter1+"ֵּ"+this.state.letter2+"ֵ"+this.state.letter3,
  p3sw: this.state.letter1+"ֵּ"+this.state.letter2+"ֲ"+this.state.letter3+"ָה",
  p1m: this.state.letter1+"ֵּ"+this.state.letter2+"ַ"+this.state.letter3+"ְנוּ",
  p2mm: this.state.letter1+"ֵּ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּם",
  p2mw: this.state.letter1+"ֵּ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּן",
  p3m: this.state.letter1+"ֵּ"+this.state.letter2+"ֲ"+this.state.letter3+"וּ",
  nsm: "מְ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+this.state.letter3,
  nsw: "מְ"+this.state.letter1+"ָ"+this.state.letter2+"ֶ"+this.state.letter3+"ֶת",
  nmm: "מְ"+this.state.letter1+"ָ"+this.state.letter2+"ֲ"+this.state.letter3+"ִים",
  nmw: "מְ"+this.state.letter1+"ָ"+this.state.letter2+"ֲ"+this.state.letter3+"וֹת",
  f1s: "אֲ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+this.state.letter3,
  f2sm: "תְּ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+this.state.letter3,
  f2sw: "תְּ"+this.state.letter1+"ָ"+this.state.letter2+"ֲ"+this.state.letter3+"ִי",
  f3sm: "יְ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+this.state.letter3,
  f3sw: "תְּ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+this.state.letter3,
  f1m: "נְ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+this.state.letter3,
  f2mm: "תְּ"+this.state.letter1+"ָ"+this.state.letter2+"ֲ"+this.state.letter3+"וּ",
  f2mw: "תְּ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+this.state.letter3+"ְנָה",
  f3m: "יְ"+this.state.letter1+"ָ"+this.state.letter2+"ֲ"+this.state.letter3+"וּ",
  ism: this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3,
  isw: this.state.letter1+"ָּ"+this.state.letter2+"ֲ"+this.state.letter3+"ִי",
  imm: this.state.letter1+"ָּ"+this.state.letter2+"ֲ"+this.state.letter3+"וּ",
  imw: this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+this.state.letter3+"ְנָה",
  ns: this.state.letter1+"ֵּ"+this.state.letter2+"וּ"+this.state.letter3,
  nm: this.state.letter1+"ֵּ"+this.state.letter2+"וּ"+this.state.letter3+"ים",
  infS: "ל"+this.state.letter1+this.state.letter2+this.state.letter3,
  p1sS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"תי",
  p2smS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"ת",
  p2swS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"ת",
  p3smS: this.state.letter1+"י"+this.state.letter2+this.state.letter3,
  p3swS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"ה",
  p1mS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"נו",
  p2mmS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"תם",
  p2mwS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"תן",
  p3mS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"ו",
  nsmS: "מ"+this.state.letter1+this.state.letter2+this.state.letter3,
  nswS: "מ"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
  nmmS: "מ"+this.state.letter1+this.state.letter2+this.state.letter3+"ים",
  nmwS: "מ"+this.state.letter1+this.state.letter2+this.state.letter3+"ות",
  f1sS: "א"+this.state.letter1+this.state.letter2+this.state.letter3,
  f2smS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3,
  f2swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"י",
  f3smS: "י"+this.state.letter1+this.state.letter2+this.state.letter3,
  f3swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3,
  f1mS: "נ"+this.state.letter1+this.state.letter2+this.state.letter3,
  f2mmS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
  f2mwS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"נה",
  f3mS: "י"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
  ismS: this.state.letter1+this.state.letter2+this.state.letter3,
  iswS: this.state.letter1+this.state.letter2+this.state.letter3+"י",
  immS: this.state.letter1+this.state.letter2+this.state.letter3+"ו",
  imwS: this.state.letter1+this.state.letter2+this.state.letter3+"נה",
  nsS: this.state.letter1+"י"+this.state.letter2+"ו"+this.state.letter3,
  nmS: this.state.letter1+"י"+this.state.letter2+"ו"+this.state.letter3+"ים"
});
if(this.state.letter3 == "כ"){
  this.setState({
  inf: "לְ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ך",
  p3sm: this.state.letter1+"ֵּ"+this.state.letter2+"ֵ"+"ך",
  nsm: "מְ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ך",
  f1s: "אֲ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ך",
  f2sm: "תְּ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ך",
  f3sm: "יְ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ך",
  f3sw: "תְּ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ך",
  f1m: "נְ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ך",
  ism: this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ך",
  ns: this.state.letter1+"ֵּ"+this.state.letter2+"וּ"+"ך",
  infS: "ל"+this.state.letter1+this.state.letter2+"ך",
  p3smS: this.state.letter1+"י"+this.state.letter2+"ך",
  nsmS: "מ"+this.state.letter1+this.state.letter2+"ך",
  f1sS: "א"+this.state.letter1+this.state.letter2+"ך",
  f2smS: "ת"+this.state.letter1+this.state.letter2+"ך",
  f3smS: "י"+this.state.letter1+this.state.letter2+"ך",
  f3swS: "ת"+this.state.letter1+this.state.letter2+"ך",
  f1mS: "נ"+this.state.letter1+this.state.letter2+"ך",
  ismS: this.state.letter1+this.state.letter2+"ך",
  nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"ך"
});
}
if(this.state.letter3 == "מ"){
  this.setState({
  inf: "לְ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ם",
  p3sm: this.state.letter1+"ֵּ"+this.state.letter2+"ֵ"+"ם",
  nsm: "מְ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ם",
  f1s: "אֲ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ם",
  f2sm: "תְּ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ם",
  f3sm: "יְ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ם",
  f3sw: "תְּ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ם",
  f1m: "נְ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ם",
  ism: this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ם",
  ns: this.state.letter1+"ֵּ"+this.state.letter2+"וּ"+"ם",
  infS: "ל"+this.state.letter1+this.state.letter2+"ם",
  p3smS: this.state.letter1+"י"+this.state.letter2+"ם",
  nsmS: "מ"+this.state.letter1+this.state.letter2+"ם",
  f1sS: "א"+this.state.letter1+this.state.letter2+"ם",
  f2smS: "ת"+this.state.letter1+this.state.letter2+"ם",
  f3smS: "י"+this.state.letter1+this.state.letter2+"ם",
  f3swS: "ת"+this.state.letter1+this.state.letter2+"ם",
  f1mS: "נ"+this.state.letter1+this.state.letter2+"ם",
  ismS: this.state.letter1+this.state.letter2+"ם",
  nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"ם"
});
}
if(this.state.letter3 == "ן"){
  this.setState({
  imwS: this.state.letter1+this.state.letter2+"נה",
  f2mwS: "ת"+this.state.letter1+this.state.letter2+"נה",
  p1mS: this.state.letter1+"י"+this.state.letter2+"נו",
  imw: this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"נָּה",
  f2mw: "תְּ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"נָּה",
  p1m: this.state.letter1+"ֵּ"+this.state.letter2+"ַ"+"נּוּ", 
  inf: "לְ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ן",
  p3sm: this.state.letter1+"ֵּ"+this.state.letter2+"ֵ"+"ן",
  nsm: "מְ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ן",
  f1s: "אֲ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ן",
  f2sm: "תְּ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ן",
  f3sm: "יְ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ן",
  f3sw: "תְּ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ן",
  f1m: "נְ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ן",
  ism: this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ן",
  ns: this.state.letter1+"ֵּ"+this.state.letter2+"וּ"+"ן",
  infS: "ל"+this.state.letter1+this.state.letter2+"ן",
  p3smS: this.state.letter1+"י"+this.state.letter2+"ן",
  nsmS: "מ"+this.state.letter1+this.state.letter2+"ן",
  f1sS: "א"+this.state.letter1+this.state.letter2+"ן",
  f2smS: "ת"+this.state.letter1+this.state.letter2+"ן",
  f3smS: "י"+this.state.letter1+this.state.letter2+"ן",
  f3swS: "ת"+this.state.letter1+this.state.letter2+"ן",
  f1mS: "נ"+this.state.letter1+this.state.letter2+"ן",
  ismS: this.state.letter1+this.state.letter2+"ן",
  nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"ן"
});
}
if(this.state.letter3 == "פ"){
  this.setState({
  inf: "לְ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ף",
  p3sm: this.state.letter1+"ֵּ"+this.state.letter2+"ֵ"+"ף",
  nsm: "מְ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ף",
  f1s: "אֲ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ף",
  f2sm: "תְּ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ף",
  f3sm: "יְ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ף",
  f3sw: "תְּ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ף",
  f1m: "נְ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ף",
  ism: this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ף",
  ns: this.state.letter1+"ֵּ"+this.state.letter2+"וּ"+"ף",
  infS: "ל"+this.state.letter1+this.state.letter2+"ף",
  p3smS: this.state.letter1+"י"+this.state.letter2+"ף",
  nsmS: "מ"+this.state.letter1+this.state.letter2+"ף",
  f1sS: "א"+this.state.letter1+this.state.letter2+"ף",
  f2smS: "ת"+this.state.letter1+this.state.letter2+"ף",
  f3smS: "י"+this.state.letter1+this.state.letter2+"ף",
  f3swS: "ת"+this.state.letter1+this.state.letter2+"ף",
  f1mS: "נ"+this.state.letter1+this.state.letter2+"ף",
  ismS: this.state.letter1+this.state.letter2+"ף",
  nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"ף"
});
}
if(this.state.letter3 == "צ"){
  this.setState({
  inf: "לְ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ץ",
  p3sm: this.state.letter1+"ֵּ"+this.state.letter2+"ֵ"+"ץ",
  nsm: "מְ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ץ",
  f1s: "אֲ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ץ",
  f2sm: "תְּ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ץ",
  f3sm: "יְ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ץ",
  f3sw: "תְּ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ץ",
  f1m: "נְ"+this.state.letter1+"ָ"+this.state.letter2+"ֵ"+"ץ",
  ism: this.state.letter1+"ָּ"+this.state.letter2+"ֵ"+"ץ",
  ns: this.state.letter1+"ֵּ"+this.state.letter2+"וּ"+"ץ",
  infS: "ל"+this.state.letter1+this.state.letter2+"ץ",
  p3smS: this.state.letter1+"י"+this.state.letter2+"ץ",
  nsmS: "מ"+this.state.letter1+this.state.letter2+"ץ",
  f1sS: "א"+this.state.letter1+this.state.letter2+"ץ",
  f2smS: "ת"+this.state.letter1+this.state.letter2+"ץ",
  f3smS: "י"+this.state.letter1+this.state.letter2+"ץ",
  f3swS: "ת"+this.state.letter1+this.state.letter2+"ץ",
  f1mS: "נ"+this.state.letter1+this.state.letter2+"ץ",
  ismS: this.state.letter1+this.state.letter2+"ץ",
  nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"ץ"
});
}
break
case 'פיעל_סים' :
if(this.state.letter1 == "ב" ||this.state.letter1 == "כ"||this.state.letter1 == "פ" || this.state.letter1 == "ת" || this.state.letter1 == "ת" || this.state.letter1 == "ת"){
  this.setState({
    p1s: this.state.letter1+"ִּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתִּי",
    p2sm: this.state.letter1+"ִּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתָּ",
    p2sw: this.state.letter1+"ִּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתְּ",
    p3sm: this.state.letter1+"ִּ"+this.state.letter2+"ֵּ"+this.state.letter3,
    p3sw: this.state.letter1+"ִּ"+this.state.letter2+"ְּ"+this.state.letter3+"ָה",
    p1m: this.state.letter1+"ִּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנוּ",
    p2mm: this.state.letter1+"ִּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּם",
    p2mw: this.state.letter1+"ִּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּן",
    p3m: this.state.letter1+"ִּ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
    ism: this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+this.state.letter3,
    isw: this.state.letter1+"ַּ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
    imm: this.state.letter1+"ַּ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
    imw: this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+this.state.letter3+"ְנָה",
    ns: this.state.letter1+"ִּ"+this.state.letter2+"וּ"+this.state.letter3,
    nm: this.state.letter1+"ִּ"+this.state.letter2+"וּ"+this.state.letter3+"ִים"
  });
  if(this.state.letter3 == 'כ'){
    this.setState({
      p3sm: this.state.letter1+"ִּ"+this.state.letter2+"ֵּ"+"ך",
      ism: this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ך",
      ns: this.state.letter1+"ִּ"+this.state.letter2+"וּ"+"ך"
    });
  }
  if(this.state.letter3 == 'מ'){
    this.setState({
      p3sm: this.state.letter1+"ִּ"+this.state.letter2+"ֵּ"+"ם",
      ism: this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ם",
      ns: this.state.letter1+"ִּ"+this.state.letter2+"וּ"+"ם"
    });
  }
  if(this.state.letter3 == 'נ'){
    this.setState({
      imw: this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"נָּה",
      p1m: this.state.letter1+"ִּ"+this.state.letter2+"ַּ"+"נּוּ",
      p3sm: this.state.letter1+"ִּ"+this.state.letter2+"ֵּ"+"ן",
      ism: this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ן",
      ns: this.state.letter1+"ִּ"+this.state.letter2+"וּ"+"ן"
    });
  }
  if(this.state.letter3 == 'פ'){
    this.setState({
      p3sm: this.state.letter1+"ִּ"+this.state.letter2+"ֵּ"+"ף",
      ism: this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ף",
      ns: this.state.letter1+"ִּ"+this.state.letter2+"וּ"+"ף"
    });
  }
  if(this.state.letter3 == 'צ'){
    this.setState({
      p3sm: this.state.letter1+"ִּ"+this.state.letter2+"ֵּ"+"ץ",
      ism: this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ץ",
      ns: this.state.letter1+"ִּ"+this.state.letter2+"וּ"+"ץ"
    });
  }
}else{
  this.setState({
    p1s: this.state.letter1+"ִ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתִּי",
    p2sm: this.state.letter1+"ִ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתָּ",
    p2sw: this.state.letter1+"ִ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתְּ",
    p3sm: this.state.letter1+"ִ"+this.state.letter2+"ֵּ"+this.state.letter3,
    p3sw: this.state.letter1+"ִ"+this.state.letter2+"ְּ"+this.state.letter3+"ָה",
    p1m: this.state.letter1+"ִ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנוּ",
    p2mm: this.state.letter1+"ִ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּם",
    p2mw: this.state.letter1+"ִ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּן",
    p3m: this.state.letter1+"ִ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
    ism: this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
    isw: this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
    imm: this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
    imw: this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3+"ְנָה",
    ns: this.state.letter1+"ִ"+this.state.letter2+"וּ"+this.state.letter3,
    nm: this.state.letter1+"ִ"+this.state.letter2+"וּ"+this.state.letter3+"ִים"
  });
  if(this.state.letter3 == 'כ'){
    this.setState({
      p3sm: this.state.letter1+"ִ"+this.state.letter2+"ֵּ"+"ך",
      ism: this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
      ns: this.state.letter1+"ִ"+this.state.letter2+"וּ"+"ך"
    });
  }
  if(this.state.letter3 == 'מ'){
    this.setState({
      p3sm: this.state.letter1+"ִ"+this.state.letter2+"ֵּ"+"ם",
      ism: this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
      ns: this.state.letter1+"ִ"+this.state.letter2+"וּ"+"ם"
    });
  }
  if(this.state.letter3 == 'נ'){
    this.setState({
      imw: this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"נָּה",
      p1m: this.state.letter1+"ִ"+this.state.letter2+"ַּ"+"נּוּ",
      p3sm: this.state.letter1+"ִ"+this.state.letter2+"ֵּ"+"ן",
      ism: this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
      ns: this.state.letter1+"ִ"+this.state.letter2+"וּ"+"ן"
    });
  }
  if(this.state.letter3 == 'פ'){
    this.setState({
      p3sm: this.state.letter1+"ִ"+this.state.letter2+"ֵּ"+"ף",
      ism: this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
      ns: this.state.letter1+"ִ"+this.state.letter2+"וּ"+"ף"
    });
  }
  if(this.state.letter3 == 'צ'){
    this.setState({
      p3sm: this.state.letter1+"ִ"+this.state.letter2+"ֵּ"+"ץ",
      ism: this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
      ns: this.state.letter1+"ִ"+this.state.letter2+"וּ"+"ץ"
    });
  }
}
this.setState({
  inf: "לְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  nsm: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  nsw: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ֶּ"+this.state.letter3+"ֶת",
  nmm: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"ִים",
  nmw: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"וֹת",
  f1s: "אֲ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  f2sm: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  f2sw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
  f3sm: "יְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  f3sw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  f1m: "נְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  f2mm: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
  f2mw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3+"ְנָה",
  f3m: "יְ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
  infS: "ל"+this.state.letter1+"יי"+this.state.letter3,
  p1sS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"תי",
  p2smS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"ת",
  p2swS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"ת",
  p3smS: this.state.letter1+"י"+this.state.letter2+this.state.letter3,
  p3swS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"ה",
  p1mS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"נו",
  p2mmS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"תם",
  p2mwS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"תן",
  p3mS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"ו",
  nsmS: "מ"+this.state.letter1+this.state.letter2+this.state.letter2+this.state.letter3,
  nswS: "מ"+this.state.letter1+this.state.letter2+this.state.letter2+this.state.letter3+"ת",
  nmmS: "מ"+this.state.letter1+this.state.letter2+this.state.letter2+this.state.letter3+"ים",
  nmwS: "מ"+this.state.letter1+this.state.letter2+this.state.letter2+this.state.letter3+"ות",
  f1sS: "א"+this.state.letter1+this.state.letter2+this.state.letter2+this.state.letter3,
  f2smS: "ת"+this.state.letter1+this.state.letter2+this.state.letter2+this.state.letter3,
  f2swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter2+this.state.letter3+"י",
  f3smS: "י"+this.state.letter1+this.state.letter2+this.state.letter2+this.state.letter3,
  f3swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter2+this.state.letter3,
  f1mS: "נ"+this.state.letter1+this.state.letter2+this.state.letter2+this.state.letter3,
  f2mmS: "ת"+this.state.letter1+this.state.letter2+this.state.letter2+this.state.letter3+"ו",
  f2mwS: "ת"+this.state.letter1+this.state.letter2+this.state.letter2+this.state.letter3+"נה",
  f3mS: "י"+this.state.letter1+this.state.letter2+this.state.letter2+this.state.letter3+"ו",
  ismS: this.state.letter1+this.state.letter2+this.state.letter2+this.state.letter3,
  iswS: this.state.letter1+this.state.letter2+this.state.letter2+this.state.letter3+"י",
  immS: this.state.letter1+this.state.letter2+this.state.letter2+this.state.letter3+"ו",
  imwS: this.state.letter1+this.state.letter2+this.state.letter2+this.state.letter3+"נה",
  nsS: this.state.letter1+"י"+this.state.letter2+"ו"+this.state.letter3,
  nmS: this.state.letter1+"י"+this.state.letter2+"ו"+this.state.letter3+"ים"
});
if(this.state.letter3 == 'כ'){
  this.setState({
    inf: "לְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
    nsm: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
    f1s: "אֲ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
    f2sm: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
    f3sm: "יְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
    f3sw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
    f1m: "נְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
    infS: "ל"+this.state.letter1+this.state.letter2+this.state.letter2+"ך",
    p3smS: this.state.letter1+"י"+this.state.letter2+"ך",
    nsmS: "מ"+this.state.letter1+this.state.letter2+this.state.letter2+"ך",
    f1sS: "א"+this.state.letter1+this.state.letter2+this.state.letter2+"ך",
    f2smS: "ת"+this.state.letter1+this.state.letter2+this.state.letter2+"ך",
    f3smS: "י"+this.state.letter1+this.state.letter2+this.state.letter2+"ך",
    f3swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter2+"ך",
    f1mS: "נ"+this.state.letter1+this.state.letter2+this.state.letter2+"ך",
    ismS: this.state.letter1+this.state.letter2+this.state.letter2+"ך",
    nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"ך"
  });
}
if(this.state.letter3 == 'מ'){
  this.setState({
    inf: "לְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
    nsm: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
    f1s: "אֲ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
    f2sm: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
    f3sm: "יְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
    f3sw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
    f1m: "נְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
    infS: "ל"+this.state.letter2+this.state.letter2+this.state.letter2+"ם",
    p3smS: this.state.letter1+"י"+this.state.letter2+"ם",
    nsmS: "מ"+this.state.letter1+this.state.letter2+this.state.letter2+"ם",
    f1sS: "א"+this.state.letter1+this.state.letter2+this.state.letter2+"ם",
    f2smS: "ת"+this.state.letter1+this.state.letter2+this.state.letter2+"ם",
    f3smS: "י"+this.state.letter1+this.state.letter2+this.state.letter2+"ם",
    f3swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter2+"ם",
    f1mS: "נ"+this.state.letter1+this.state.letter2+this.state.letter2+"ם",
    ismS: this.state.letter1+this.state.letter2+this.state.letter2+"ם",
    nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"ם"
  });
}
if(this.state.letter3 == 'נ'){
  this.setState({
    imwS: this.state.letter1+this.state.letter2+this.state.letter2+"נה",
    f2mwS: "ת"+this.state.letter1+this.state.letter2+this.state.letter2+"נה",
    p1mS: this.state.letter1+"י"+this.state.letter2+"נו",
    f2mw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"נָּה",
    inf: "לְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
    nsm: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
    f1s: "אֲ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
    f2sm: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
    f3sm: "יְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
    f3sw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
    f1m: "נְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
    infS: "ל"+this.state.letter1+this.state.letter2+this.state.letter2+"ן",
    p3smS: this.state.letter1+"י"+this.state.letter2+"ן",
    nsmS: "מ"+this.state.letter1+this.state.letter2+this.state.letter2+"ן",
    f1sS: "א"+this.state.letter1+this.state.letter2+this.state.letter2+"ן",
    f2smS: "ת"+this.state.letter1+this.state.letter2+this.state.letter2+"ן",
    f3smS: "י"+this.state.letter1+this.state.letter2+this.state.letter2+"ן",
    f3swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter2+"ן",
    f1mS: "נ"+this.state.letter1+this.state.letter2+this.state.letter2+"ן",
    ismS: this.state.letter1+this.state.letter2+this.state.letter2+"ן",
    nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"ן"
  });
}
if(this.state.letter3 == 'פ'){
  this.setState({
    inf: "לְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
    nsm: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
    f1s: "אֲ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
    f2sm: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
    f3sm: "יְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
    f3sw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
    f1m: "נְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
    infS: "ל"+this.state.letter1+this.state.letter2+this.state.letter2+"ף",
    p3smS: this.state.letter1+"י"+this.state.letter2+"ף",
    nsmS: "מ"+this.state.letter1+this.state.letter2+this.state.letter2+"ף",
    f1sS: "א"+this.state.letter1+this.state.letter2+this.state.letter2+"ף",
    f2smS: "ת"+this.state.letter1+this.state.letter2+this.state.letter2+"ף",
    f3smS: "י"+this.state.letter1+this.state.letter2+this.state.letter2+"ף",
    f3swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter2+"ף",
    f1mS: "נ"+this.state.letter1+this.state.letter2+this.state.letter2+"ף",
    ismS: this.state.letter1+this.state.letter2+this.state.letter2+"ף",
    nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"ף"
  });
}
if(this.state.letter3 == 'צ'){
  this.setState({
    inf: "לְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
    nsm: "מְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
    f1s: "אֲ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
    f2sm: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
    f3sm: "יְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
    f3sw: "תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
    f1m: "נְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
    infS: "ל"+this.state.letter1+this.state.letter2+this.state.letter2+"ץ",
    p3smS: this.state.letter1+"י"+this.state.letter2+"ץ",
    nsmS: "מ"+this.state.letter1+this.state.letter2+this.state.letter2+"ץ",
    f1sS: "א"+this.state.letter1+this.state.letter2+this.state.letter2+"ץ",
    f2smS: "ת"+this.state.letter1+this.state.letter2+this.state.letter2+"ץ",
    f3smS: "י"+this.state.letter1+this.state.letter2+this.state.letter2+"ץ",
    f3swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter2+"ץ",
    f1mS: "נ"+this.state.letter1+this.state.letter2+this.state.letter2+"ץ",
    ismS: this.state.letter1+this.state.letter2+this.state.letter2+"ץ",
    nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"ץ"
  });
}
break
case "פיעל_מלא":
if(this.state.letter1 == "ב"||this.state.letter1 == "כ"||this.state.letter1 == "פ" || this.state.letter1 == "ת" || this.state.letter1 == "ת" || this.state.letter1 == "ת"){
  this.setState({
    p1s:this.state.letter1+"ִּ"+this.state.letter2+"ֵּ"+this.state.letter3+"תִי",
    p2sm:this.state.letter1+"ִּ"+this.state.letter2+"ֵּ"+this.state.letter3+"תָ",
    p2sw:this.state.letter1+"ִּ"+this.state.letter2+"ֵּ"+this.state.letter3+"ת",
    p3sm:this.state.letter1+"ִּ"+this.state.letter2+"ֵּ"+this.state.letter3,
    p3sw:this.state.letter1+"ִּ"+this.state.letter2+"ְּ"+this.state.letter3+"ָה",
    p1m:this.state.letter1+"ִּ"+this.state.letter2+"ֵּ"+this.state.letter3+"נוּ",
    p2mm:this.state.letter1+"ִּ"+this.state.letter2+"ֵּ"+this.state.letter3+"תֶם",
    p2mw:this.state.letter1+"ִּ"+this.state.letter2+"ֵּ"+this.state.letter3+"תֶן",
    p3m:this.state.letter1+"ִּ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
    ism:this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+this.state.letter3,
    isw:this.state.letter1+"ַּ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
    imm:this.state.letter1+"ַּ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
    imw:this.state.letter1+"ַּ"+this.state.letter2+"ֶּ"+this.state.letter3+"נָה",
    ns:this.state.letter1+"ִּ"+this.state.letter2+"וּי",
    nm:this.state.letter1+"ִּ"+this.state.letter2+"וּיים"
  });
}else{
  this.setState({
    p1s:this.state.letter1+"ִ"+this.state.letter2+"ֵּ"+this.state.letter3+"תִי",
    p2sm:this.state.letter1+"ִ"+this.state.letter2+"ֵּ"+this.state.letter3+"תָ",
    p2sw:this.state.letter1+"ִ"+this.state.letter2+"ֵּ"+this.state.letter3+"ת",
    p3sm:this.state.letter1+"ִ"+this.state.letter2+"ֵּ"+this.state.letter3,
    p3sw:this.state.letter1+"ִ"+this.state.letter2+"ְּ"+this.state.letter3+"ָה",
    p1m:this.state.letter1+"ִ"+this.state.letter2+"ֵּ"+this.state.letter3+"נוּ",
    p2mm:this.state.letter1+"ִ"+this.state.letter2+"ֵּ"+this.state.letter3+"תֶם",
    p2mw:this.state.letter1+"ִ"+this.state.letter2+"ֵּ"+this.state.letter3+"תֶן",
    p3m:this.state.letter1+"ִ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
    ism:this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
    isw:this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
    imm:this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
    imw:this.state.letter1+"ַ"+this.state.letter2+"ֶּ"+this.state.letter3+"נָה",
    ns:this.state.letter1+"ִ"+this.state.letter2+"וּי",
    nm:this.state.letter1+"ִ"+this.state.letter2+"וּיים"
  });
}
this.setState({
  inf:"לְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  nsm:"מְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  nsw:"מְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3+"ת",
  nmm:"מְ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"ִים",
  nmw:"מְ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"וֹת",
  f1s:"אֲ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  f2sm:"תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  f2sw:"תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
  f3sm:"יְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  f3sw:"תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  f1m:"נְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
  f2mm:"תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
  f2mw:"תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֶּ"+this.state.letter3+"נָה",
  f3m:"יְ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
  infS: "ל"+this.state.letter1+this.state.letter2+this.state.letter3,
  p1sS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"תי",
  p2smS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"ת",
  p2swS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"ת",
  p3smS: this.state.letter1+"י"+this.state.letter2+this.state.letter3,
  p3swS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"ה",
  p1mS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"נו",
  p2mmS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"תם",
  p2mwS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"תן",
  p3mS: this.state.letter1+"י"+this.state.letter2+this.state.letter3+"ו",
  nsmS: "מ"+this.state.letter1+this.state.letter2+this.state.letter3,
  nswS: "מ"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
  nmmS: "מ"+this.state.letter1+this.state.letter2+this.state.letter3+"ים",
  nmwS: "מ"+this.state.letter1+this.state.letter2+this.state.letter3+"ות",
  f1sS: "א"+this.state.letter1+this.state.letter2+this.state.letter3,
  f2smS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3,
  f2swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"י",
  f3smS: "י"+this.state.letter1+this.state.letter2+this.state.letter3,
  f3swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3,
  f1mS: "נ"+this.state.letter1+this.state.letter2+this.state.letter3,
  f2mmS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
  f2mwS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"נה",
  f3mS: "י"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
  ismS: this.state.letter1+this.state.letter2+this.state.letter3,
  iswS: this.state.letter1+this.state.letter2+this.state.letter3+"י",
  immS: this.state.letter1+this.state.letter2+this.state.letter3+"ו",
  imwS: this.state.letter1+this.state.letter2+this.state.letter3+"נה",
  nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"י",
  nmS: this.state.letter1+"י"+this.state.letter2+"ו"+"י"+"ים"
});
break
case "פיעל_פטפט":
if(this.state.letter1 == "ב"||this.state.letter1 == "כ"||this.state.letter1 == "פ" || this.state.letter1 == "ת" || this.state.letter1 == "ת" || this.state.letter1 == "ת"){
  this.setState({
    p1s: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"ַּ"+this.state.letter4+"ְתִּי",
    p2sm: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"ַּ"+this.state.letter4+"ְתָּ",
    p2sw: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"ַּ"+this.state.letter4+"ְתְּ",
    p3sm: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+this.state.letter4,
    p3sw: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"ְּ"+this.state.letter4+"ָה",
    p1m: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"ַּ"+this.state.letter4+"ְנוּ",
    p2mm: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"ַּ"+this.state.letter4+"ְתֶּם",
    p2mw: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"ַּ"+this.state.letter4+"ְתֶּן",
    p3m: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"ְּ"+this.state.letter4+"וּ",
    ism: this.state.letter1+"ַּ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+this.state.letter4,
    isw: this.state.letter1+"ַּ"+this.state.letter2+"ְ"+this.state.letter3+"ְּ"+this.state.letter4+"ִי",
    imm: this.state.letter1+"ַּ"+this.state.letter2+"ְ"+this.state.letter3+"ְּ"+this.state.letter4+"וּ",
    imw: this.state.letter1+"ַּ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+this.state.letter4+"ְנָה",
    ns: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"ּוּ"+this.state.letter4,
    nm: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"ּוּ"+this.state.letter4+"ִים"  
  });
  if(this.state.letter4 == "כ"){
    this.setState({
      p3sm: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ך",
      ism: this.state.letter1+"ַּ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ך",
      ns: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"ּוּ"+"ך"  
    }); 
  }
  if(this.state.letter4 == "מ"){
    this.setState({
      p3sm: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ם",
      ism: this.state.letter1+"ַּ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ם",
      ns: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"ּוּ"+"ם"  
    }); 
  }
  if(this.state.letter4 == "נ"){
    this.setState({
      imw: this.state.letter1+"ַּ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"נָּה",
      p1m: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"ַּ"+"נּוּ",
      p3sm: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ן",
      ism: this.state.letter1+"ַּ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ן",
      ns: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"ּוּ"+"ן"  
    }); 
  }
  if(this.state.letter4 == "פ"){
    this.setState({
      p3sm: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ף",
      ism: this.state.letter1+"ַּ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ף",
      ns: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"ּוּ"+"ף"  
    }); 
  }
  if(this.state.letter4 == "צ"){
    this.setState({
      p3sm: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ץ",
      ism: this.state.letter1+"ַּ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ץ",
      ns: this.state.letter1+"ִּ"+this.state.letter2+"ְ"+this.state.letter3+"ּוּ"+"ץ"  
    }); 
  }
}else{
  this.setState({
    p1s: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ַּ"+this.state.letter4+"ְתִּי",
    p2sm: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ַּ"+this.state.letter4+"ְתָּ",
    p2sw: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ַּ"+this.state.letter4+"ְתְּ",
    p3sm: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+this.state.letter4,
    p3sw: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ְּ"+this.state.letter4+"ָה",
    p1m: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ַּ"+this.state.letter4+"ְנוּ",
    p2mm: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ַּ"+this.state.letter4+"ְתֶּם",
    p2mw: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ַּ"+this.state.letter4+"ְתֶּן",
    p3m: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ְּ"+this.state.letter4+"וּ",
    ism: this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+this.state.letter4,
    isw: this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ְּ"+this.state.letter4+"ִי",
    imm: this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ְּ"+this.state.letter4+"וּ",
    imw: this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+this.state.letter4+"ְנָה",
    ns: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ּוּ"+this.state.letter4,
    nm: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ּוּ"+this.state.letter4+"ִים"  
  });
  if(this.state.letter4 == "כ"){
    this.setState({
      p3sm: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ך",
      ism: this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ך",
      ns: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ּוּ"+"ך"  
    }); 
  }
  if(this.state.letter4 == "מ"){
    this.setState({
      p3sm: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ם",
      ism: this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ם",
      ns: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ּוּ"+"ם"  
    }); 
  }
  if(this.state.letter4 == "נ"){
    this.setState({
      imw: this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"נָּה",
      p1m: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ַּ"+"נּוּ",
      p3sm: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ן",
      ism: this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ן",
      ns: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ּוּ"+"ן"  
    }); 
  }
  if(this.state.letter4 == "פ"){
    this.setState({
      p3sm: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ף",
      ism: this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ף",
      ns: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ּוּ"+"ף"  
    }); 
  }
  if(this.state.letter4 == "צ"){
    this.setState({
      p3sm: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ץ",
      ism: this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ץ",
      ns: this.state.letter1+"ִ"+this.state.letter2+"ְ"+this.state.letter3+"ּוּ"+"ץ"  
    }); 
  }
}
this.setState({
  inf:"לְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+this.state.letter4,
  nsm:"מְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+this.state.letter4,
  nsw:"מְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֶּ"+this.state.letter4+"ֶת",
  nmm:"מְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ְּ"+this.state.letter4+"ִים",
  nmw:"מְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ְּ"+this.state.letter4+"וֹת",
  f1s:"אֲ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+this.state.letter4,
  f2sm:"תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+this.state.letter4,
  f2sw:"תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ְּ"+this.state.letter4+"ִי",
  f3sm:"יְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+this.state.letter4,
  f3sw:"תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+this.state.letter4,
  f1m:"נְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+this.state.letter4,
  f2mm:"תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ְּ"+this.state.letter3+"וּ",
  f2mw:"תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+this.state.letter4+"ְנָה",
  f3m:"יְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ְּ"+this.state.letter4+"וּ",
  infS: "ל"+this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4,
  p1sS: this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4+"תי",
  p2smS: this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4+"ת",
  p2swS: this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4+"ת",
  p3smS: this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4,
  p3swS: this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4+"ה",
  p1mS: this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4+"נו",
  p2mmS: this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4+"תם",
  p2mwS: this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4+"תן",
  p3mS: this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4+"ו",
  nsmS: "מ"+this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4,
  nswS: "מ"+this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4+"ת",
  nmmS: "מ"+this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4+"ים",
  nmwS: "מ"+this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4+"ות",
  f1sS: "א"+this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4,
  f2smS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4,
  f2swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4+"י",
  f3smS: "י"+this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4,
  f3swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4,
  f1mS: "נ"+this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4,
  f2mmS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4+"ו",
  f2mwS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4+"נה",
  f3mS: "י"+this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4+"ו",
  ismS: this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4,
  iswS: this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4+"י",
  immS: this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4+"ו",
  imwS: this.state.letter1+this.state.letter2+this.state.letter3+this.state.letter4+"נה",
  nsS: this.state.letter1+this.state.letter2+this.state.letter3+"ו"+this.state.letter4,
  nmS: this.state.letter1+this.state.letter2+this.state.letter3+"ו"+this.state.letter4+"ים"  
});
if(this.state.letter4=="כ"){
  this.setState({
    inf:"לְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ך",
    nsm:"מְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ך",
    f1s:"אֲ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ך",
    f2sm:"תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ך",
    f3sm:"יְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ך",
    f3sw:"תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ך",
    f1m:"נְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ך",
    infS: "ל"+this.state.letter1+this.state.letter2+this.state.letter3+"ך",
    p3smS: this.state.letter1+this.state.letter2+this.state.letter3+"ך",
    nsmS: "מ"+this.state.letter1+this.state.letter2+this.state.letter3+"ך",
    f1sS: "א"+this.state.letter1+this.state.letter2+this.state.letter3+"ך",
    f2smS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"ך",
    f3smS: "י"+this.state.letter1+this.state.letter2+this.state.letter3+"ך",
    f3swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"ך",
    f1mS: "נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ך",
    ismS: this.state.letter1+this.state.letter2+this.state.letter3+"ך",
    nsS: this.state.letter1+this.state.letter2+this.state.letter3+"ו"+"ך"   
  });
}
if(this.state.letter4=="מ"){
  this.setState({
    inf:"לְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ם",
    nsm:"מְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ם",
    f1s:"אֲ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ם",
    f2sm:"תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ם",
    f3sm:"יְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ם",
    f3sw:"תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ם",
    f1m:"נְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ם",
    infS: "ל"+this.state.letter1+this.state.letter2+this.state.letter3+"ם",
    p3smS: this.state.letter1+this.state.letter2+this.state.letter3+"ם",
    nsmS: "מ"+this.state.letter1+this.state.letter2+this.state.letter3+"ם",
    f1sS: "א"+this.state.letter1+this.state.letter2+this.state.letter3+"ם",
    f2smS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"ם",
    f3smS: "י"+this.state.letter1+this.state.letter2+this.state.letter3+"ם",
    f3swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"ם",
    f1mS: "נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ם",
    ismS: this.state.letter1+this.state.letter2+this.state.letter3+"ם",
    nsS: this.state.letter1+this.state.letter2+this.state.letter3+"ו"+"ם"   
  });
}
if(this.state.letter4=="נ"){
  this.setState({
    imwS: this.state.letter1+this.state.letter2+this.state.letter3+"נה",
    f2mwS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"נה",
    p1mS: this.state.letter1+this.state.letter2+this.state.letter3+"נו",
    f2mw:"תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"נָּה",
    inf:"לְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ן",
    nsm:"מְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ן",
    f1s:"אֲ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ן",
    f2sm:"תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ן",
    f3sm:"יְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ן",
    f3sw:"תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ן",
    f1m:"נְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ן",
    infS: "ל"+this.state.letter1+this.state.letter2+this.state.letter3+"ן",
    p3smS: this.state.letter1+this.state.letter2+this.state.letter3+"ן",
    nsmS: "מ"+this.state.letter1+this.state.letter2+this.state.letter3+"ן",
    f1sS: "א"+this.state.letter1+this.state.letter2+this.state.letter3+"ן",
    f2smS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"ן",
    f3smS: "י"+this.state.letter1+this.state.letter2+this.state.letter3+"ן",
    f3swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"ן",
    f1mS: "נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ן",
    ismS: this.state.letter1+this.state.letter2+this.state.letter3+"ן",
    nsS: this.state.letter1+this.state.letter2+this.state.letter3+"ו"+"ן"   
  });
}

if(this.state.letter4=="פ"){
  this.setState({
    inf:"לְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ף",
    nsm:"מְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ף",
    f1s:"אֲ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ף",
    f2sm:"תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ף",
    f3sm:"יְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ף",
    f3sw:"תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ף",
    f1m:"נְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ף",
    infS: "ל"+this.state.letter1+this.state.letter2+this.state.letter3+"ף",
    p3smS: this.state.letter1+this.state.letter2+this.state.letter3+"ף",
    nsmS: "מ"+this.state.letter1+this.state.letter2+this.state.letter3+"ף",
    f1sS: "א"+this.state.letter1+this.state.letter2+this.state.letter3+"ף",
    f2smS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"ף",
    f3smS: "י"+this.state.letter1+this.state.letter2+this.state.letter3+"ף",
    f3swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"ף",
    f1mS: "נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ף",
    ismS: this.state.letter1+this.state.letter2+this.state.letter3+"ף",
    nsS: this.state.letter1+this.state.letter2+this.state.letter3+"ו"+"ף"   
  });
}
if(this.state.letter4=="צ"){
  this.setState({
    inf:"לְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ץ",
    nsm:"מְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ץ",
    f1s:"אֲ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ץ",
    f2sm:"תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ץ",
    f3sm:"יְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ץ",
    f3sw:"תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ץ",
    f1m:"נְ"+this.state.letter1+"ַ"+this.state.letter2+"ְ"+this.state.letter3+"ֵּ"+"ץ",
    infS: "ל"+this.state.letter1+this.state.letter2+this.state.letter3+"ץ",
    p3smS: this.state.letter1+this.state.letter2+this.state.letter3+"ץ",
    nsmS: "מ"+this.state.letter1+this.state.letter2+this.state.letter3+"ץ",
    f1sS: "א"+this.state.letter1+this.state.letter2+this.state.letter3+"ץ",
    f2smS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"ץ",
    f3smS: "י"+this.state.letter1+this.state.letter2+this.state.letter3+"ץ",
    f3swS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"ץ",
    f1mS: "נ"+this.state.letter1+this.state.letter2+this.state.letter3+"ץ",
    ismS: this.state.letter1+this.state.letter2+this.state.letter3+"ץ",
    nsS: this.state.letter1+this.state.letter2+this.state.letter3+"ו"+"ץ"   
  });
}
break
case "פיעל_כבי":
if(this.state.letter1 == "ב" || this.state.letter1 == "כ" || this.state.letter1 == "פ" || this.state.letter1 == "ת" || this.state.letter1 == "ת" || this.state.letter1 == "ת"){
  this.setState({
    p1s: this.state.letter1+"ִּ"+this.state.letter2+"ִּיתי",
    p2sm: this.state.letter1+"ִּ"+this.state.letter2+"ִּיתָ",
    p2sw: this.state.letter1+"ִּ"+this.state.letter2+"ִּית",
    p3sm: this.state.letter1+"ִּ"+this.state.letter2+"ָּה",
    p3sw: this.state.letter1+"ִּ"+this.state.letter2+"ְּתָה",
    p1m: this.state.letter1+"ִּ"+this.state.letter2+"ִּינוּ",
    p2mm: this.state.letter1+"ִּ"+this.state.letter2+"ִּיתֶם",
    p2mw: this.state.letter1+"ִּ"+this.state.letter2+"ִּיתֶן",
    p3m: this.state.letter1+"ִּ"+this.state.letter2+"ּוּ",
    ism: this.state.letter1+"ַּ"+this.state.letter2+"ֵּה",
    isw: this.state.letter1+"ַּ"+this.state.letter2+"ִּי",
    imm: this.state.letter1+"ַּ"+this.state.letter2+"ּוּ",
    imw: this.state.letter1+"ַּ"+this.state.letter2+"ֶּינָה",
    ns: this.state.letter1+"ִּ"+this.state.letter2+"ּוּי",
    nm: this.state.letter1+"ִּ"+this.state.letter2+"ּוּיִים" 
  });
}else{
  this.setState({
    p1s: this.state.letter1+"ִ"+this.state.letter2+"ִּיתי",
    p2sm: this.state.letter1+"ִ"+this.state.letter2+"ִּיתָ",
    p2sw: this.state.letter1+"ִ"+this.state.letter2+"ִּית",
    p3sm: this.state.letter1+"ִ"+this.state.letter2+"ָּה",
    p3sw: this.state.letter1+"ִ"+this.state.letter2+"ְּתָה",
    p1m: this.state.letter1+"ִ"+this.state.letter2+"ִּינוּ",
    p2mm: this.state.letter1+"ִ"+this.state.letter2+"ִּיתֶם",
    p2mw: this.state.letter1+"ִ"+this.state.letter2+"ִּיתֶן",
    p3m: this.state.letter1+"ִ"+this.state.letter2+"ּוּ",
    ism: this.state.letter1+"ַ"+this.state.letter2+"ֵּה",
    isw: this.state.letter1+"ַ"+this.state.letter2+"ִּי",
    imm: this.state.letter1+"ַ"+this.state.letter2+"ּוּ",
    imw: this.state.letter1+"ַ"+this.state.letter2+"ֶּינָה",
    ns: this.state.letter1+"ִ"+this.state.letter2+"ּוּי",
    nm: this.state.letter1+"ִ"+this.state.letter2+"ּוּיִים" 
  }); 
}
this.setState({
  inf:"לְ"+this.state.letter1+"ַ"+this.state.letter2+"ּוֹת",
  nsm:"מְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ה",
  nsw:"מְ"+this.state.letter1+"ַ"+this.state.letter2+"ָּה",
  nmm:"מְ"+this.state.letter1+"ַ"+this.state.letter2+"ִּים",
  nmw:"מְ"+this.state.letter1+"ַ"+this.state.letter2+"ּוֹת",
  f1s:"אֲ"+this.state.letter1+"ַ"+this.state.letter2+"ֶּה",
  f2sm:"תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֶּה",
  f2sw:"תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ִּי",
  f3sm:"יְ"+this.state.letter1+"ַ"+this.state.letter2+"ֶּה",
  f3sw:"תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֶּה",
  f1m:"נְ"+this.state.letter1+"ַ"+this.state.letter2+"ֶּה",
  f2mm:"תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֶּה",
  f2mw:"תְּ"+this.state.letter1+"ַ"+this.state.letter2+"ֶּינָה",
  f3m:"יְ"+this.state.letter1+"ַ"+this.state.letter2+"ֶּה",
  infS: "ל"+this.state.letter1+this.state.letter2+"ות",
  p1sS: this.state.letter1+"י"+this.state.letter2+"יתי",
  p2smS: this.state.letter1+"י"+this.state.letter2+"ית",
  p2swS: this.state.letter1+"י"+this.state.letter2+"ית",
  p3smS: this.state.letter1+"י"+this.state.letter2+"ה",
  p3swS: this.state.letter1+"י"+this.state.letter2+"תה",
  p1mS: this.state.letter1+"י"+this.state.letter2+"ינו",
  p2mmS: this.state.letter1+"י"+this.state.letter2+"יתם",
  p2mwS: this.state.letter1+"י"+this.state.letter2+"יתן",
  p3mS: this.state.letter1+"י"+this.state.letter2+"ו",
  nsmS: "מ"+this.state.letter1+this.state.letter2+"ה",
  nswS: "מ"+this.state.letter1+this.state.letter2+"ה",
  nmmS: "מ"+this.state.letter1+this.state.letter2+"ים",
  nmwS: "מ"+this.state.letter1+this.state.letter2+"ות",
  f1sS: "א"+this.state.letter1+this.state.letter2+"ה",
  f2smS: "ת"+this.state.letter1+this.state.letter2+"ה",
  f2swS: "ת"+this.state.letter1+this.state.letter2+"י",
  f3smS: "י"+this.state.letter1+this.state.letter2+"ה",
  f3swS: "ת"+this.state.letter1+this.state.letter2+"ה",
  f1mS: "נ"+this.state.letter1+this.state.letter2+"ה",
  f2mmS: "ת"+this.state.letter1+this.state.letter2+"ו",
  f2mwS: "ת"+this.state.letter1+this.state.letter2+"ינה",
  f3mS: "י"+this.state.letter1+this.state.letter2+"ו",
  ismS: this.state.letter1+this.state.letter2+"ה",
  iswS: this.state.letter1+this.state.letter2+"י",
  immS: this.state.letter1+this.state.letter2+"ו",
  imwS: this.state.letter1+this.state.letter2+"ינה",
  nsS: this.state.letter1+this.state.letter2+"וי",
  nmS: this.state.letter1+this.state.letter2+"ויים"  
});
break
case "פיעל_עודד":
  this.setState({
   inf: "לְ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+this.state.letter3,
   p1s: this.state.letter1+"וֹ"+this.state.letter2+"ַ"+this.state.letter3+"ְתִּי", 
   p2sm: this.state.letter1+"וֹ"+this.state.letter2+"ַ"+this.state.letter3+"ְתָּ",
   p2sw: this.state.letter1+"וֹ"+this.state.letter2+"ַ"+this.state.letter3+"ְתְּ",
   p3sm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+this.state.letter3,
   p3sw: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+this.state.letter3+"ָה",
   p1m: this.state.letter1+"וֹ"+this.state.letter2+"ַ"+this.state.letter3+"ְנוּ",
   p2mm: this.state.letter1+"וֹ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּם",
   p2mw: this.state.letter1+"וֹ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּן",
   p3m: this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
   nsm: "מְ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+this.state.letter3,
   nsw: "מְ"+this.state.letter1+"וֹ"+this.state.letter2+"ֶ"+this.state.letter3+"ֶת",
   nmm: "מְ"+this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"ִים",
   nmw: "מְ"+this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"וֹת",
   f1s: "אֲ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+this.state.letter3,
   f2sm: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+this.state.letter3,
   f2sw: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
   f3sm: "יְ"+this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3,
   f3sw: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+this.state.letter3,
   f1m: "נְ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+this.state.letter3,
   f2mm: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
   f2mw: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+this.state.letter3+"ְנָה",
   f3m: "יְ"+this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
   ism: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+this.state.letter3,
   isw: this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
   imm: this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
   imw: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+this.state.letter3+"ְנָה",
   ns: this.state.letter1+"ִי"+this.state.letter2+"וּ"+this.state.letter3,
   nm: this.state.letter1+"ִי"+this.state.letter2+"וּ"+this.state.letter3+"ִים", 
   infS: "ל"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
   p1sS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"תי",
   p2smS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
   p2swS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
   p3smS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
   p3swS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ה",
   p1mS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"נו",
   p2mmS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"תם",
   p2mwS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"תן",
   p3mS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ו",
   nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
   nswS: "מ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
   nmmS: "מ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ים",
   nmwS: "מ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ות",
   f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
   f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
   f2swS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"י",
   f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
   f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
   f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
   f2mmS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ו",
   f2mwS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"נה",
   f3mS: "י"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ו",
   ismS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
   iswS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"י",
   immS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ו",
   imwS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"נה",
   nsS: this.state.letter1+"י"+this.state.letter2+"ו"+this.state.letter3,
   nmS: this.state.letter1+"י"+this.state.letter2+"ו"+this.state.letter3+"ים"
  });
  if(this.state.letter3 == "נ"){
    this.setState({
    imwS: this.state.letter1+"ו"+this.state.letter2+"נה",
    f2mwS: "ת"+this.state.letter1+"ו"+this.state.letter2+"נה",
    p1mS: this.state.letter1+"ו"+this.state.letter2+"נו",  
    imw: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"נָּה",
    f2mw: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"נָּה",  
    p1m: this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"נּוּ",
    inf: "לְ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ן",
    p3sm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ן",
    nsm: "מְ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ן",
    f1s: "אֲ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ן",
    f2sm: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ן",
    f3sm: "יְ"+this.state.letter1+"וֹ"+this.state.letter2+"ְ"+"ן",
   f3sw: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ן",
   f1m: "נְ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ן",
   ism: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ן",
   ns: this.state.letter1+"ִי"+this.state.letter2+"וּ"+"ן",
   infS: "ל"+this.state.letter1+"ו"+this.state.letter2+"ן",
   p3smS: this.state.letter1+"ו"+this.state.letter2+"ן",
   nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+"ן",
   f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+"ן",
   f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ן",
   f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+"ן",
   f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ן",
   f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+"ן",
   ismS: this.state.letter1+"ו"+this.state.letter2+"ן",
   nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"ן"
  });
  }
  if(this.state.letter3 == "כ"){
    this.setState({
    inf: "לְ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ך",
    p3sm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ך",
    nsm: "מְ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ך",
    f1s: "אֲ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ך",
    f2sm: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ך",
    f3sm: "יְ"+this.state.letter1+"וֹ"+this.state.letter2+"ְ"+"ך",
   f3sw: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ך",
   f1m: "נְ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ך",
   ism: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ך",
   ns: this.state.letter1+"ִי"+this.state.letter2+"וּ"+"ך",
   infS: "ל"+this.state.letter1+"ו"+this.state.letter2+"ך",
   p3smS: this.state.letter1+"ו"+this.state.letter2+"ך",
   nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+"ך",
   f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+"ך",
   f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ך",
   f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+"ך",
   f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ך",
   f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+"ך",
   ismS: this.state.letter1+"ו"+this.state.letter2+"ך",
   nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"ך"
  });
}
if(this.state.letter3 == "מ"){
  this.setState({
  inf: "לְ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ם",
  p3sm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ם",
  nsm: "מְ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ם",
  f1s: "אֲ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ם",
  f2sm: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ם",
  f3sm: "יְ"+this.state.letter1+"וֹ"+this.state.letter2+"ְ"+"ם",
 f3sw: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ם",
 f1m: "נְ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ם",
 ism: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ם",
 ns: this.state.letter1+"ִי"+this.state.letter2+"וּ"+"ם",
 infS: "ל"+this.state.letter1+"ו"+this.state.letter2+"ם",
 p3smS: this.state.letter1+"ו"+this.state.letter2+"ם",
 nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+"ם",
 f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+"ם",
 f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ם",
 f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+"ם",
 f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ם",
 f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+"ם",
 ismS: this.state.letter1+"ו"+this.state.letter2+"ם",
 nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"ם"
});
}
if(this.state.letter3 == "פ"){
  this.setState({
  inf: "לְ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ף",
  p3sm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ף",
  nsm: "מְ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ף",
  f1s: "אֲ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ף",
  f2sm: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ף",
  f3sm: "יְ"+this.state.letter1+"וֹ"+this.state.letter2+"ְ"+"ף",
 f3sw: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ף",
 f1m: "נְ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ף",
 ism: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ף",
 ns: this.state.letter1+"ִי"+this.state.letter2+"וּ"+"ף",
 infS: "ל"+this.state.letter1+"ו"+this.state.letter2+"ף",
 p3smS: this.state.letter1+"ו"+this.state.letter2+"ף",
 nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+"ף",
 f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+"ף",
 f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ף",
 f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+"ף",
 f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ף",
 f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+"ף",
 ismS: this.state.letter1+"ו"+this.state.letter2+"ף",
 nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"ף"
});
}
if(this.state.letter3 == "צ"){
  this.setState({
  inf: "לְ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ץ",
  p3sm: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ץ",
  nsm: "מְ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ץ",
  f1s: "אֲ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ץ",
  f2sm: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ץ",
  f3sm: "יְ"+this.state.letter1+"וֹ"+this.state.letter2+"ְ"+"ץ",
 f3sw: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ץ",
 f1m: "נְ"+this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ץ",
 ism: this.state.letter1+"וֹ"+this.state.letter2+"ֵ"+"ץ",
 ns: this.state.letter1+"ִי"+this.state.letter2+"וּ"+"ץ",
 infS: "ל"+this.state.letter1+"ו"+this.state.letter2+"ץ",
 p3smS: this.state.letter1+"ו"+this.state.letter2+"ץ",
 nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+"ץ",
 f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+"ץ",
 f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ץ",
 f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+"ץ",
 f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ץ",
 f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+"ץ",
 ismS: this.state.letter1+"ו"+this.state.letter2+"ץ",
 nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"ץ"
});
}
break  
case "פועל_מטופל":
if(this.state.letter1 == "ב" || this.state.letter1 == "כ" || this.state.letter1 == "פ" || this.state.letter1 == "ת" || this.state.letter1 == "ת" || this.state.letter1 == "ת"){
  this.setState({
    p1s: this.state.letter1+"ֻּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתִּי",
    p2sm: this.state.letter1+"ֻּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתָּ",
    p2sw: this.state.letter1+"ֻּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתְּ",
    p3sm: this.state.letter1+"ֻּ"+this.state.letter2+"ַּ"+this.state.letter3,
    p3sw: this.state.letter1+"ֻּ"+this.state.letter2+"ְּ"+this.state.letter3+"ָה",
    p1m: this.state.letter1+"ֻּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנוּ",
    p2mm: this.state.letter1+"ֻּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּם",
    p2mw: this.state.letter1+"ֻּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּן",
    p3m: this.state.letter1+"ֻּ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
  });
  if(this.state.letter3 == "כ"){
    this.setState({
      p3sm: this.state.letter1+"ֻּ"+this.state.letter2+"ַּ"+"ך"
    });
  }
  if(this.state.letter3 == "נ"){
    this.setState({
      p1m: this.state.letter1+"ֻּ"+this.state.letter2+"ַּ"+"נּוּ",
      p3sm: this.state.letter1+"ֻּ"+this.state.letter2+"ַּ"+"ן"
    });
  }
  if(this.state.letter3 == "מ"){
    this.setState({
      p3sm: this.state.letter1+"ֻּ"+this.state.letter2+"ַּ"+"ם"
    });
  }
  if(this.state.letter3 == "פ"){
    this.setState({
      p3sm: this.state.letter1+"ֻּ"+this.state.letter2+"ַּ"+"ף"
    });
  }
  if(this.state.letter3 == "צ"){
    this.setState({
      p3sm: this.state.letter1+"ֻּ"+this.state.letter2+"ַּ"+"ץ"
    });
  }
}else{
  this.setState({
    p1s: this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתִּי",
    p2sm: this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתָּ",
    p2sw: this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתְּ",
    p3sm: this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+this.state.letter3,
    p3sw: this.state.letter1+"ֻ"+this.state.letter2+"ְּ"+this.state.letter3+"ָה",
    p1m: this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנוּ",
    p2mm: this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּם",
    p2mw: this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּן",
    p3m: this.state.letter1+"ֻ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
  });
  if(this.state.letter3 == "כ"){
    this.setState({
      p3sm: this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ך"
    });
  }
  if(this.state.letter3 == "נ"){
    this.setState({
      p1m: this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"נּוּ",
      p3sm: this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ן"
    });
  }
  if(this.state.letter3 == "מ"){
    this.setState({
      p3sm: this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ם"
    });
  }
  if(this.state.letter3 == "פ"){
    this.setState({
      p3sm: this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ף"
    });
  }
  if(this.state.letter3 == "צ"){
    this.setState({
      p3sm: this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ץ"
    });
  }
}
this.setState({
  nsm: "מְ"+this.state.letter1+"ֻ"+this.state.letter2+"ָּ"+this.state.letter3,
  nsw: "מְ"+this.state.letter1+"ֻ"+this.state.letter2+"ֶּ"+this.state.letter3+"ֶת",
  nmm: "מְ"+this.state.letter1+"ֻ"+this.state.letter2+"ָּ"+this.state.letter3+"ִים",
  nmw: "מְ"+this.state.letter1+"ֻ"+this.state.letter2+"ָּ"+this.state.letter3+"וֹת",
  f1s: "אֲ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+this.state.letter3,
  f2sm: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+this.state.letter3,
  f2sw: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
  f3sm: "יְ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+this.state.letter3,
  f3sw: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+this.state.letter3,
  f1m: "נְ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+this.state.letter3,
  f2mm: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
  f2mw: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנָה",
  f3m: "יְ"+this.state.letter1+"ֻ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
  p1sS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"תי",
  p2smS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
  p2swS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
  p3smS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
  p3swS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ה",
  p1mS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"נו",
  p2mmS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"תם",
  p2mwS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"תן",
  p3mS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ו",
  nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
  nswS: "מ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
  nmmS: "מ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ים",
  nmwS: "מ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ות",
  f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
  f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
  f2swS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"י",
  f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
  f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
  f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
  f2mmS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ו",
  f2mwS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"נה",
  f3mS: "י"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ו"
});
if(this.state.letter3 == "כ"){
  this.setState({
    nsm: "מְ"+this.state.letter1+"ֻ"+this.state.letter2+"ָּ"+"ך",
    f1s: "אֲ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ך",
    f2sm: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ך",
    f3sm: "יְ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ך",
    f3sw: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ך",
    f1m: "נְ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ך",
    p3smS: this.state.letter1+"ו"+this.state.letter2+"ך",
    nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+"ך",
    f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+"ך",
    f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ך",
    f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+"ך",
    f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ך",
    f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+"ך"
  });
}
if(this.state.letter3 == "מ"){
  this.setState({
    nsm: "מְ"+this.state.letter1+"ֻ"+this.state.letter2+"ָּ"+"ם",
    f1s: "אֲ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ם",
    f2sm: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ם",
    f3sm: "יְ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ם",
    f3sw: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ם",
    f1m: "נְ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ם",
    p3smS: this.state.letter1+"ו"+this.state.letter2+"ם",
    nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+"ם",
    f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+"ם",
    f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ם",
    f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+"ם",
    f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ם",
    f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+"ם"
  });
}
if(this.state.letter3 == "נ"){
  this.setState({
    f2mwS: "ת"+this.state.letter1+"ו"+this.state.letter2+"נה",
    p1mS: this.state.letter1+"ו"+this.state.letter2+"נו",
    f2mw: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"נָּה",
    nsm: "מְ"+this.state.letter1+"ֻ"+this.state.letter2+"ָּ"+"ן",
    f1s: "אֲ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ן",
    f2sm: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ן",
    f3sm: "יְ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ן",
    f3sw: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ן",
    f1m: "נְ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ן",
    p3smS: this.state.letter1+"ו"+this.state.letter2+"ן",
    nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+"ן",
    f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+"ן",
    f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ן",
    f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+"ן",
    f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ן",
    f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+"ן"
  });
}
if(this.state.letter3 == "פ"){
  this.setState({
    nsm: "מְ"+this.state.letter1+"ֻ"+this.state.letter2+"ָּ"+"ף",
    f1s: "אֲ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ף",
    f2sm: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ף",
    f3sm: "יְ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ף",
    f3sw: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ף",
    f1m: "נְ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ף",
    p3smS: this.state.letter1+"ו"+this.state.letter2+"ף",
    nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+"ף",
    f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+"ף",
    f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ף",
    f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+"ף",
    f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ף",
    f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+"ף"
  });
}
if(this.state.letter3 == "צ"){
  this.setState({
    nsm: "מְ"+this.state.letter1+"ֻ"+this.state.letter2+"ָּ"+"ץ",
    f1s: "אֲ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ץ",
    f2sm: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ץ",
    f3sm: "יְ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ץ",
    f3sw: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ץ",
    f1m: "נְ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+"ץ",
    p3smS: this.state.letter1+"ו"+this.state.letter2+"ץ",
    nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+"ץ",
    f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+"ץ",
    f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ץ",
    f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+"ץ",
    f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ץ",
    f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+"ץ"
  });
}
break
case "פועל_מעודד":
    this.setState({ 
      p1s: this.state.letter1+"וֹ"+this.state.letter2+"ַ"+this.state.letter3+"ְתִּי",
      p2sm: this.state.letter1+"וֹ"+this.state.letter2+"ַ"+this.state.letter3+"ְתָּ",
      p2sw: this.state.letter1+"וֹ"+this.state.letter2+"ַ"+this.state.letter3+"ְתְּ",
      p3sm: this.state.letter1+"וֹ"+this.state.letter2+"ַ"+this.state.letter3,
      p3sw: this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"ָה",
      p1m: this.state.letter1+"וֹ"+this.state.letter2+"ַ"+this.state.letter3+"ְנוּ",
      p2mm: this.state.letter1+"וֹ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּם",
      p2mw: this.state.letter1+"וֹ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּן",
      p3m: this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
      nsm: "מְ"+this.state.letter1+"וֹ"+this.state.letter2+"ָ"+this.state.letter3,
      nsw: "מְ"+this.state.letter1+"וֹ"+this.state.letter2+"ֶ"+this.state.letter3+"ֶת",
      nmm: "מְ"+this.state.letter1+"וֹ"+this.state.letter2+"ָ"+this.state.letter3+"ִים",
      nmw: "מְ"+this.state.letter1+"וֹ"+this.state.letter2+"ָ"+this.state.letter3+"וֹת",
      f1s: "אֲ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+this.state.letter3,
      f2sm: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+this.state.letter3,
      f2sw: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
      f3sm: "יְ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+this.state.letter3,
      f3sw: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+this.state.letter3,
      f1m: "נְ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+this.state.letter3,
      f2mm: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
      f2mw: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+this.state.letter3+"ְנָה",
      f3m: "יְ"+this.state.letter1+"וֹ"+this.state.letter2+"ְ"+this.state.letter3+"וּ", 
      p1sS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"תי",
      p2smS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
      p2swS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
      p3smS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      p3swS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ה",
      p1mS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"נו",
      p2mmS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"תם",
      p2mwS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"תן",
      p3mS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ו",
      nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      nswS: "מ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
      nmmS: "מ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ים",
      nmwS: "מ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ות",
      f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      f2swS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"י",
      f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      f2mmS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ו",
      f2mwS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"נה",
      f3mS: "י"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ו"
     });
     if(this.state.letter3 == "נ"){
      this.setState({
      f2mwS: "ת"+this.state.letter1+"ו"+this.state.letter2+"נה",
      p1mS: this.state.letter1+"ו"+this.state.letter2+"נו",  
      f2mw: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"נָּה",  
      p1m: this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"נּוּ",
      p3sm: this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ן",
      nsm: "מְ"+this.state.letter1+"וֹ"+this.state.letter2+"ָ"+"ן",
      f1s: "אֲ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ן",
      f2sm: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ן",
      f3sm: "יְ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ן",
      f3sw: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ן",
      f1m: "נְ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ן",
      p3smS: this.state.letter1+"ו"+this.state.letter2+"ן",
      nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+"ן",
      f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+"ן",
      f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ן",
      f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+"ן",
      f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ן",
      f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+"ן"
    });
    }
    if(this.state.letter3 == "כ"){
      this.setState({
        p3sm: this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ך",
        nsm: "מְ"+this.state.letter1+"וֹ"+this.state.letter2+"ָ"+"ך",
        f1s: "אֲ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ך",
        f2sm: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ך",
        f3sm: "יְ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ך",
        f3sw: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ך",
        f1m: "נְ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ך",
        p3smS: this.state.letter1+"ו"+this.state.letter2+"ך",
        nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+"ך",
        f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+"ך",
        f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ך",
        f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+"ך",
        f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ך",
        f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+"ך"
    });
  }
  if(this.state.letter3 == "מ"){
    this.setState({
      p3sm: this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ם",
      nsm: "מְ"+this.state.letter1+"וֹ"+this.state.letter2+"ָ"+"ם",
      f1s: "אֲ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ם",
      f2sm: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ם",
      f3sm: "יְ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ם",
      f3sw: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ם",
      f1m: "נְ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ם",
      p3smS: this.state.letter1+"ו"+this.state.letter2+"ם",
      nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+"ם",
      f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+"ם",
      f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ם",
      f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+"ם",
      f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ם",
      f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+"ם",
      ismS: this.state.letter1+"ו"+this.state.letter2+"ם",
      nsS: this.state.letter1+"י"+this.state.letter2+"ו"+"ם"
  });
  }
  if(this.state.letter3 == "פ"){
    this.setState({
      p3sm: this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ף",
      nsm: "מְ"+this.state.letter1+"וֹ"+this.state.letter2+"ָ"+"ף",
      f1s: "אֲ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ף",
      f2sm: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ף",
      f3sm: "יְ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ף",
      f3sw: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ף",
      f1m: "נְ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ף",
      p3smS: this.state.letter1+"ו"+this.state.letter2+"ף",
      nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+"ף",
      f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+"ף",
      f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ף",
      f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+"ף",
      f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ף",
      f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+"ף"
    });
  }
  if(this.state.letter3 == "צ"){
    this.setState({
      p3sm: this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ץ",
      nsm: "מְ"+this.state.letter1+"וֹ"+this.state.letter2+"ָ"+"ץ",
      f1s: "אֲ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ץ",
      f2sm: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ץ",
      f3sm: "יְ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ץ",
      f3sw: "תְּ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ץ",
      f1m: "נְ"+this.state.letter1+"וֹ"+this.state.letter2+"ַ"+"ץ",
      p3smS: this.state.letter1+"ו"+this.state.letter2+"ץ",
      nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+"ץ",
      f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+"ץ",
      f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ץ",
      f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+"ץ",
      f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ץ",
      f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+"ץ"
  });
  }      
break
case "פועל_מרוצה":
    if(this.state.letter1 == "ב" || this.state.letter1 == "כ" || this.state.letter1 == "פ" || this.state.letter1 == "ת" ){
      this.setState({
        p1s: this.state.letter1+"ֻּ"+this.state.letter2+"ֵּיתִי",
        p2sm: this.state.letter1+"ֻּ"+this.state.letter2+"ֵּיתָ",
        p2sw: this.state.letter1+"ֻּ"+this.state.letter2+"ֵּית",
        p3sm: this.state.letter1+"ֻּ"+this.state.letter2+"ָּה",
        p3sw: this.state.letter1+"ֻּ"+this.state.letter2+"ְּתָה",
        p1m: this.state.letter1+"ֻּ"+this.state.letter2+"ֵּינוּ",
        p2mm: this.state.letter1+"ֻּ"+this.state.letter2+"ֵּיתֶם",
        p2mw: this.state.letter1+"ֻּ"+this.state.letter2+"ֵּיתֶן",
        p3m: this.state.letter1+"ֻּ"+this.state.letter2+"ּוּ"
      });  
    }else{
      this.setState({  
        p1s: this.state.letter1+"ֻ"+this.state.letter2+"ֵּיתִי",
        p2sm: this.state.letter1+"ֻ"+this.state.letter2+"ֵּיתָ",
        p2sw: this.state.letter1+"ֻ"+this.state.letter2+"ֵּית",
        p3sm: this.state.letter1+"ֻ"+this.state.letter2+"ָּה",
        p3sw: this.state.letter1+"ֻ"+this.state.letter2+"ְּתָה",
        p1m: this.state.letter1+"ֻ"+this.state.letter2+"ֵּינוּ",
        p2mm: this.state.letter1+"ֻ"+this.state.letter2+"ֵּיתֶם",
        p2mw: this.state.letter1+"ֻ"+this.state.letter2+"ֵּיתֶן",
        p3m: this.state.letter1+"ֻ"+this.state.letter2+"ּוּ"
      });  
    }
    this.setState({
      nsm: "מְ"+this.state.letter1+"ֻ"+this.state.letter2+"ֶּה",
      nsw: "מְ"+this.state.letter1+"ֻ"+this.state.letter2+"ָּה",
      nmm: "מְ"+this.state.letter1+"ֻ"+this.state.letter2+"ִּים",
      nmw: "מְ"+this.state.letter1+"ֻ"+this.state.letter2+"ּוֹת",
      f1s: "אֲ"+this.state.letter1+"ֻ"+this.state.letter2+"ֶּה",
      f2sm: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ֶּה",
      f2sw: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ִּי",
      f3sm: "יְ"+this.state.letter1+"ֻ"+this.state.letter2+"ֶּה",
      f3sw: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ֶּה",
      f1m: "נְ"+this.state.letter1+"ֻ"+this.state.letter2+"ֶּה",
      f2mm: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ּוּ",
      f2mw: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ֶּינָה",
      f3m: "יְ"+this.state.letter1+"ֻ"+this.state.letter2+"ּוּ",
      p1sS: this.state.letter1+"ו"+this.state.letter2+"יתי",
      p2smS: this.state.letter1+"ו"+this.state.letter2+"ית",
      p2swS: this.state.letter1+"ו"+this.state.letter2+"ית",
      p3smS: this.state.letter1+"ו"+this.state.letter2+"ה",
      p3swS: this.state.letter1+"ו"+this.state.letter2+"תה",
      p1mS: this.state.letter1+"ו"+this.state.letter2+"ינו",
      p2mmS: this.state.letter1+"ו"+this.state.letter2+"יתם",
      p2mwS: this.state.letter1+"ו"+this.state.letter2+"יתן",
      p3mS: this.state.letter1+"ו"+this.state.letter2+"ו",
      nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+"ה",
      nswS: "מ"+this.state.letter1+"ו"+this.state.letter2+"ה",
      nmmS: "מ"+this.state.letter1+"ו"+this.state.letter2+"ים",
      nmwS: "מ"+this.state.letter1+"ו"+this.state.letter2+"ות",
      f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+"ה",
      f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ה",
      f2swS: "ת"+this.state.letter1+"ו"+this.state.letter2+"י",
      f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+"ה",
      f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ה",
      f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+"ה",
      f2mmS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ו",
      f2mwS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ינה",
      f3mS: "י"+this.state.letter1+"ו"+this.state.letter2+"ו"
    });  
break
case "פועל_ממולא":
    if(this.state.letter1 == "ב" || this.state.letter1 == "כ" || this.state.letter1 == "פ" || this.state.letter1 == "ת" ){
      this.setState({
        p1s: this.state.letter1+"ֻּ"+this.state.letter2+"ֵּ"+this.state.letter3+"תִי",
        p2sm: this.state.letter1+"ֻּ"+this.state.letter2+"ֵּ"+this.state.letter3+"תָ",
        p2sw: this.state.letter1+"ֻּ"+this.state.letter2+"ֵּ"+this.state.letter3+"ת",
        p3sm: this.state.letter1+"ֻּ"+this.state.letter2+"ָּ"+this.state.letter3,
        p3sw: this.state.letter1+"ֻּ"+this.state.letter2+"ְּ"+this.state.letter3+"ָה",
        p1m: this.state.letter1+"ֻּ"+this.state.letter2+"ֵּ"+this.state.letter3+"נוּ",
        p2mm: this.state.letter1+"ֻּ"+this.state.letter2+"ֵּ"+this.state.letter3+"תֵם",
        p2mw: this.state.letter1+"ֻּ"+this.state.letter2+"ֵּ"+this.state.letter3+"תֵן",
        p3m: this.state.letter1+"ֻּ"+this.state.letter2+"ֵּ"+this.state.letter3+"וּ"
      });
    }else{
      this.setState({
        p1s: this.state.letter1+"ֻ"+this.state.letter2+"ֵּ"+this.state.letter3+"תִי",
        p2sm: this.state.letter1+"ֻ"+this.state.letter2+"ֵּ"+this.state.letter3+"תָ",
        p2sw: this.state.letter1+"ֻ"+this.state.letter2+"ֵּ"+this.state.letter3+"ת",
        p3sm: this.state.letter1+"ֻ"+this.state.letter2+"ָּ"+this.state.letter3,
        p3sw: this.state.letter1+"ֻ"+this.state.letter2+"ְּ"+this.state.letter3+"ָה",
        p1m: this.state.letter1+"ֻ"+this.state.letter2+"ֵּ"+this.state.letter3+"נוּ",
        p2mm: this.state.letter1+"ֻ"+this.state.letter2+"ֵּ"+this.state.letter3+"תֵם",
        p2mw: this.state.letter1+"ֻ"+this.state.letter2+"ֵּ"+this.state.letter3+"תֵן",
        p3m: this.state.letter1+"ֻ"+this.state.letter2+"ֵּ"+this.state.letter3+"וּ"
      });  
    }
    this.setState({
      nsm: "מְ"+this.state.letter1+"ֻ"+this.state.letter2+"ָּ"+this.state.letter3,
      nsw: "מְ"+this.state.letter1+"ֻ"+this.state.letter2+"ֵּ"+this.state.letter3+"ת",
      nmm: "מְ"+this.state.letter1+"ֻ"+this.state.letter2+"ָּ"+this.state.letter3+"ִים",
      nmw: "מְ"+this.state.letter1+"ֻ"+this.state.letter2+"ָּ"+this.state.letter3+"וֹת",
      f1s: "אֲ"+this.state.letter1+"ֻ"+this.state.letter2+"ָּ"+this.state.letter3,
      f2sm: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ָּ"+this.state.letter3,
      f2sw: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
      f3sm: "יְ"+this.state.letter1+"ֻ"+this.state.letter2+"ָּ"+this.state.letter3,
      f3sw: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ָּ"+this.state.letter3,
      f1m: "נְ"+this.state.letter1+"ֻ"+this.state.letter2+"ָּ"+this.state.letter3,
      f2mm: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
      f2mw: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ֶּ"+this.state.letter3+"נָה",
      f3m: "יְ"+this.state.letter1+"ֻ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
      p1sS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"תי",
      p2smS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
      p2swS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
      p3smS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      p3swS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ה",
      p1mS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"נו",
      p2mmS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"תם",
      p2mwS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"תן",
      p3mS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ו",
      nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      nswS: "מ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
      nmmS: "מ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ים",
      nmwS: "מ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ות",
      f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      f2swS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"י",
      f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      f2mmS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ו",
      f2mwS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"נה",
      f3mS: "י"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ו"
    });
break
case "פועל_מבוצע":
    if(this.state.letter1 == "ב" || this.state.letter1 == "כ" || this.state.letter1 == "פ" || this.state.letter1 == "ת" || this.state.letter1 == "ת" || this.state.letter1 == "ת" || this.state.letter1 == "ת" ){
      this.setState({
        p1s: this.state.letter1+"ֻּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתִּי",
        p2sm: this.state.letter1+"ֻּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתָּ",
        p2sw: this.state.letter1+"ֻּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתְּ",
        p3sm: this.state.letter1+"ֻּ"+this.state.letter2+"ַּ"+this.state.letter3,
        p3sw: this.state.letter1+"ֻּ"+this.state.letter2+"ְּ"+this.state.letter3+"ָה",
        p1m: this.state.letter1+"ֻּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנוּ",
        p2mm: this.state.letter1+"ֻּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּם",
        p2mw: this.state.letter1+"ֻּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּן",
        p3m: this.state.letter1+"ֻּ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ"
      });
    }else{
      this.setState({
        p1s: this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתִּי",
        p2sm: this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתָּ",
        p2sw: this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתְּ",
        p3sm: this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+this.state.letter3,
        p3sw: this.state.letter1+"ֻ"+this.state.letter2+"ְּ"+this.state.letter3+"ָה",
        p1m: this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנוּ",
        p2mm: this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּם",
        p2mw: this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּן",
        p3m: this.state.letter1+"ֻ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ"
      });      
    }
    this.setState({
      nsm: "מְ"+this.state.letter1+"ֻ"+this.state.letter2+"ָּ"+this.state.letter3,
      nsw: "מְ"+this.state.letter1+"ֻ"+this.state.letter2+"ָּ"+this.state.letter3+"ָת",
      nmm: "מְ"+this.state.letter1+"ֻ"+this.state.letter2+"ָּ"+this.state.letter3+"ים",
      nmw: "מְ"+this.state.letter1+"ֻ"+this.state.letter2+"ָּ"+this.state.letter3+"וֹת",
      f1s: "אֲ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+this.state.letter3,
      f2sm: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+this.state.letter3,
      f2sw: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
      f3sm: "יְ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+this.state.letter3,
      f3sw: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+this.state.letter3,
      f1m: "נְ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+this.state.letter3,
      f2mm: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
      f2mw: "תְּ"+this.state.letter1+"ֻ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנָה",
      f3m: "יְ"+this.state.letter1+"ֻ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
      p1sS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"תי",
      p2smS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
      p2swS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
      p3smS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      p3swS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ה",
      p1mS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"נו",
      p2mmS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"תם",
      p2mwS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"תן",
      p3mS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ו",
      nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      nswS: "מ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
      nmmS: "מ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ים",
      nmwS: "מ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ות",
      f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      f2swS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"י",
      f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      f2mmS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ו",
      f2mwS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"נה",
      f3mS: "י"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ו"
    });  
break
case "פועל_מפורט":
    if(this.state.letter1 == "ב" || this.state.letter1 == "כ" || this.state.letter1 == "פ" || this.state.letter1 == "ת" || this.state.letter1 == "ת" || this.state.letter1 == "ת" || this.state.letter1 == "ת" ){
      this.setState({
        p1s: this.state.letter1+"ּ"+this.state.letter2+"ַ"+this.state.letter3+"ְתִּי",
        p2sm: this.state.letter1+"ּ"+this.state.letter2+"ַ"+this.state.letter3+"ְתָּ",
        p2sw: this.state.letter1+"ֹּ"+this.state.letter2+"ַ"+this.state.letter3+"ְתְּ",
        p3sm: this.state.letter1+"ֹּ"+this.state.letter2+"ַ"+this.state.letter3,
        p3sw: this.state.letter1+"ֹּ"+this.state.letter2+"ְ"+this.state.letter3+"ָה",
        p1m: this.state.letter1+"ֹּ"+this.state.letter2+"ַ"+this.state.letter3+"ְנוּ",
        p2mm: this.state.letter1+"ֹּ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּם",
        p2mw: this.state.letter1+"ֹּ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּן",
        p3m: this.state.letter1+"ֹּ"+this.state.letter2+"ְ"+this.state.letter3+"וּ"
      });
        if(this.state.letter3 == "נ"){
          this.setState({
            p1m: this.state.letter1+"ֹּ"+this.state.letter2+"ַ"+"נּוּ",
            p3sm: this.state.letter1+"ֹּ"+this.state.letter2+"ַ"+"ן"
          });        
        }
        if(this.state.letter3 == "כ"){
          this.setState({
            p3sm: this.state.letter1+"ֹּ"+this.state.letter2+"ַ"+"ך"
          });        
        }
        if(this.state.letter3 == "מ"){
          this.setState({
            p3sm: this.state.letter1+"ֹּ"+this.state.letter2+"ַ"+"ם"
          });
        }        
        if(this.state.letter3 == "פ"){
          this.setState({
            p3sm: this.state.letter1+"ֹּ"+this.state.letter2+"ַ"+"ף"
          });        
        }
        if(this.state.letter3 == "צ"){
          this.setState({
            p3sm: this.state.letter1+"ֹּ"+this.state.letter2+"ַ"+"ץ"
          });        
        }
    }else{
      this.setState({
        p1s: this.state.letter1+"ֹ"+this.state.letter2+"ַ"+this.state.letter3+"ְתִּי",
        p2sm: this.state.letter1+"ֹ"+this.state.letter2+"ַ"+this.state.letter3+"ְתָּ",
        p2sw: this.state.letter1+"ֹ"+this.state.letter2+"ַ"+this.state.letter3+"ְתְּ",
        p3sm: this.state.letter1+"ֹ"+this.state.letter2+"ַ"+this.state.letter3,
        p3sw: this.state.letter1+"ֹ"+this.state.letter2+"ְ"+this.state.letter3+"ָה",
        p1m: this.state.letter1+"ֹ"+this.state.letter2+"ַ"+this.state.letter3+"ְנוּ",
        p2mm: this.state.letter1+"ֹ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּם",
        p2mw: this.state.letter1+"ֹ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּן",
        p3m: this.state.letter1+"ֹ"+this.state.letter2+"ְ"+this.state.letter3+"וּ"
      });
      if(this.state.letter3 == "נ"){
        this.setState({
          p1m: this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"נּוּ",
          p3sm: this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ן"
        });        
      }
      if(this.state.letter3 == "כ"){
        this.setState({
          p3sm: this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ך"
        });        
      }
      if(this.state.letter3 == "מ"){
        this.setState({
          p3sm: this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ם"
        });        
      }
      if(this.state.letter3 == "פ"){
        this.setState({
          p3sm: this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ף"
        });        
      }
      if(this.state.letter3 == "צ"){
        this.setState({
          p3sm: this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ץ"
        });        
      }      
    }
    this.setState({
      nsm: "מְ"+this.state.letter1+"ֹ"+this.state.letter2+"ָ"+this.state.letter3,
      nsw: "מְ"+this.state.letter1+"ֹ"+this.state.letter2+"ֶ"+this.state.letter3+"ֶת",
      nmm: "מְ"+this.state.letter1+"ֹ"+this.state.letter2+"ָ"+this.state.letter3+"ִים",
      nmw: "מְ"+this.state.letter1+"ֹ"+this.state.letter2+"ָ"+this.state.letter3+"וֹת",
      f1s: "אֲ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+this.state.letter3,
      f2sm: "תְּ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+this.state.letter3,
      f2sw: "תְּ"+this.state.letter1+"ֹ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
      f3sm: "יְ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+this.state.letter3,
      f3sw: "תְּ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+this.state.letter3,
      f1m: "נְ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+this.state.letter3,
      f2mm: "תְּ"+this.state.letter1+"ֹ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
      f2mw: "תְּ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+this.state.letter3+"ְנָה",
      f3m: "יְ"+this.state.letter1+"ֹ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
      p1sS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"תי",
      p2smS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
      p2swS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
      p3smS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      p3swS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ה",
      p1mS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"נו",
      p2mmS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"תם",
      p2mwS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"תן",
      p3mS: this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ו",
      nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      nswS: "מ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ת",
      nmmS: "מ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ים",
      nmwS: "מ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ות",
      f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      f2swS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"י",
      f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3,
      f2mmS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ו",
      f2mwS: "ת"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"נה",
      f3mS: "י"+this.state.letter1+"ו"+this.state.letter2+this.state.letter3+"ו"
    });
    if(this.state.letter3 == "נ"){
      this.setState({
        f2mwS: "ת"+this.state.letter1+"ו"+this.state.letter2+"נה",
        p1mS: this.state.letter1+"ו"+this.state.letter2+"נו",
        f2mw: "תְּ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"נָּה",
        nsm: "מְ"+this.state.letter1+"ֹ"+this.state.letter2+"ָ"+"ן",
        f1s: "אֲ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ן",
        f2sm: "תְּ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ן",
        f3sm: "יְ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ן",
        f3sw: "תְּ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ן",
        f1m: "נְ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ן",
        p3smS: this.state.letter1+"ו"+this.state.letter2+"ן",
        nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+"ן",
        f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+"ן",
        f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ן",
        f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+"ן",
        f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ן",
        f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+"ן"
      });
    }
    if(this.state.letter3 == "כ"){
      this.setState({
        nsm: "מְ"+this.state.letter1+"ֹ"+this.state.letter2+"ָ"+"ך",
        f1s: "אֲ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ך",
        f2sm: "תְּ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ך",
        f3sm: "יְ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ך",
        f3sw: "תְּ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ך",
        f1m: "נְ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ך",
        p3smS: this.state.letter1+"ו"+this.state.letter2+"ך",
        nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+"ך",
        f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+"ך",
        f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ך",
        f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+"ך",
        f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ך",
        f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+"ך"
      });
    }  
    if(this.state.letter3 == "ם"){
      this.setState({
        nsm: "מְ"+this.state.letter1+"ֹ"+this.state.letter2+"ָ"+"ם",
        f1s: "אֲ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ם",
        f2sm: "תְּ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ם",
        f3sm: "יְ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ם",
        f3sw: "תְּ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ם",
        f1m: "נְ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ם",
        p3smS: this.state.letter1+"ו"+this.state.letter2+"ם",
        nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+"ם",
        f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+"ם",
        f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ם",
        f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+"ם",
        f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ם",
        f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+"ם"
      });
    }
    if(this.state.letter3 == "פ"){
      this.setState({
        nsm: "מְ"+this.state.letter1+"ֹ"+this.state.letter2+"ָ"+"ף",
        f1s: "אֲ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ף",
        f2sm: "תְּ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ף",
        f3sm: "יְ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ף",
        f3sw: "תְּ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ף",
        f1m: "נְ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ף",
        p3smS: this.state.letter1+"ו"+this.state.letter2+"ף",
        nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+"ף",
        f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+"ף",
        f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ף",
        f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+"ף",
        f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ף",
        f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+"ף"
      });
    }
    if(this.state.letter3 == "צ"){
      this.setState({
        nsm: "מְ"+this.state.letter1+"ֹ"+this.state.letter2+"ָ"+"ץ",
        f1s: "אֲ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ץ",
        f2sm: "תְּ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ץ",
        f3sm: "יְ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ץ",
        f3sw: "תְּ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ץ",
        f1m: "נְ"+this.state.letter1+"ֹ"+this.state.letter2+"ַ"+"ץ",
        p3smS: this.state.letter1+"ו"+this.state.letter2+"ץ",
        nsmS: "מ"+this.state.letter1+"ו"+this.state.letter2+"ץ",
        f1sS: "א"+this.state.letter1+"ו"+this.state.letter2+"ץ",
        f2smS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ץ",
        f3smS: "י"+this.state.letter1+"ו"+this.state.letter2+"ץ",
        f3swS: "ת"+this.state.letter1+"ו"+this.state.letter2+"ץ",
        f1mS: "נ"+this.state.letter1+"ו"+this.state.letter2+"ץ"
      });
    }
break
case "הפעיל_הזמין":
if(this.state.letter1 == "ב" || this.state.letter1 == "כ" || this.state.letter1 == "פ" || this.state.letter1 == "ת" || this.state.letter1 == "ת" || this.state.letter1 == "ת" || this.state.letter1 == "ת" ){
  this.setState({
    inf: "לְהַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+this.state.letter3, 
    p1s: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתִּי",
    p2sm: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתָּ",
    p2sw: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתְּ",
    p3sm: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+this.state.letter3,
    p3sw: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+this.state.letter3+"ָה",
    p1m: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנוּ",
    p2mm: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּם",
    p2mw: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּן",
    p3m: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+this.state.letter3+"וּ",
    nsm: "מַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+this.state.letter3,
    nsw: "מַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+this.state.letter3+"ָה",
    nmm: "מַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+this.state.letter3+"ִים",
    nmw: "מַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+this.state.letter3+"וֹת",
    f1s: "אַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+this.state.letter3,
    f2sm: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+this.state.letter3,
    f2sw: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+this.state.letter3+"ִי",
    f3sm: "יַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+this.state.letter3,
    f3sw: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+this.state.letter3,
    f1m: "נַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+this.state.letter3,
    f2mm: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+this.state.letter3+"וּ",
    f2mw: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ֵּ"+this.state.letter3+"ְנָה",
    f3m: "יַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+this.state.letter3+"וּ",
    ism: "הַ"+this.state.letter1+"ְ"+this.state.letter2+"ֵּ"+this.state.letter3,
    isw: "הַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+this.state.letter3+"ִי",
    imm: "הַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+this.state.letter3+"וּ",
    imw: "הַ"+this.state.letter1+"ְ"+this.state.letter2+"ֵּ"+this.state.letter3+"ְנָה",
    ns: "הַ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+this.state.letter3+"ָה",
    nm: "הַ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+this.state.letter3+"וֹת"
  });
  if(this.state.letter3 == "כ"){
    this.setState({
      inf: "לְהַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ך", 
      p3sm: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ך",
      nsm: "מַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ך",
      f1s: "אַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ך",
      f2sm: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ך",
      f3sm: "יַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ך",
      f3sw: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ך",
      f1m: "נַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ך",
      ism: "הַ"+this.state.letter1+"ְ"+this.state.letter2+"ֵּ"+"ך"
    });    
  }
  if(this.state.letter3 == "מ"){
    this.setState({
      inf: "לְהַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ם", 
      p3sm: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ם",
      nsm: "מַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ם",
      f1s: "אַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ם",
      f2sm: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ם",
      f3sm: "יַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ם",
      f3sw: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ם",
      f1m: "נַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ם",
      ism: "הַ"+this.state.letter1+"ְ"+this.state.letter2+"ֵּ"+"ם"
    });    
  }
  if(this.state.letter3 == "נ"){
    this.setState({
      imw: "הַ"+this.state.letter1+"ְ"+this.state.letter2+"ֵּ"+"נָּה",
      f2mw: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ֵּ"+"נָּה",
      p1m: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"נּוּ",
      inf: "לְהַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ן", 
      p3sm: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ן",
      nsm: "מַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ן",
      f1s: "אַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ן",
      f2sm: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ן",
      f3sm: "יַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ן",
      f3sw: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ן",
      f1m: "נַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ן",
      ism: "הַ"+this.state.letter1+"ְ"+this.state.letter2+"ֵּ"+"ן"
    });    
  }
  if(this.state.letter3 == "פ"){
    this.setState({
      inf: "לְהַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ף", 
      p3sm: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ף",
      nsm: "מַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ף",
      f1s: "אַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ף",
      f2sm: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ף",
      f3sm: "יַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ף",
      f3sw: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ף",
      f1m: "נַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ף",
      ism: "הַ"+this.state.letter1+"ְ"+this.state.letter2+"ֵּ"+"ף"
    });    
  }
  if(this.state.letter3 == "צ"){
    this.setState({
      inf: "לְהַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ץ", 
      p3sm: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ץ",
      nsm: "מַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ץ",
      f1s: "אַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ץ",
      f2sm: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ץ",
      f3sm: "יַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ץ",
      f3sw: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ץ",
      f1m: "נַ"+this.state.letter1+"ְ"+this.state.letter2+"ִּי"+"ץ",
      ism: "הַ"+this.state.letter1+"ְ"+this.state.letter2+"ֵּ"+"ץ"
    });    
  }
}else{
  this.setState({
    inf: "לְהַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3, 
    p1s: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתִּי",
    p2sm: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתָּ",
    p2sw: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתְּ",
    p3sm: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3,
    p3sw: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3+"ָה",
    p1m: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְנוּ",
    p2mm: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּם",
    p2mw: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּן",
    p3m: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3+"וּ",
    nsm: "מַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3,
    nsw: "מַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3+"ָה",
    nmm: "מַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3+"ִים",
    nmw: "מַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3+"וֹת",
    f1s: "אַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3,
    f2sm: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3,
    f2sw: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3+"ִי",
    f3sm: "יַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3,
    f3sw: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3,
    f1m: "נַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3,
    f2mm: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3+"וּ",
    f2mw: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ֵ"+this.state.letter3+"ְנָה",
    f3m: "יַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3+"וּ",
    ism: "הַ"+this.state.letter1+"ְ"+this.state.letter2+"ֵ"+this.state.letter3,
    isw: "הַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3+"ִי",
    imm: "הַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+this.state.letter3+"וּ",
    imw: "הַ"+this.state.letter1+"ְ"+this.state.letter2+"ֵ"+this.state.letter3+"ְנָה",
    ns: "הַ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3+"ָה",
    nm: "הַ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3+"וֹת"
  });
  if(this.state.letter3 == "כ"){
    this.setState({
      inf: "לְהַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ך", 
      p3sm: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ך",
      nsm: "מַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ך",
      f1s: "אַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ך",
      f2sm: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ך",
      f3sm: "יַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ך",
      f3sw: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ך",
      f1m: "נַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ך",
      ism: "הַ"+this.state.letter1+"ְ"+this.state.letter2+"ֵ"+"ך"
    });    
  }
  if(this.state.letter3 == "מ"){
    this.setState({
      inf: "לְהַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ם", 
      p3sm: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ם",
      nsm: "מַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ם",
      f1s: "אַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ם",
      f2sm: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ם",
      f3sm: "יַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ם",
      f3sw: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ם",
      f1m: "נַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ם",
      ism: "הַ"+this.state.letter1+"ְ"+this.state.letter2+"ֵ"+"ם"
    });    
  }
  if(this.state.letter3 == "נ"){
    this.setState({
      imw: "הַ"+this.state.letter1+"ְ"+this.state.letter2+"ֵ"+"נָּה",
      f2mw: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ֵ"+"נָּה",
      p1m: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"נּוּ",
      inf: "לְהַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ן", 
      p3sm: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ן",
      nsm: "מַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ן",
      f1s: "אַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ן",
      f2sm: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ן",
      f3sm: "יַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ן",
      f3sw: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ן",
      f1m: "נַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ן",
      ism: "הַ"+this.state.letter1+"ְ"+this.state.letter2+"ֵ"+"ן"
    });    
  }
  if(this.state.letter3 == "פ"){
    this.setState({
      inf: "לְהַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ף", 
      p3sm: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ף",
      nsm: "מַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ף",
      f1s: "אַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ף",
      f2sm: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ף",
      f3sm: "יַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ף",
      f3sw: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ף",
      f1m: "נַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ף",
      ism: "הַ"+this.state.letter1+"ְ"+this.state.letter2+"ֵ"+"ף"
    });    
  }
  if(this.state.letter3 == "צ"){
    this.setState({
      inf: "לְהַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ץ", 
      p3sm: "הִ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ץ",
      nsm: "מַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ץ",
      f1s: "אַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ץ",
      f2sm: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ץ",
      f3sm: "יַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ץ",
      f3sw: "תַּ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ץ",
      f1m: "נַ"+this.state.letter1+"ְ"+this.state.letter2+"ִי"+"ץ",
      ism: "הַ"+this.state.letter1+"ְ"+this.state.letter2+"ֵ"+"ץ"
    });    
  }
}
this.setState({
  infS: "לה"+this.state.letter1+this.state.letter2+"י"+this.state.letter3,
  p1sS: "ה"+this.state.letter1+this.state.letter2+this.state.letter3+"תי",
  p2smS: "ה"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
  p2swS: "ה"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
  p3smS: "ה"+this.state.letter1+this.state.letter2+"י"+this.state.letter3,
  p3swS: "ה"+this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ה",
  p1mS: "ה"+this.state.letter1+this.state.letter2+this.state.letter3+"נו",
  p2mmS: "ה"+this.state.letter1+this.state.letter2+this.state.letter3+"תם",
  p2mwS: "ה"+this.state.letter1+this.state.letter2+this.state.letter3+"תן",
  p3mS: "ה"+this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ו",
  nsmS: "מ"+this.state.letter1+this.state.letter2+"י"+this.state.letter3,
  nswS: "מ"+this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ה",
  nmmS: "מ"+this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ים",
  nmwS: "מ"+this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ות",
  f1sS: "א"+this.state.letter1+this.state.letter2+"י"+this.state.letter3,
  f2smS: "ת"+this.state.letter1+this.state.letter2+"י"+this.state.letter3,
  f2swS: "ת"+this.state.letter1+this.state.letter2+"י"+this.state.letter3+"י",
  f3smS: "י"+this.state.letter1+this.state.letter2+"י"+this.state.letter3,
  f3swS: "ת"+this.state.letter1+this.state.letter2+"י"+this.state.letter3,
  f1mS: "נ"+this.state.letter1+this.state.letter2+"י"+this.state.letter3,
  f2mmS: "ת"+this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ו",
  f2mwS: "ת"+this.state.letter1+this.state.letter2+this.state.letter3+"נה",
  f3mS: "י"+this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ו",
  ismS: "ה"+this.state.letter1+this.state.letter2+this.state.letter3,
  iswS: "ה"+this.state.letter1+this.state.letter2+"י"+this.state.letter3+"י",
  immS: "ה"+this.state.letter1+this.state.letter2+"י"+this.state.letter3+"ו",
  imwS: "ה"+this.state.letter1+this.state.letter2+"י"+this.state.letter3+"נה",
  nsS: "ה"+this.state.letter1+this.state.letter2+this.state.letter3+"ה",
  nmS: "ה"+this.state.letter1+this.state.letter2+this.state.letter3+"ות"   
});
if(this.state.letter3 == "כ"){
  this.setState({
    infS: "לה"+this.state.letter1+this.state.letter2+"י"+"ך",
    p3smS: "ה"+this.state.letter1+this.state.letter2+"י"+"ך",
    nsmS: "מ"+this.state.letter1+this.state.letter2+"י"+"ך",
    f1sS: "א"+this.state.letter1+this.state.letter2+"י"+"ך",
    f2smS: "ת"+this.state.letter1+this.state.letter2+"י"+"ך",
    f3smS: "י"+this.state.letter1+this.state.letter2+"י"+"ך",
    f3swS: "ת"+this.state.letter1+this.state.letter2+"י"+"ך",
    f1mS: "נ"+this.state.letter1+this.state.letter2+"י"+"ך",
    ismS: "ה"+this.state.letter1+this.state.letter2+"ך" 
  });  
}
if(this.state.letter3 == "מ"){
  this.setState({
    infS: "לה"+this.state.letter1+this.state.letter2+"י"+"ם",
    p3smS: "ה"+this.state.letter1+this.state.letter2+"י"+"ם",
    nsmS: "מ"+this.state.letter1+this.state.letter2+"י"+"ם",
    f1sS: "א"+this.state.letter1+this.state.letter2+"י"+"ם",
    f2smS: "ת"+this.state.letter1+this.state.letter2+"י"+"ם",
    f3smS: "י"+this.state.letter1+this.state.letter2+"י"+"ם",
    f3swS: "ת"+this.state.letter1+this.state.letter2+"י"+"ם",
    f1mS: "נ"+this.state.letter1+this.state.letter2+"י"+"ם",
    ismS: "ה"+this.state.letter1+this.state.letter2+"ם" 
  });  
}
if(this.state.letter3 == "פ"){
  this.setState({
    infS: "לה"+this.state.letter1+this.state.letter2+"י"+"ף",
    p3smS: "ה"+this.state.letter1+this.state.letter2+"י"+"ף",
    nsmS: "מ"+this.state.letter1+this.state.letter2+"י"+"ף",
    f1sS: "א"+this.state.letter1+this.state.letter2+"י"+"ף",
    f2smS: "ת"+this.state.letter1+this.state.letter2+"י"+"ף",
    f3smS: "י"+this.state.letter1+this.state.letter2+"י"+"ף",
    f3swS: "ת"+this.state.letter1+this.state.letter2+"י"+"ף",
    f1mS: "נ"+this.state.letter1+this.state.letter2+"י"+"ף",
    ismS: "ה"+this.state.letter1+this.state.letter2+"ף" 
  });  
}
if(this.state.letter3 == "צ"){
  this.setState({
    infS: "לה"+this.state.letter1+this.state.letter2+"י"+"ץ",
    p3smS: "ה"+this.state.letter1+this.state.letter2+"י"+"ץ",
    nsmS: "מ"+this.state.letter1+this.state.letter2+"י"+"ץ",
    f1sS: "א"+this.state.letter1+this.state.letter2+"י"+"ץ",
    f2smS: "ת"+this.state.letter1+this.state.letter2+"י"+"ץ",
    f3smS: "י"+this.state.letter1+this.state.letter2+"י"+"ץ",
    f3swS: "ת"+this.state.letter1+this.state.letter2+"י"+"ץ",
    f1mS: "נ"+this.state.letter1+this.state.letter2+"י"+"ץ",
    ismS: "ה"+this.state.letter1+this.state.letter2+"ץ" 
  });  
}
if(this.state.letter3 == "נ"){
  this.setState({
    imwS: "ה"+this.state.letter1+this.state.letter2+"י"+"נה",
    f2mwS: "ת"+this.state.letter1+this.state.letter2+"נה",
    p1mS: "ה"+this.state.letter1+this.state.letter2+"נו",
    infS: "לה"+this.state.letter1+this.state.letter2+"י"+"ן",
    p3smS: "ה"+this.state.letter1+this.state.letter2+"י"+"ן",
    nsmS: "מ"+this.state.letter1+this.state.letter2+"י"+"ן",
    f1sS: "א"+this.state.letter1+this.state.letter2+"י"+"ן",
    f2smS: "ת"+this.state.letter1+this.state.letter2+"י"+"ן",
    f3smS: "י"+this.state.letter1+this.state.letter2+"י"+"ן",
    f3swS: "ת"+this.state.letter1+this.state.letter2+"י"+"ן",
    f1mS: "נ"+this.state.letter1+this.state.letter2+"י"+"ן",
    ismS: "ה"+this.state.letter1+this.state.letter2+"ן" 
  });  
}
break
case "הופעל_מוזמן":
if(this.state.letter1 == "ב" || this.state.letter1 == "כ" || this.state.letter1 == "פ" || this.state.letter1 == "ת" || this.state.letter1 == "ת" || this.state.letter1 == "ת"){
this.setState({
  p1s: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתִּי",
  p2sm: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתָּ",
  p2sw: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתְּ",
  p3sm: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3,
  p3sw: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ְּ"+this.state.letter3+"ָה",
  p1m: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנוּ",
  p2mm: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּם",
  p2mw: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּן",
  p3m: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
  nsm: "מֻ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+this.state.letter3,
  nsw: "מֻ"+this.state.letter1+"ְ"+this.state.letter2+"ֶּ"+this.state.letter3+"ֶת",
  nmm: "מֻ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+this.state.letter3+"ִים",
  nmw: "מֻ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+this.state.letter3+"וֹת",
  f1s: "אֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3,
  f2sm: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3,
  f2sw: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
  f3sm: "יֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3,
  f3sw: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3,
  f1m: "נֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3,
  f2mm: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
  f2mw: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנָה",
  f3m: "יֻ"+this.state.letter1+"ְ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ"
});
if(this.state.letter3 == "כ"){
  this.setState({
    p3sm: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ך",
    nsm: "מֻ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+"ך",
    f1s: "אֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ך",
    f2sm: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ך",
    f3sm: "יֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ך",
    f3sw: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ך",
    f1m: "נֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ך"
  });
}
if(this.state.letter3 == "מ"){
  this.setState({
    p3sm: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ם",
    nsm: "מֻ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+"ם",
    f1s: "אֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ם",
    f2sm: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ם",
    f3sm: "יֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ם",
    f3sw: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ם",
    f1m: "נֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ם"
  });
}
if(this.state.letter3 == "נ"){
  this.setState({
    f2mw: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"נָּה",
    p1m: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"נּוּ",
    p3sm: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ן",
    nsm: "מֻ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+"ן",
    f1s: "אֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ן",
    f2sm: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ן",
    f3sm: "יֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ן",
    f3sw: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ן",
    f1m: "נֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ן"
  });
}
if(this.state.letter3 == "פ"){
  this.setState({
    p3sm: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ף",
    nsm: "מֻ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+"ף",
    f1s: "אֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ף",
    f2sm: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ף",
    f3sm: "יֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ף",
    f3sw: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ף",
    f1m: "נֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ף"
  });
}
if(this.state.letter3 == "צ"){
  this.setState({
    p3sm: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ץ",
    nsm: "מֻ"+this.state.letter1+"ְ"+this.state.letter2+"ָּ"+"ץ",
    f1s: "אֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ץ",
    f2sm: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ץ",
    f3sm: "יֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ץ",
    f3sw: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ץ",
    f1m: "נֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַּ"+"ץ"
  });
}
}else{
  this.setState({
    p1s: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתִּי",
    p2sm: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתָּ",
    p2sw: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתְּ",
    p3sm: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3,
    p3sw: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ְ"+this.state.letter3+"ָה",
    p1m: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְנוּ",
    p2mm: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּם",
    p2mw: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְתֶּן",
    p3m: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
    nsm: "מֻ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3,
    nsw: "מֻ"+this.state.letter1+"ְ"+this.state.letter2+"ֶ"+this.state.letter3+"ֶת",
    nmm: "מֻ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3+"ִים",
    nmw: "מֻ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+this.state.letter3+"וֹת",
    f1s: "אֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3,
    f2sm: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3,
    f2sw: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ְ"+this.state.letter3+"ִי",
    f3sm: "יֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3,
    f3sw: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3,
    f1m: "נֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3,
    f2mm: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ְ"+this.state.letter3+"וּ",
    f2mw: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+this.state.letter3+"ְנָה",
    f3m: "יֻ"+this.state.letter1+"ְ"+this.state.letter2+"ְ"+this.state.letter3+"וּ"
  });
  if(this.state.letter3 == "כ"){
    this.setState({
      p3sm: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ך",
      nsm: "מֻ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+"ך",
      f1s: "אֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ך",
      f2sm: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ך",
      f3sm: "יֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ך",
      f3sw: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ך",
      f1m: "נֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ך"
    });
  }
  if(this.state.letter3 == "מ"){
    this.setState({
      p3sm: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ם",
      nsm: "מֻ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+"ם",
      f1s: "אֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ם",
      f2sm: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ם",
      f3sm: "יֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ם",
      f3sw: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ם",
      f1m: "נֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ם"
    });
  }
  if(this.state.letter3 == "נ"){
    this.setState({
      f2mw: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"נָּה",
      p1m: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"נּוּ",
      p3sm: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ן",
      nsm: "מֻ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+"ן",
      f1s: "אֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ן",
      f2sm: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ן",
      f3sm: "יֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ן",
      f3sw: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ן",
      f1m: "נֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ן"
    });
  }
  if(this.state.letter3 == "פ"){
    this.setState({
      p3sm: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ף",
      nsm: "מֻ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+"ף",
      f1s: "אֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ף",
      f2sm: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ף",
      f3sm: "יֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ף",
      f3sw: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ף",
      f1m: "נֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ף"
    });
  }
  if(this.state.letter3 == "צ"){
    this.setState({
      p3sm: "הֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ץ",
      nsm: "מֻ"+this.state.letter1+"ְ"+this.state.letter2+"ָ"+"ץ",
      f1s: "אֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ץ",
      f2sm: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ץ",
      f3sm: "יֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ץ",
      f3sw: "תֻּ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ץ",
      f1m: "נֻ"+this.state.letter1+"ְ"+this.state.letter2+"ַ"+"ץ"
    });
  }
}
this.setState({
  p1sS: "הו"+this.state.letter1+this.state.letter2+this.state.letter3+"תי",
  p2smS: "הו"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
  p2swS: "הו"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
  p3smS: "הו"+this.state.letter1+this.state.letter2+this.state.letter3,
  p3swS: "הו"+this.state.letter1+this.state.letter2+this.state.letter3+"ה",
  p1mS: "הו"+this.state.letter1+this.state.letter2+this.state.letter3+"נו",
  p2mmS: "הו"+this.state.letter1+this.state.letter2+this.state.letter3+"תם",
  p2mwS: "הו"+this.state.letter1+this.state.letter2+this.state.letter3+"תן",
  p3mS: "הו"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
  nsmS: "מו"+this.state.letter1+this.state.letter2+this.state.letter3,
  nswS: "מו"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
  nmmS: "מו"+this.state.letter1+this.state.letter2+this.state.letter3+"ים",
  nmwS: "מו"+this.state.letter1+this.state.letter2+this.state.letter3+"ות",
  f1sS: "או"+this.state.letter1+this.state.letter2+this.state.letter3,
  f2smS: "תו"+this.state.letter1+this.state.letter2+this.state.letter3,
  f2swS: "תו"+this.state.letter1+this.state.letter2+this.state.letter3+"י",
  f3smS: "יו"+this.state.letter1+this.state.letter2+this.state.letter3,
  f3swS: "תו"+this.state.letter1+this.state.letter2+this.state.letter3,
  f1mS: "נו"+this.state.letter1+this.state.letter2+this.state.letter3,
  f2mmS: "תו"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
  f2mwS: "תו"+this.state.letter1+this.state.letter2+this.state.letter3+"נה",
  f3mS: "יו"+this.state.letter1+this.state.letter2+this.state.letter3+"ו"
});
if(this.state.letter3 == "כ"){
  this.setState({
    p3smS: "הו"+this.state.letter1+this.state.letter2+"ך",
    nsmS: "מו"+this.state.letter1+this.state.letter2+"ך",
    f1sS: "או"+this.state.letter1+this.state.letter2+"ך",
    f2smS: "תו"+this.state.letter1+this.state.letter2+"ך",
    f3smS: "יו"+this.state.letter1+this.state.letter2+"ך",
    f3swS: "תו"+this.state.letter1+this.state.letter2+"ך",
    f1mS: "נו"+this.state.letter1+this.state.letter2+"ך"
  });
}
if(this.state.letter3 == "מ"){
  this.setState({
    p3smS: "הו"+this.state.letter1+this.state.letter2+"ם",
    nsmS: "מו"+this.state.letter1+this.state.letter2+"ם",
    f1sS: "או"+this.state.letter1+this.state.letter2+"ם",
    f2smS: "תו"+this.state.letter1+this.state.letter2+"ם",
    f3smS: "יו"+this.state.letter1+this.state.letter2+"ם",
    f3swS: "תו"+this.state.letter1+this.state.letter2+"ם",
    f1mS: "נו"+this.state.letter1+this.state.letter2+"ם"
  });
}
if(this.state.letter3 == "נ"){
  this.setState({
    f2mwS: "תו"+this.state.letter1+this.state.letter2+"נה",
    p1mS: "הו"+this.state.letter1+this.state.letter2+"נו",
    p3smS: "הו"+this.state.letter1+this.state.letter2+"ן",
    nsmS: "מו"+this.state.letter1+this.state.letter2+"ן",
    f1sS: "או"+this.state.letter1+this.state.letter2+"ן",
    f2smS: "תו"+this.state.letter1+this.state.letter2+"ן",
    f3smS: "יו"+this.state.letter1+this.state.letter2+"ן",
    f3swS: "תו"+this.state.letter1+this.state.letter2+"ן",
    f1mS: "נו"+this.state.letter1+this.state.letter2+"ן"
  });
}
if(this.state.letter3 == "פ"){
  this.setState({
    p3smS: "הו"+this.state.letter1+this.state.letter2+"ף",
    nsmS: "מו"+this.state.letter1+this.state.letter2+"ף",
    f1sS: "או"+this.state.letter1+this.state.letter2+"ף",
    f2smS: "תו"+this.state.letter1+this.state.letter2+"ף",
    f3smS: "יו"+this.state.letter1+this.state.letter2+"ף",
    f3swS: "תו"+this.state.letter1+this.state.letter2+"ף",
    f1mS: "נו"+this.state.letter1+this.state.letter2+"ף"
  });
}
if(this.state.letter3 == "צ"){
  this.setState({
    p3smS: "הו"+this.state.letter1+this.state.letter2+"ץ",
    nsmS: "מו"+this.state.letter1+this.state.letter2+"ץ",
    f1sS: "או"+this.state.letter1+this.state.letter2+"ץ",
    f2smS: "תו"+this.state.letter1+this.state.letter2+"ץ",
    f3smS: "יו"+this.state.letter1+this.state.letter2+"ץ",
    f3swS: "תו"+this.state.letter1+this.state.letter2+"ץ",
    f1mS: "נו"+this.state.letter1+this.state.letter2+"ץ"
  });
}
break
case "התפעל_התקדם":
if(this.state.letter1 == "ב" || this.state.letter1 == "כ" || this.state.letter1 == "פ" || this.state.letter1 == "ת" || this.state.letter1 == "ת" || this.state.letter1 == "ת"){
  this.setState({
    inf: "לְהִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+this.state.letter3,
    p1s: "הִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתִּי",
    p2sm: "הִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתָּ",
    p2sw: "הִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתְּ",
    p3sm: "הִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+this.state.letter3,
    p3sw: "הִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ְּ"+this.state.letter3+"ָה",
    p1m: "הִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנוּ",
    p2mm: "הִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּם",
    p2mw: "הִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּן",
    p3m: "הִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
    nsm: "מִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+this.state.letter3,
    nsw: "מִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֶּ"+this.state.letter3+"ֶת",
    nmm: "מִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ְּ"+this.state.letter3+"ִים",
    nmw: "מִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ְּ"+this.state.letter3+"וֹת",
    f1s: "אֶתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+this.state.letter3,
    f2sm: "תִּתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+this.state.letter3,
    f2sw: "תִּתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
    f3sm: "יִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+this.state.letter3,
    f3sw: "תִּתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+this.state.letter3,
    f1m: "נִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+this.state.letter3,
    f2mm: "תִּתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
    f2mw: "תִּתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+this.state.letter3+"ְנָה",
    f3m: "יִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
    ism: "הִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+this.state.letter3,
    isw: "הִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
    imm: "הִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
    imw: "הִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+this.state.letter3+"ְנָה",
    ns: "הִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ְּ"+this.state.letter3+"וּת"
  });
  if(this.state.letter3 == "כ"){
    this.setState({
      inf: "לְהִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ך",
      p3sm: "הִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ך",
      nsm: "מִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ך",
      f1s: "אֶתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ך",
      f2sm: "תִּתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ך",
      f3sm: "יִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ך",
      f3sw: "תִּתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ך",
      f1m: "נִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ך",
      ism: "הִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ך"
    });
  }
  if(this.state.letter3 == "מ"){
    this.setState({
      inf: "לְהִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ם",
      p3sm: "הִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ם",
      nsm: "מִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ם",
      f1s: "אֶתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ם",
      f2sm: "תִּתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ם",
      f3sm: "יִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ם",
      f3sw: "תִּתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ם",
      f1m: "נִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ם",
      ism: "הִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ם"
    });
  }
  if(this.state.letter3 == "נ"){
    this.setState({
      imw: "הִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"נָּה",
      f2mw: "תִּתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"נָּה",
      p1m: "הִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ַּ"+"נּוּ",
      inf: "לְהִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ן",
      p3sm: "הִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ן",
      nsm: "מִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ן",
      f1s: "אֶתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ן",
      f2sm: "תִּתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ן",
      f3sm: "יִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ן",
      f3sw: "תִּתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ן",
      f1m: "נִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ן",
      ism: "הִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ן"
    });
  }
  if(this.state.letter3 == "פ"){
    this.setState({
      inf: "לְהִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ף",
      p3sm: "הִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ף",
      nsm: "מִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ף",
      f1s: "אֶתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ף",
      f2sm: "תִּתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ף",
      f3sm: "יִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ף",
      f3sw: "תִּתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ף",
      f1m: "נִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ף",
      ism: "הִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ף"
    });
  }
  if(this.state.letter3 == "צ"){
    this.setState({
      inf: "לְהִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ץ",
      p3sm: "הִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ץ",
      nsm: "מִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ץ",
      f1s: "אֶתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ץ",
      f2sm: "תִּתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ץ",
      f3sm: "יִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ץ",
      f3sw: "תִּתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ץ",
      f1m: "נִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ץ",
      ism: "הִתְ"+this.state.letter1+"ַּ"+this.state.letter2+"ֵּ"+"ץ"
    });
  }

}else{
  this.setState({
    inf: "לְהִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
    p1s: "הִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתִּי",
    p2sm: "הִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתָּ",
    p2sw: "הִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתְּ",
    p3sm: "הִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
    p3sw: "הִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"ָה",
    p1m: "הִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ַּ"+this.state.letter3+"ְנוּ",
    p2mm: "הִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּם",
    p2mw: "הִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ַּ"+this.state.letter3+"ְתֶּן",
    p3m: "הִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
    nsm: "מִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
    nsw: "מִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֶּ"+this.state.letter3+"ֶת",
    nmm: "מִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"ִים",
    nmw: "מִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"וֹת",
    f1s: "אֶתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
    f2sm: "תִּתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
    f2sw: "תִּתְ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
    f3sm: "יִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
    f3sw: "תִּתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
    f1m: "נִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
    f2mm: "תִּתְ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
    f2mw: "תִּתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3+"ְנָה",
    f3m: "יִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
    ism: "הִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3,
    isw: "הִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"ִי",
    imm: "הִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"וּ",
    imw: "הִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+this.state.letter3+"ְנָה",
    ns: "הִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ְּ"+this.state.letter3+"וּת"
  });
  if(this.state.letter3 == "כ"){
    this.setState({
      inf: "לְהִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
      p3sm: "הִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
      nsm: "מִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
      f1s: "אֶתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
      f2sm: "תִּתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
      f3sm: "יִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
      f3sw: "תִּתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
      f1m: "נִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך",
      ism: "הִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ך"
    });
  }
  if(this.state.letter3 == "מ"){
    this.setState({
      inf: "לְהִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
      p3sm: "הִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
      nsm: "מִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
      f1s: "אֶתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
      f2sm: "תִּתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
      f3sm: "יִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
      f3sw: "תִּתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
      f1m: "נִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם",
      ism: "הִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ם"
    });
  }
  if(this.state.letter3 == "נ"){
    this.setState({
      imw: "הִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"נָּה",
      f2mw: "תִּתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"נָּה",
      p1m: "הִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ַּ"+"נּוּ",
      inf: "לְהִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
      p3sm: "הִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
      nsm: "מִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
      f1s: "אֶתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
      f2sm: "תִּתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
      f3sm: "יִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
      f3sw: "תִּתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
      f1m: "נִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן",
      ism: "הִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ן"
    });
  }
  if(this.state.letter3 == "פ"){
    this.setState({
      inf: "לְהִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
      p3sm: "הִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
      nsm: "מִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
      f1s: "אֶתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
      f2sm: "תִּתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
      f3sm: "יִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
      f3sw: "תִּתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
      f1m: "נִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף",
      ism: "הִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ף"
    });
  }
  if(this.state.letter3 == "צ"){
    this.setState({
      inf: "לְהִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
      p3sm: "הִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
      nsm: "מִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
      f1s: "אֶתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
      f2sm: "תִּתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
      f3sm: "יִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
      f3sw: "תִּתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
      f1m: "נִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ",
      ism: "הִתְ"+this.state.letter1+"ַ"+this.state.letter2+"ֵּ"+"ץ"
    });
  }
}
this.setState({
  infS: "להת"+this.state.letter1+this.state.letter2+this.state.letter3,
  p1sS: "הת"+this.state.letter1+this.state.letter2+this.state.letter3+"תי",
  p2smS: "הת"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
  p2swS: "הת"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
  p3smS: "הת"+this.state.letter1+this.state.letter2+this.state.letter3,
  p3swS: "הת"+this.state.letter1+this.state.letter2+this.state.letter3+"ה",
  p1mS: "הת"+this.state.letter1+this.state.letter2+this.state.letter3+"נו",
  p2mmS: "הת"+this.state.letter1+this.state.letter2+this.state.letter3+"תם",
  p2mwS: "הת"+this.state.letter1+this.state.letter2+this.state.letter3+"תן",
  p3mS: "הת"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
  nsmS: "מת"+this.state.letter1+this.state.letter2+this.state.letter3,
  nswS: "מת"+this.state.letter1+this.state.letter2+this.state.letter3+"ת",
  nmmS: "מת"+this.state.letter1+this.state.letter2+this.state.letter3+"ים",
  nmwS: "מת"+this.state.letter1+this.state.letter2+this.state.letter3+"ות",
  f1sS: "את"+this.state.letter1+this.state.letter2+this.state.letter3,
  f2smS: "תת"+this.state.letter1+this.state.letter2+this.state.letter3,
  f2swS: "תת"+this.state.letter1+this.state.letter2+this.state.letter3+"י",
  f3smS: "ית"+this.state.letter1+this.state.letter2+this.state.letter3,
  f3swS: "תת"+this.state.letter1+this.state.letter2+this.state.letter3,
  f1mS: "נת"+this.state.letter1+this.state.letter2+this.state.letter3,
  f2mmS: "תת"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
  f2mwS: "תת"+this.state.letter1+this.state.letter2+this.state.letter3+"נה",
  f3mS: "ית"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
  ismS: "הת"+this.state.letter1+this.state.letter2+this.state.letter3,
  iswS: "הת"+this.state.letter1+this.state.letter2+this.state.letter3+"י",
  immS: "הת"+this.state.letter1+this.state.letter2+this.state.letter3+"ו",
  imwS: "הת"+this.state.letter1+this.state.letter2+this.state.letter3+"נה",
  nsS: "הת"+this.state.letter1+this.state.letter2+this.state.letter3+"ות"
});
if(this.state.letter3 == "כ"){
  this.setState({
    infS: "להת"+this.state.letter1+this.state.letter2+"ך",
    p3smS: "הת"+this.state.letter1+this.state.letter2+"ך",
    nsmS: "מת"+this.state.letter1+this.state.letter2+"ך",
    f1sS: "את"+this.state.letter1+this.state.letter2+"ך",
    f2smS: "תת"+this.state.letter1+this.state.letter2+"ך",
    f3smS: "ית"+this.state.letter1+this.state.letter2+"ך",
    f3swS: "תת"+this.state.letter1+this.state.letter2+"ך",
    f1mS: "נת"+this.state.letter1+this.state.letter2+"ך",
    ismS: "הת"+this.state.letter1+this.state.letter2+"ך"
  }); 
}
if(this.state.letter3 == "מ"){
  this.setState({
    infS: "להת"+this.state.letter1+this.state.letter2+"ם",
    p3smS: "הת"+this.state.letter1+this.state.letter2+"ם",
    nsmS: "מת"+this.state.letter1+this.state.letter2+"ם",
    f1sS: "את"+this.state.letter1+this.state.letter2+"ם",
    f2smS: "תת"+this.state.letter1+this.state.letter2+"ם",
    f3smS: "ית"+this.state.letter1+this.state.letter2+"ם",
    f3swS: "תת"+this.state.letter1+this.state.letter2+"ם",
    f1mS: "נת"+this.state.letter1+this.state.letter2+"ם",
    ismS: "הת"+this.state.letter1+this.state.letter2+"ם"
  }); 
}
if(this.state.letter3 == "נ"){
  this.setState({
    imwS: "הת"+this.state.letter1+this.state.letter2+"נה",
    f2mwS: "תת"+this.state.letter1+this.state.letter2+"נה",
    p1mS: "הת"+this.state.letter1+this.state.letter2+"נו",
    infS: "להת"+this.state.letter1+this.state.letter2+"ן",
    p3smS: "הת"+this.state.letter1+this.state.letter2+"ן",
    nsmS: "מת"+this.state.letter1+this.state.letter2+"ן",
    f1sS: "את"+this.state.letter1+this.state.letter2+"ן",
    f2smS: "תת"+this.state.letter1+this.state.letter2+"ן",
    f3smS: "ית"+this.state.letter1+this.state.letter2+"ן",
    f3swS: "תת"+this.state.letter1+this.state.letter2+"ן",
    f1mS: "נת"+this.state.letter1+this.state.letter2+"ן",
    ismS: "הת"+this.state.letter1+this.state.letter2+"ן"
  }); 
}
if(this.state.letter3 == "פ"){
  this.setState({
    infS: "להת"+this.state.letter1+this.state.letter2+"ף",
    p3smS: "הת"+this.state.letter1+this.state.letter2+"ף",
    nsmS: "מת"+this.state.letter1+this.state.letter2+"ף",
    f1sS: "את"+this.state.letter1+this.state.letter2+"ף",
    f2smS: "תת"+this.state.letter1+this.state.letter2+"ף",
    f3smS: "ית"+this.state.letter1+this.state.letter2+"ף",
    f3swS: "תת"+this.state.letter1+this.state.letter2+"ף",
    f1mS: "נת"+this.state.letter1+this.state.letter2+"ף",
    ismS: "הת"+this.state.letter1+this.state.letter2+"ף"
  }); 
}
if(this.state.letter3 == "צ"){
  this.setState({
    infS: "להת"+this.state.letter1+this.state.letter2+"ץ",
    p3smS: "הת"+this.state.letter1+this.state.letter2+"ץ",
    nsmS: "מת"+this.state.letter1+this.state.letter2+"ץ",
    f1sS: "את"+this.state.letter1+this.state.letter2+"ץ",
    f2smS: "תת"+this.state.letter1+this.state.letter2+"ץ",
    f3smS: "ית"+this.state.letter1+this.state.letter2+"ץ",
    f3swS: "תת"+this.state.letter1+this.state.letter2+"ץ",
    f1mS: "נת"+this.state.letter1+this.state.letter2+"ץ",
    ismS: "הת"+this.state.letter1+this.state.letter2+"ץ"
  }); 
}
break
default:
  this.setState({
    asm:"_"
  });
break
}      
}

    onSubmit(event){
      event.preventDefault();     
    }

    onBenjanChange(event){    
      this.setState({benjan: event.target.value});
    }

    onLetter1Change(event) {
      this.setState({letter1: event.target.value});
    }

    onLetter2Change(event) {
      this.setState({letter2: event.target.value});
    }
    
    onLetter3Change(event) {
      this.setState({letter3: event.target.value});
    }
    
    onLetter4Change(event) {
      this.setState({letter4: event.target.value});
    }

    onDescriptChange(event) {
      this.setState({descript: event.target.value});
    }
    
    onInfChange(event){
      this.setState({inf: event.target.value});
    }
    onInfSChange(event){
      this.setState({infS: event.target.value});
    }
    onP1sChange(event){
      this.setState({p1s: event.target.value});
    }
    onP1sSChange(event){
      this.setState({p1sS: event.target.value});
    }
    onP2smChange(event){
      this.setState({p2sm: event.target.value});
    }
    onP2smSChange(event){
      this.setState({p2smS: event.target.value});
    }
    onP2swChange(event){
      this.setState({p2sw: event.target.value});
    }
    onP2swSChange(event){
      this.setState({p2swS: event.target.value});
    }
    onP3smChange(event){
      this.setState({p3sm: event.target.value});
    }
    onP3smSChange(event){
      this.setState({p3smS: event.target.value});
    }
    onP3swChange(event){
      this.setState({p3sw: event.target.value});
    }
    onP3swSChange(event){
      this.setState({p3swS: event.target.value});
    }
    onP1mChange(event){
      this.setState({p1m: event.target.value});
    }
    onP1mSChange(event){
      this.setState({p1mS: event.target.value});
    }
    onP2mmChange(event){
      this.setState({p2mm: event.target.value});
    }
    onP2mmSChange(event){
      this.setState({p2mmS: event.target.value});
    }
    onP2mwChange(event){
      this.setState({p2mw: event.target.value});
    }
    onP2mwSChange(event){
      this.setState({p2mwS: event.target.value});
    }
    onP3mChange(event){
      this.setState({p3m: event.target.value});
    }
    onP3mSChange(event){
      this.setState({p3mS: event.target.value});
    }
    onNsmChange(event){
      this.setState({nsm: event.target.value});
    }
    onNsmSChange(event){
      this.setState({nsmS: event.target.value});
    }
    onNswChange(event){
      this.setState({nsw: event.target.value});
    }
    onNswSChange(event){
      this.setState({nswS: event.target.value});
    }
    onNmmChange(event){
      this.setState({nmm: event.target.value});
    }
    onNmmSChange(event){
      this.setState({nmmS: event.target.value});
    }
    onNmwChange(event){
      this.setState({nmw: event.target.value});
    }
    onNmwSChange(event){
      this.setState({nmwS: event.target.value});
    }
    onF1sChange(event){
      this.setState({f1s: event.target.value});
    }
    onF1sSChange(event){
      this.setState({f1sS: event.target.value});
    }
    onF2smChange(event){
      this.setState({f2sm: event.target.value});
    }
    onF2smSChange(event){
      this.setState({f2smS: event.target.value});
    }
    onF2swChange(event){
      this.setState({f2sw: event.target.value});
    }
    onF2swSChange(event){
      this.setState({f2swS: event.target.value});
    }
    onF3smChange(event){
      this.setState({f3sm: event.target.value});
    }
    onF3smSChange(event){
      this.setState({f3smS: event.target.value});
    }
    onF3swChange(event){
      this.setState({f3sw: event.target.value});
    }
    onF3swSChange(event){
      this.setState({f3swS: event.target.value});
    }
    onF1mChange(event){
      this.setState({f1m: event.target.value});
    }
    onF1mSChange(event){
      this.setState({f1mS: event.target.value});
    }
    onF2mmChange(event){
      this.setState({f2mm: event.target.value});
    }
    onF2mmSChange(event){
      this.setState({f2mmS: event.target.value});
    }
    onF2mwChange(event){
      this.setState({f2mw: event.target.value});
    }
    onF2mwSChange(event){
      this.setState({f2mwS: event.target.value});
    }
    onF3mChange(event){
      this.setState({f3m: event.target.value});
    }
    onF3mSChange(event){
      this.setState({f3mS: event.target.value});
    }
    onIsmChange(event){
      this.setState({ism: event.target.value});
    }
    onIsmSChange(event){
      this.setState({ismS: event.target.value});
    }
    onIswChange(event){
      this.setState({isw: event.target.value});
    }
    onIswSChange(event){
      this.setState({iswS: event.target.value});
    }
    onImmChange(event){
      this.setState({imm: event.target.value});
    }
    onImmSChange(event){
      this.setState({immS: event.target.value});
    }
    onImwChange(event){
      this.setState({imw: event.target.value});
    }
    onImwSChange(event){
      this.setState({imwS: event.target.value});
    }
    onNsChange(event){
      this.setState({ns: event.target.value});
    }
    onNsSChange(event){
      this.setState({nsS: event.target.value});
    }
    onNmChange(event){
      this.setState({nm: event.target.value});
    }
    onNmSChange(event){
      this.setState({nmS: event.target.value});
    }
    onAsmChange(event){
      this.setState({asm: event.target.value});
    }
    onAsmSChange(event){
      this.setState({asmS: event.target.value});
    }
    onAswChange(event){
      this.setState({asw: event.target.value});
    }
    onAswSChange(event){
      this.setState({aswS: event.target.value});
    }
    onAmmChange(event){
      this.setState({amm: event.target.value});
    }
    onAmmSChange(event){
      this.setState({ammS: event.target.value});
    }
    onAmwChange(event){
      this.setState({amw: event.target.value});
    }
    onAmwSChange(event){
      this.setState({amwS: event.target.value});
    }
    onPrepositionChange(event){
      this.setState({preposition: event.target.value.replace("?","@@").replace("\\","&&").replace("/","№№")});
    }
    onTranslateRuChange(event){
      this.setState({translateRu: event.target.value.replace("?","@@").replace("\\","&&").replace("/","№№")});
    }
    onTranslateEnChange(event){
      this.setState({translateEn: event.target.value.replace("?","@@").replace("\\","&&").replace("/","№№")});
    }
    onTranslateFrChange(event){
      this.setState({translateFr: event.target.value.replace("?","@@").replace("\\","&&").replace("/","№№")});
    }
    onPhraseChange(event){
      this.setState({phrase: event.target.value.replace("?","@@").replace("\\","&&").replace("/","№№")});
    }
    onPhraseTranslateRuChange(event){
      this.setState({phraseTranslateRu: event.target.value.replace("?","@@").replace("\\","&&").replace("/","№№")});
    }
    onPhraseTranslateEnChange(event){
      this.setState({phraseTranslateEn: event.target.value.replace("?","@@").replace("\\","&&").replace("/","№№")});
    }
    onPhraseTranslateFrChange(event){
      this.setState({phraseTranslateFr: event.target.value.replace("?","@@").replace("\\","&&").replace("/","№№")});
    }
    onFamilyChange(event){
      this.setState({family: event.target.value.replace("?","@@").replace("\\","&&").replace("/","№№")});
    }
    onFamilyTranslateRuChange(event){
      this.setState({familyTranslateRu: event.target.value.replace("?","@@").replace("\\","&&").replace("/","№№")});
    }
    onFamilyTranslateEnChange(event){
      this.setState({familyTranslateEn: event.target.value.replace("?","@@").replace("\\","&&").replace("/","№№")});
    }
    onFamilyTranslateFrChange(event){
      this.setState({familyTranslateFr: event.target.value.replace("?","@@").replace("\\","&&").replace("/","№№")});
    }
    onSynonymChange(event){
      this.setState({synonym: event.target.value.replace("?","@@").replace("\\","&&").replace("/","№№")});
    }
    onSynonymTranslateRuChange(event){
      this.setState({synonymTranslateRu: event.target.value.replace("?","@@").replace("\\","&&").replace("/","№№")});
    }
    onSynonymTranslateEnChange(event){
      this.setState({synonymTranslateEn: event.target.value.replace("?","@@").replace("\\","&&").replace("/","№№")});
    }
    onSynonymTranslateFrChange(event){
      this.setState({synonymTranslateFr: event.target.value.replace("?","@@").replace("\\","&&").replace("/","№№")});
    }
    onAntonymChange(event){
      this.setState({antonym: event.target.value.replace("?","@@").replace("\\","&&").replace("/","№№")});
    }
    onAntonymTranslateRuChange(event){
      this.setState({antonymTranslateRu: event.target.value.replace("?","@@").replace("\\","&&").replace("/","№№")});
    }
    onAntonymTranslateEnChange(event){
      this.setState({antonymTranslateEn: event.target.value.replace("?","@@").replace("\\","&&").replace("/","№№")});
    }
    onAntonymTranslateFrChange(event){
      this.setState({antonymTranslateFr: event.target.value.replace("?","@@").replace("\\","&&").replace("/","№№")});
    }
    onSentenceChange(event){
      this.setState({sentence: event.target.value.replace("?","@@").replace("\\","&&").replace("/","№№")});
    }
    onSentenceTranslateRuChange(event){
      this.setState({sentenceTranslateRu: event.target.value.replace("?","@@").replace("\\","&&").replace("/","№№")});
    }
    onSentenceTranslateEnChange(event){
      this.setState({sentenceTranslateEn: event.target.value.replace("?","@@").replace("\\","&&").replace("/","№№")});
    }
    onSentenceTranslateFrChange(event){
      this.setState({sentenceTranslateFr: event.target.value.replace("?","@@").replace("\\","&&").replace("/","№№")});
    }
    getRoots(){
      fetch('http://localhost:8000/getroots/'+this.state.benjan+"/"+this.state.letter1+'/'+this.state.letter2+'/'+this.state.letter3+'/'+this.state.letter4).then(response => {
              return response.json();
        }).then(data => {
            this.setState({
                roots: data
            })
        });
    }
    getVerbsByLetters(){
      fetch('http://localhost:8000/getverbsbyletters/'+this.state.benjan+'/'+root_id+'/'+this.state.letter1+'/'+this.state.letter2+'/'+this.state.letter3+'/'+this.state.letter4).then(response => {
              return response.json();
        }).then(data => {
            this.setState({
                verbsbyletters: data
            })
        });
    }
    createDump(e){
      e.preventDefault();
       fetch('http://localhost:8000/createdump/')
    }
    getVerbByRootId (rootNumber,e) {
      e.preventDefault();
      root_id = rootNumber;
      fetch('http://localhost:8000/getroot/'+rootNumber).then(response => {
        return response.json();
      }).then(data1 => {
          this.setState({
              thisIsNewVerb: "0",
              rootByNumber:data1,
              benjan: data1[0].benjan,letter1: data1[0].letter1,letter2: data1[0].letter2,
              letter3: data1[0].letter3,letter4: data1[0].letter4,descript: data1[0].descript,sound: data1[0].sound,
              inf:data1[0].inf,infS: data1[0].infS,p1s: data1[0].p1s,p1sS: data1[0].p1sS,p2sm: data1[0].p2sm,
              p2smS: data1[0].p2smS,p2sw: data1[0].p2sw,p2swS: data1[0].p2swS,p3sm: data1[0].p3sm,p3smS: data1[0].p3smS,p3sw: data1[0].p3sw,p3swS: data1[0].p3swS,
              p1m: data1[0].p1m,p1mS: data1[0].p1mS,p2mm: data1[0].p2mm,p2mmS: data1[0].p2mmS,p2mw: data1[0].p2mw,
              p2mwS: data1[0].p2mwS,p3m: data1[0].p3m,p3mS: data1[0].p3mS,
              nsm: data1[0].nsm,nsmS: data1[0].nsmS,nsw: data1[0].nsw,nswS: data1[0].nswS,nmm: data1[0].nmm,
              nmmS: data1[0].nmmS,nmw: data1[0].nmw,nmwS: data1[0].nmwS,f1s: data1[0].f1s,f1sS: data1[0].f1sS,f2sm: data1[0].f2sm,
              f2smS: data1[0].f2smS,f2sw: data1[0].f2sw,f2swS: data1[0].f2swS,f3sm: data1[0].f3sm,f3smS: data1[0].f3smS,
              f3sw: data1[0].f3sw,f3swS: data1[0].f3swS,f1m: data1[0].f1m,f1mS: data1[0].f1mS,f2mm: data1[0].f2mm,
              f2mmS: data1[0].f2mmS,f2mw: data1[0].f2mw,f2mwS: data1[0].f2mwS,f3m: data1[0].f3m,f3mS: data1[0].f3mS,
              ism: data1[0].ism,ismS: data1[0].ismS,isw: data1[0].isw,iswS: data1[0].iswS,imm: data1[0].imm,
              immS: data1[0].immS,imw: data1[0].imw,imwS: data1[0].imwS,ns: data1[0].ns,nsS: data1[0].nsS,
              nm: data1[0].nm,nmS: data1[0].nmS,asm: data1[0].asm,asmS: data1[0].asmS,asw: data1[0].asw,
              aswS: data1[0].aswS,amm: data1[0].amm,ammS: data1[0].ammS,amw: data1[0].amw,amwS: data1[0].amwS             
              })  
      });
      fetch('http://localhost:8000/gettranslations/'+rootNumber).then(response => {
        return response.json();
      }).then(data2 => {
          this.setState({
              translationsByNumber:data2
              })
      });
      fetch('http://localhost:8000/getphrases/'+rootNumber).then(response => {
        return response.json();
      }).then(data3 => {
          this.setState({
              phrasesByNumber:data3
              })
      });      
      fetch('http://localhost:8000/getfamilies/'+rootNumber).then(response => {
        return response.json();
      }).then(data4 => {
          this.setState({
              familiesByNumber:data4
              })
      });
      fetch('http://localhost:8000/getsynonyms/'+rootNumber).then(response => {
        return response.json();
      }).then(data5 => {
          this.setState({
              synonymsByNumber:data5
              })
      });
      fetch('http://localhost:8000/getantonyms/'+rootNumber).then(response => {
        return response.json();
      }).then(data6 => {
          this.setState({
              antonymsByNumber:data6
              })
      }); 
      fetch('http://localhost:8000/getsentencies/'+rootNumber).then(response => {
        return response.json();
      }).then(data7 => {
          this.setState({
              sentenciesByNumber:data7
              })
      });
      fetch('http://localhost:8000/getactivepassives/'+rootNumber).then(response => {
        return response.json();
      }).then(data8 => {
          this.setState({
            activepassivesByNumber:data8
              })
      });
      fetch('http://localhost:8000/getactivepassives1/'+rootNumber).then(response => {
        return response.json();
      }).then(data9 => {
          this.setState({
            activepassivesByNumber1:data9
              })
      });          
    }
    getTranslationById(translationId,e){
      e.preventDefault();
      fetch('http://localhost:8000/gettranslation/'+translationId).then(response => {
        if(response.ok){
        return response.json();
        }else{
          alert("שגיאה. תנסה שוב");
        }
      }).then(data1 => {
        
          this.setState({
            thisIsNewTranslation: '0',
            translationId: data1[0]._id,
            preposition: data1[0].preposition,
            translateRu: data1[0].translateRu,
            translateEn: data1[0].translateEn,
            translateFr: data1[0].translateFr,
            sentence: data1[0].sentence,
            sentenceTranslateRu: data1[0].sentenceTranslateRu,
            sentenceTranslateEn: data1[0].sentenceTranslateEn,
            sentenceTranslateFr: data1[0].sentenceTranslateFr          
          })
              
      }); 
    }
    getFamilyById(familyId,e){
      e.preventDefault();
      fetch('http://localhost:8000/getfamily/'+familyId).then(response => {
        if(response.ok){
        return response.json();
        }else{
          alert("שגיאה. תנסה שוב");
        }
      }).then(data1 => {
        
          this.setState({
            thisIsNewFamily: '0',
            familyId: data1[0]._id,
            family: data1[0].family,
            familyTranslateRu: data1[0].familyTranslateRu,
            familyTranslateEn: data1[0].familyTranslateEn,
            familyTranslateFr: data1[0].familyTranslateFr
          })
              
      }); 
    }
    getSynonymById(synonymId,e){
      e.preventDefault();
      fetch('http://localhost:8000/getsynonym/'+synonymId).then(response => {
        if(response.ok){
        return response.json();
        }else{
          alert("שגיאה. תנסה שוב");
        }
      }).then(data1 => {
        
          this.setState({
            thisIsNewSynonym: '0',
            synonymId: data1[0]._id,
            synonym: data1[0].synonym,
            synonymTranslateRu: data1[0].synonymTranslateRu,
            synonymTranslateEn: data1[0].synonymTranslateEn,
            synonymTranslateFr: data1[0].synonymTranslateFr
          })
              
      }); 
    }
    getAntonymById(antonymId,e){
      e.preventDefault();
      fetch('http://localhost:8000/getantonym/'+antonymId).then(response => {
        if(response.ok){
        return response.json();
        }else{
          alert("שגיאה. תנסה שוב");
        }
      }).then(data1 => {
        
          this.setState({
            thisIsNewAntonym: '0',
            antonymId: data1[0]._id,
            antonym: data1[0].antonym,
            antonymTranslateRu: data1[0].antonymTranslateRu,
            antonymTranslateEn: data1[0].antonymTranslateEn,
            antonymTranslateFr: data1[0].antonymTranslateFr
          })
              
      }); 
    }
    getPhraseById(phraseId,e){
      e.preventDefault();
      
      fetch('http://localhost:8000/getphrase/'+phraseId).then(response => {
        if(response.ok){
        return response.json();
        }else{
          alert("שגיאה. תנסה שוב");
        }
      }).then(data1 => {
        
          this.setState({
            thisIsNewPhrase: '0',
            phraseId: data1[0]._id,
            phrase: data1[0].phrase,
            phraseTranslateRu: data1[0].phraseTranslateRu,
            phraseTranslateEn: data1[0].phraseTranslateEn,
            phraseTranslateFr: data1[0].phraseTranslateFr
          })
              
      }); 
    }
    getAllActivePassives(){
      if(this.state.benjan.indexOf("נפעל")>-1||this.state.benjan.indexOf("פועל")>-1||this.state.benjan.indexOf("הופעל")>-1){
        fetch('http://localhost:8000/getactivepassives1/'+root_id).then(response => {
          return response.json();
        }).then(data9 => {
            this.setState({
                activepassivesByNumber1:data9
                });
                arrOfRootsId.length = 0;
        });
      }else{
        fetch('http://localhost:8000/getactivepassives/'+root_id).then(response => {
          return response.json();
        }).then(data8 => {
            this.setState({
                activepassivesByNumber:data8
                });
                arrOfRootsId.length = 0;
        });
      }

    }
    getAllTranslations(){
      fetch('http://localhost:8000/gettranslations/'+root_id).then(response => {
        return response.json();
      }).then(data2 => {
          this.setState({
              translationsByNumber:data2
              })
      }); 
    }
    getAllFamilies(){
      fetch('http://localhost:8000/getfamilies/'+root_id).then(response => {
        return response.json();
      }).then(data2 => {
          this.setState({
              familiesByNumber:data2
              })
      }); 
    }
    getAllSynonyms(){
      fetch('http://localhost:8000/getsynonyms/'+root_id).then(response => {
        return response.json();
      }).then(data2 => {
          this.setState({
              synonymsByNumber:data2
              })
      }); 
    }
    getAllAntonyms(){
      fetch('http://localhost:8000/getantonyms/'+root_id).then(response => {
        return response.json();
      }).then(data2 => {
          this.setState({
              antonymsByNumber:data2
              })
      }); 
    }
    getAllPhrases(){
      fetch('http://localhost:8000/getphrases/'+root_id).then(response => {
        return response.json();
      }).then(data2 => {
          this.setState({
              phrasesByNumber:data2
              })
      }); 
    }
    addNewWord(){
      var a = (Math.floor((Math.random()*10000))).toString();
      while(arr.includes(a)==true){
          a = (Math.floor((Math.random()*10000))).toString(); 
      };
      arr.push(a);
      
      root_id = a;
      this.setState({readyToAdditionals:"1"});
      if(this.state.benjan.indexOf("נפעל")>-1||this.state.benjan.indexOf("פועל")>-1||this.state.benjan.indexOf("הופעל")>-1){
       this.setState({thisIsPassive:"1"}) 
      }else{
        this.setState({thisIsPassive:"0"}) 
      }

      fetch('http://localhost:8000/newroot/'+root_id+'/'+this.state.benjan +'/'+this.state.letter1+'/'+this.state.letter2+
      '/'+this.state.letter3+'/'+this.state.letter4+'/'+this.state.descript+'/'+root_id+'.wav'+'/'+this.state.inf+'/'+this.state.infS+'/'+this.state.p1s+'/'+this.state.p1sS+
      '/'+this.state.p2sm+'/'+this.state.p2smS+'/'+this.state.p2sw+'/'+this.state.p2swS+'/'+this.state.p3sm+
      '/'+this.state.p3smS+'/'+this.state.p3sw+'/'+this.state.p3swS+'/'+this.state.p1m+'/'+this.state.p1mS+'/'+
      this.state.p2mm+'/'+this.state.p2mmS+'/'+this.state.p2mw+'/'+this.state.p2mwS+'/'+this.state.p3m+'/'+this.state.p3mS+
      '/'+this.state.nsm+'/'+this.state.nsmS+'/'+this.state.nsw+'/'+this.state.nswS+'/'+this.state.nmm+'/'+this.state.nmmS+'/'+
      this.state.nmw+'/'+this.state.nmwS+'/'+this.state.f1s+'/'+this.state.f1sS+'/'+this.state.f2sm+'/'+this.state.f2smS+
      '/'+this.state.f2sw+'/'+this.state.f2swS+'/'+this.state.f3sm+'/'+this.state.f3smS+'/'+this.state.f3sw+'/'+
      this.state.f3swS+'/'+this.state.f1m+'/'+this.state.f1mS+'/'+this.state.f2mm+'/'+this.state.f2mmS+'/'+this.state.f2mw+
      '/'+this.state.f2mwS+'/'+this.state.f3m+'/'+this.state.f3mS+'/'+this.state.ism+'/'+this.state.ismS+'/'+this.state.isw+
      '/'+this.state.iswS+'/'+this.state.imm+'/'+this.state.immS+'/'+this.state.imw+'/'+this.state.imwS+'/'+this.state.ns+
      '/'+this.state.nsS+'/'+this.state.nm+'/'+this.state.nmS+'/'+this.state.asm+'/'+this.state.asmS+'/'+this.state.asw+
      '/'+this.state.aswS+'/'+this.state.amm+'/'+this.state.ammS+'/'+this.state.amw+'/'+
      this.state.amwS,{method:'POST' }).then((response) => {
        if(response.ok){
         alert("נרשם שורש "+this.state.letter1+" "+this.state.letter2+" "+this.state.letter3+" "+
         this.state.letter4+" בבניין "+this.state.benjan);
            return response.json();
        }else{
          alert("שגיאה. תנסה שוב");
        }    
        }).then(() => {this.getRoots(),this.getVerbsByLetters()})
        
    }
    addNewPhrase(){
      fetch('http://localhost:8000/newphrase/'+root_id+'/'+this.state.phrase +'/'+this.state.phraseTranslateRu+
      '/'+this.state.phraseTranslateEn+'/'+this.state.phraseTranslateFr,{method:'POST' }).then((response) => {
      if(response.ok){
        this.setState({
          phrase: '_',
          phraseTranslateRu: '_',
          phraseTranslateEn: '_',
          phraseTranslateFr: '_'
         });  
           return response.json();
      }else{
        alert("שגיאה. תנסה שוב");
      } 
       }).then(()=>{
        this.getAllPhrases()
      });

    }
    addNewFamily(){
      fetch('http://localhost:8000/newfamily/'+root_id+'/'+this.state.family +'/'+this.state.familyTranslateRu+
      '/'+this.state.familyTranslateEn+'/'+this.state.familyTranslateFr,{method:'POST' }).then(response => {
      if(response.ok){ 
        this.setState({
          family: '_',
          familyTranslateRu: '_',
          familyTranslateEn: '_',
          familyTranslateFr: '_'
         }); 
           return response.json();
      }else{
        alert("שגיאה. תנסה שוב");
      } 
       }).then(()=>{
        this.getAllFamilies();
      });
    }
    addNewSynonym(){
      fetch('http://localhost:8000/newsynonym/'+root_id+'/'+this.state.synonym +'/'+this.state.synonymTranslateRu+
      '/'+this.state.synonymTranslateEn+'/'+this.state.synonymTranslateFr,{method:'POST' }).then(response => {
      if(response.ok){ 
        this.setState({
          synonym: '_',
          synonymTranslateRu: '_',
          synonymTranslateEn: '_',
          synonymTranslateFr: '_'
        }); 
           return response.json();
      }else{
        alert("שגיאה. תנסה שוב");
      } 
       }).then(()=>{
        this.getAllSynonyms()
      });

    }
    addNewAntonym(){
      fetch('http://localhost:8000/newantonym/'+root_id+'/'+this.state.antonym +'/'+this.state.antonymTranslateRu+
      '/'+this.state.antonymTranslateEn+'/'+this.state.antonymTranslateFr,{method:'POST' }).then(response => {
      if(response.ok){
        this.setState({
          antonym: '_',
          antonymTranslateRu: '_',
          antonymTranslateEn: '_',
          antonymTranslateFr: '_' 
         });  
           return response.json();
      }else{
        alert("שגיאה. תנסה שוב");
      } 
       }).then(()=>{
        this.getAllAntonyms()
      });

    }
    addNewSentence(sentenceNumber,e){
      e.preventDefault();
      fetch('http://localhost:8000/newtranslation/'+root_id+'/'+this.state.preposition +'/'+this.state.translateRu+
      '/'+this.state.translateEn+'/'+this.state.translateFr+'/'+this.state.sentence +'/'+this.state.sentenceTranslateRu+
      '/'+this.state.sentenceTranslateEn+'/'+this.state.sentenceTranslateFr+'/'+root_id+'S_'+sentenceNumber+'.wav',{method:'POST' }).then(response => {
        if(response.ok){
          this.setState({ 
            preposition: '_',
            translateRu: '_',
            translateEn: '_',
            translateFr: '_',        
            sentence: '_',
            sentenceTranslateRu: '_',
            sentenceTranslateEn: '_',
            sentenceTranslateFr: '_'
           }); 
              return response.json();
          }else{
            alert("שגיאה. תנסה שוב");
          }
        }).then(()=>{
          this.getAllTranslations()
        });

  
    }
    setActivePassive(activPassivId,e){
      e.preventDefault();
      if(this.state.benjan.indexOf("נפעל")>-1 || this.state.benjan.indexOf("נפועל")>-1 || this.state.benjan.indexOf("הופעל")>-1 ){
        fetch('http://localhost:8000/newactivpassiv/'+activPassivId+'/'+root_id ,{method:'POST' }).then((response) => {
          if(response.ok){  
           return response.json();
          }else{
           alert("שגיאה. תנסה שוב");
          } 
        }).then(()=>{
          this.getAllActivePassives();
          arrOfRootsId.length = 0;
        });

      }else if (this.state.benjan.indexOf("התפעל")>-1){
        alert("בניין התפעל");  
      }else{
        fetch('http://localhost:8000/newactivpassiv/'+root_id+'/'+activPassivId ,{method:'POST' }).then((response) => {
          if(response.ok){  
           return response.json();
          }else{
           alert("שגיאה. תנסה שוב");
          } 
        }).then(()=>{
          this.getAllActivePassives();
          arrOfRootsId.length = 0;
        });
      }      
    }
    updateWord(){
      this.setState({readyToAdditionals:"1"});
      this.setState({readyToAdditionals:"1"});
      if(this.state.benjan.indexOf("נפעל")>-1||this.state.benjan.indexOf("פועל")>-1||this.state.benjan.indexOf("הופעל")>-1){
       this.setState({thisIsPassive:"1"}) 
      }else{
        this.setState({thisIsPassive:"0"}) 
      }
      fetch('http://localhost:8000/updateforms/'+root_id+'/'+this.state.benjan +'/'+this.state.letter1+'/'+this.state.letter2+
      '/'+this.state.letter3+'/'+this.state.letter4+'/'+this.state.descript+'/'+root_id+'.wav'+'/'+this.state.inf+'/'+this.state.infS+'/'+this.state.p1s+'/'+this.state.p1sS+
      '/'+this.state.p2sm+'/'+this.state.p2smS+'/'+this.state.p2sw+'/'+this.state.p2swS+'/'+this.state.p3sm+
      '/'+this.state.p3smS+'/'+this.state.p3sw+'/'+this.state.p3swS+'/'+this.state.p1m+'/'+this.state.p1mS+'/'+
      this.state.p2mm+'/'+this.state.p2mmS+'/'+this.state.p2mw+'/'+this.state.p2mwS+'/'+this.state.p3m+'/'+this.state.p3mS+
      '/'+this.state.nsm+'/'+this.state.nsmS+'/'+this.state.nsw+'/'+this.state.nswS+'/'+this.state.nmm+'/'+this.state.nmmS+'/'+
      this.state.nmw+'/'+this.state.nmwS+'/'+this.state.f1s+'/'+this.state.f1sS+'/'+this.state.f2sm+'/'+this.state.f2smS+
      '/'+this.state.f2sw+'/'+this.state.f2swS+'/'+this.state.f3sm+'/'+this.state.f3smS+'/'+this.state.f3sw+'/'+
      this.state.f3swS+'/'+this.state.f1m+'/'+this.state.f1mS+'/'+this.state.f2mm+'/'+this.state.f2mmS+'/'+this.state.f2mw+
      '/'+this.state.f2mwS+'/'+this.state.f3m+'/'+this.state.f3mS+'/'+this.state.ism+'/'+this.state.ismS+'/'+this.state.isw+
      '/'+this.state.iswS+'/'+this.state.imm+'/'+this.state.immS+'/'+this.state.imw+'/'+this.state.imwS+'/'+this.state.ns+
      '/'+this.state.nsS+'/'+this.state.nm+'/'+this.state.nmS+'/'+this.state.asm+'/'+this.state.asmS+'/'+this.state.asw+
      '/'+this.state.aswS+'/'+this.state.amm+'/'+this.state.ammS+'/'+this.state.amw+'/'+
      this.state.amwS,{method:'PUT' }).then(response => {
      if(response.ok){  
           return response.json();
      }else{
        alert("שגיאה. תנסה שוב");
      } 
       }).then(() => {arrOfRootsId.length = 0;  this.getVerbsByLetters()})
    }
    updateTranslation(translationId,e){
      e.preventDefault();
      
      fetch('http://localhost:8000/updatetranslation/'+translationId+'/'+this.state.preposition +'/'+this.state.translateRu+
      '/'+this.state.translateEn+'/'+this.state.translateFr+'/'+this.state.sentence+'/'+this.state.sentenceTranslateRu+
      '/'+this.state.sentenceTranslateEn+'/'+this.state.sentenceTranslateFr,{method:'PUT' }).then(response => {
      if(response.ok){
        
        this.setState ({
          thisIsNewTranslation:"1",
          preposition: '_',
          translateRu: '_',
          translateEn: '_',
          translateFr: '_',        
          sentence: '_',
          sentenceTranslateRu: '_',
          sentenceTranslateEn: '_',
          sentenceTranslateFr: '_'
         });  
            return response.json();
      }else{
        this.setState({thisIsNewTranslation:"0"});
        alert("שגיאה. תנסה שוב");
      } 
       }).then(()=>{this.getAllTranslations()});
  
    }
    updateFamily(familyId,e){
      e.preventDefault();
      
      fetch('http://localhost:8000/updatefamily/'+familyId+'/'+this.state.family +'/'+this.state.familyTranslateRu+
      '/'+this.state.familyTranslateEn+'/'+this.state.familyTranslateFr,{method:'PUT' }).then(response => {
      if(response.ok){
        this.setState ({
          thisIsNewFamily:"1",
          family: '_',
          familyTranslateRu: '_',
          familyTranslateEn: '_',
          familyTranslateFr: '_'        
          });  
           return response.json();
      }else{
        this.setState({thisIsNewFamily:"0"});
        alert("שגיאה. תנסה שוב");
      } 
       }).then(()=>{this.getAllFamilies()});
 
    }
    updateSynonym(synonymId,e){
      e.preventDefault();
      
      fetch('http://localhost:8000/updatesynonym/'+synonymId+'/'+this.state.synonym +'/'+this.state.synonymTranslateRu+
      '/'+this.state.synonymTranslateEn+'/'+this.state.synonymTranslateFr,{method:'PUT' }).then(response => {
      if(response.ok){ 
        this.setState ({
          thisIsNewSynonym:"1",
          synonym: '_',
          synonymTranslateRu: '_',
          synonymTranslateEn: '_',
          synonymTranslateFr: '_'        
          }); 
           return response.json();
      }else{
        this.setState({thisIsNewSynonym:"0"});
        alert("שגיאה. בדוק אם כל השדות מלאים ונסה שוב.");
      } 
       }).then(()=>{this.getAllSynonyms()});
 
    }
    updateAntonym(antonymId,e){
      e.preventDefault();
      
      fetch('http://localhost:8000/updateantonym/'+antonymId+'/'+this.state.antonym +'/'+this.state.antonymTranslateRu+
      '/'+this.state.antonymTranslateEn+'/'+this.state.antonymTranslateFr,{method:'PUT' }).then(response => {
      if(response.ok){
        this.setState ({
          thisIsNewAntonym:"1",
          antonym: '_',
          antonymTranslateRu: '_',
          antonymTranslateEn: '_',
          antonymTranslateFr: '_'        
          });  
           return response.json();
      }else{
        this.setState({thisIsNewAntonym:"0"});
        alert("שגיאה. בדוק אם כל השדות מלאים ונסה שוב.");
      } 
       }).then(()=>{this.getAllAntonyms()});
 
    }
    updatePhrase(phraseId,e){
      e.preventDefault();
      
      fetch('http://localhost:8000/updatephrase/'+phraseId+'/'+this.state.phrase +'/'+this.state.phraseTranslateRu+
      '/'+this.state.phraseTranslateEn+'/'+this.state.phraseTranslateFr,{method:'PUT' }).then(response => {
      if(response.ok){
        this.setState ({
          thisIsNewPhrase:"1",
          phrase: '_',
          phraseTranslateRu: '_',
          phraseTranslateEn: '_',
          phraseTranslateFr: '_'        
          });  
           return response.json();
      }else{
        this.setState({thisIsNewPhrase:"0"});
        alert("שגיאה. בדוק אם כל השדות מלאים ונסה שוב.");
      } 
       }).then(()=>{this.getAllPhrases()}); 
    }
    deleteVerbByRootId (rootNumber,e) {
      e.preventDefault();
      fetch('http://localhost:8000/deleteroot/'+rootNumber,{method:'DELETE'}).then((response) => {
        if(response.ok){
            return response.json();          
        }else{
          alert("שגיאה. תנסה שוב");
        }    
        }).then(() => {this.getRoots()})  
    }
    deleteTranslationbById(translationId,e){
      e.preventDefault();
      this.setState({thisIsNewTranslation:"1"});
      fetch('http://localhost:8000/deletetranslation/'+translationId,{method:'DELETE'}).then((response) => {
        if(response.ok){
          this.setState ({
            preposition: '_',
            translateRu: '_',
            translateEn: '_',
            translateFr: '_',        
            sentence: '_',
            sentenceTranslateRu: '_',
            sentenceTranslateEn: '_',
            sentenceTranslateFr: '_'
           });
            return response.json();          
        }else{
          this.setState({thisIsNewTranslation:"0"});
          alert("שגיאה. תנסה שוב");
        }    
        }).then(() => {this.getAllTranslations()})   
    }
    deleteFamilyById(familyId,e){
      e.preventDefault();
      this.setState({thisIsNewFamily:"1"});
      fetch('http://localhost:8000/deletefamily/'+familyId,{method:'DELETE'}).then((response) => {
        if(response.ok){
          this.setState ({
            family: '_',
            familyTranslateRu: '_',
            familyTranslateEn: '_',
            familyTranslateFr: '_'        
            });
            return response.json();         
        }else{
          alert("שגיאה. תנסה שוב");
        }    
        }).then(() => {this.getAllFamilies()})   
    }
    deleteSynonymById(synonymId,e){
      e.preventDefault();
      this.setState({thisIsNewSynonym:"1"});
      fetch('http://localhost:8000/deletesynonym/'+synonymId,{method:'DELETE'}).then((response) => {
        if(response.ok){
          this.setState ({
            synonym: '_',
            synonymTranslateRu: '_',
            synonymTranslateEn: '_',
            synonymTranslateFr: '_'        
            });
            return response.json();
            
        }else{
          alert("שגיאה. תנסה שוב");
        }    
        }).then(() => {this.getAllSynonyms()})   
    }
    deleteAntonymById(antonymId,e){
      e.preventDefault();
      this.setState({thisIsNewAntonym:"1"});
      fetch('http://localhost:8000/deleteantonym/'+antonymId,{method:'DELETE'}).then((response) => {
        if(response.ok){
          this.setState ({
            antonym: '_',
            antonymTranslateRu: '_',
            antonymTranslateEn: '_',
            antonymTranslateFr: '_'        
            });
            return response.json();
            
        }else{
          alert("שגיאה. תנסה שוב");
        }    
        }).then(() => {this.getAllAntonyms()})   
    }
    deletePhraseById(phraseId,e){
      e.preventDefault();
      this.setState({thisIsNewPhrase:"1"});
      fetch('http://localhost:8000/deletephrase/'+phraseId,{method:'DELETE'}).then((response) => {
        if(response.ok){
          this.setState ({
            phrase: '_',
            phraseTranslateRu: '_',
            phraseTranslateEn: '_',
            phraseTranslateFr: '_'        
            });
            return response.json();
        }else{
          alert("שגיאה. תנסה שוב");
        }    
        }).then(() => {this.getAllPhrases()})   
    }
    deleteActivepassiveById(activepassiveId,e){
      e.preventDefault();
      arrOfRootsId.length=0;
      fetch('http://localhost:8000/deleteactivepassive/'+activepassiveId,{method:'DELETE'}).then((response) => {
        if(response.ok){
            return response.json();        
        }else{
          alert("שגיאה. תנסה שוב");
        }    
        }).then(() => { this.getAllActivePassives()})
    }
    renderSwitch(param) {
      switch(param) {
        case '1':
          return (
          <div>

            <div className="flexItem24">                    
              <button onClick={this.addNewWord} id="btnAddNewWord">הוסף מילה חדשה</button> 
              <br/>
              <br/>
            </div>       
            
          </div>);
          
        case '0':
        
       
          return (
          <div>

            <div className="flexItem24">                    
              <button onClick={this.updateWord} id="btnAddNewWord">לחדש את המילה</button> 
            </div> 

          </div>)
            
        default:
          return (<div> </div>);
          
      }
    }  
    renderSwitch1(param){
      switch(param){
        case "1": 
        return(
          <div>
            <div className="remark">הקלט את המילה, הכנס שם לקובץ <span dir="ltr">{root_id}.wav</span></div>
            <br/>
            <div className="remark">הוספו תרגומים, משפחה, הפכים, מילים נרדפות</div>
            <br/>
            <div className="flexItem22">{/* начало первой строки дополнений */}
              <div className="flexItem221" dir="ltr">
                <div className="flexItem2211">
                  <p>תרגומים</p>
                </div>
                  <div id="translation" className="finded">
                  <p>כבר רשום במילון:</p>
                  {
                                  this.state.translationsByNumber.map((translate, ind) =>{
                                    return(<div>
                                            <div className="topFlexContainer"> 
                                              <div className="flexItem221">                                    
                                                <div key={"Ru"+ind}>{ind+1} Ru. {translate.translateRu.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}</div>
                                                <div key={"RuS"+ind}>{translate.sentenceTranslateRu.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}</div>
                                              </div>
                                              <div className="flexItem221">
                                                <div key={"En"+ind}>{ind+1} En. {translate.translateEn.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}</div>
                                                <div key={"EnS"+ind}>{translate.sentenceTranslateEn.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}</div>
                                              </div>
                                              <div className="flexItem221">
                                                <div key={"Fr"+ind}>{ind+1} Fr. {translate.translateFr.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}</div>
                                                <div key={"FrS"+ind}>{translate.sentenceTranslateFr.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}</div>
                                              </div>
                                            </div>
                                            <div className="topFlexContainer">
                                              <button className="rootBtn" onClick = {(e) => this.getTranslationById(translate._id,e)}>לבחור</button>
                                              <button className="rootBtn" onClick = {(e) => this.deleteTranslationbById(translate._id,e)}>למחוק</button> 
                                            </div>
                                         </div> );
                                  })
                  }
                  </div>
                  <p>תרגום חדש</p>
                  <div>מילת יחס:</div>
                  <div><input type="text" name="preposition" value={this.state.preposition.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}
                                    onChange={this.onPrepositionChange} dir="rtl"/></div>                   
                  <div> Ru תרגום:</div>
                  <div><input type="text" name="translateRu" id="longForm" value={this.state.translateRu.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}
                                    onChange={this.onTranslateRuChange} dir="ltr"/></div> 
                  <div> En תרגום:</div>
                  <div><input type="text" name="translateEn" id="longForm" value={this.state.translateEn.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}
                                    onChange={this.onTranslateEnChange} dir="ltr"/></div> 
                  <div> Fr תרגום:</div>
                  <div><input type="text" name="translateFr" id="longForm" value={this.state.translateFr.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}
                                    onChange={this.onTranslateFrChange} dir="ltr"/></div>                                                                         
                  <div>משפט חדש:</div>
                <div><textarea name="sentence" value={this.state.sentence.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}
                                  onChange={this.onSentenceChange} dir="rtl"/></div> 
                <div> Ru תרגום של משפט חדש:</div>
                <div><textarea name="sentenceTranslateRu" value={this.state.sentenceTranslateRu.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}
                                  onChange={this.onSentenceTranslateRuChange}dir="ltr"/></div>
                <div> En תרגום של משפט חדש:</div>                  
                <div><textarea name="sentenceTranslateEn" value={this.state.sentenceTranslateEn.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}
                                  onChange={this.onSentenceTranslateEnChange}dir="ltr"/></div>
                <div> Fr תרגום של משפט חדש:</div>                  
                <div><textarea name="sentenceTranslateFr" value={this.state.sentenceTranslateFr.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}
                                  onChange={this.onSentenceTranslateFrChange}dir="ltr"/></div>                                                                    
                <br />                  
                <div className="remark">הקלט משפט. הכנס שם הקובץ <span dir="ltr">{root_id}S_{this.state.translationsByNumber.length+1}.wav</span></div>                                                    
                {this.renderSwitch2(this.state.thisIsNewTranslation)} 
              </div>

              <div className="flexItem221"  dir="ltr">
                <div className="flexItem2211">
                  <p>משפחה</p>
                </div>  
                <div id="families" className="finded">
                <p>כבר רשום במילון:</p>
                {
                this.state.familiesByNumber.map((family, ind) =>{
                  return(<div>
                  <div key={ind}>{ind+1}. {family.family.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}</div>
                  <div className="topFlexContainer">
                      <button className="rootBtn" onClick = {(e) => this.getFamilyById(family._id,e)}>לבחור</button>
                      <button className="rootBtn" onClick = {(e) => this.deleteFamilyById(family._id,e)}>למחוק</button> 
                  </div>
                  </div>
                    ); 
                })
                }
                </div>       
                <div>מילה חדשה ששייכת לאותה משפחה:</div>
                <div><input type="text" name="family" value={this.state.family.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}
                                  onChange={this.onFamilyChange} dir="rtl"/></div> 
                <div> Ru תרגום של מילה חדשה ששייכת לאותה משפחה:</div>
                <div><input type="text" name="familyTranslateRu" value={this.state.familyTranslateRu.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}
                                  onChange={this.onFamilyTranslateRuChange} dir="ltr"/></div>  
                <div> En תרגום של מילה חדשה ששייכת לאותה משפחה:</div>
                <div><input type="text" name="familyTranslateEn" value={this.state.familyTranslateEn.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}
                                  onChange={this.onFamilyTranslateEnChange} dir="ltr"/></div>
                <div> Fr תרגום של מילה חדשה ששייכת לאותה משפחה:</div>
                <div><input type="text" name="familyTranslateFr" value={this.state.familyTranslateFr.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}
                                  onChange={this.onFamilyTranslateFrChange} dir="ltr"/></div>
                {this.renderSwitch3(this.state.thisIsNewFamily)}                                      
                <div className="flexItem2211">
                  <p>מילים נרדפות</p>
                </div>  
                <div id="synonyms" className="finded">
                <p>כבר רשום במילון:</p>
                {
                this.state.synonymsByNumber.map((synonym, ind) =>{
                  return(<div>
                  <div key={ind}>{ind+1}. {synonym.synonym.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}</div>
                  <div className="topFlexContainer">
                      <button className="rootBtn" onClick = {(e) => this.getSynonymById(synonym._id,e)}>לבחור</button>
                      <button className="rootBtn" onClick = {(e) => this.deleteSynonymById(synonym._id,e)}>למחוק</button> 
                  </div>                  
                   </div> ); 
                })          
                
              }
              </div>       
                <div>מילה נרדפת חדשה:</div>
                <div><input type="text" name="synonym" value={this.state.synonym.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}
                                  onChange={this.onSynonymChange} dir="rtl"/></div> 
                <div> Ru תרגום למילה נרדפת חדשה:</div>
                <div><input type="text" name="synonymTranslateRu" value={this.state.synonymTranslateRu.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}
                                  onChange={this.onSynonymTranslateRuChange} dir="ltr"/></div>  
                <div> En תרגום למילה נרדפת חדשה:</div>
                <div><input type="text" name="synonymTranslateEn" value={this.state.synonymTranslateEn.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}
                                  onChange={this.onSynonymTranslateEnChange} dir="ltr"/></div>
                <div> Fr תרגום למילה נרדפת חדשה:</div>
                <div><input type="text" name="synonymTranslateFr" value={this.state.synonymTranslateFr.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}
                                  onChange={this.onSynonymTranslateFrChange} dir="ltr"/></div> 
                {this.renderSwitch4(this.state.thisIsNewSynonym)} 
              </div>
              <div className="flexItem221"  dir="ltr">
              <div className="flexItem2211">
                  <p>הפכים</p>
                </div>  
                <div id="antonyms" className="finded">
                <p>כבר רשום במילון:</p>
                {/* {this.renderAntonyms()} */}
                {
                this.state.antonymsByNumber.map((antonym, ind) =>{
                  return(<div>
                  <div key={ind}>{ind+1}. {antonym.antonym.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}</div>
                  <div className="topFlexContainer">
                    <button className="rootBtn" onClick = {(e) => this.getAntonymById(antonym._id,e)}>לבחור</button>
                    <button className="rootBtn" onClick = {(e) => this.deleteAntonymById(antonym._id,e)}>למחוק</button> 
                  </div>
                   </div> );
                 })          
                }        
                </div>       
                <div>הפך חדש:</div>
                <div><input type="text" name="antonym" value={this.state.antonym.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}
                                  onChange={this.onAntonymChange} dir="rtl"/></div>
                <div> Ru תרגןם להפך חדש:</div>
                <div><input type="text" name="antonymTranslateRu" value={this.state.antonymTranslateRu.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}
                                  onChange={this.onAntonymTranslateRuChange} dir="ltr"/></div> 
                <div> En תרגןם להפך חדש:</div>
                <div><input type="text" name="antonymTranslateEn" value={this.state.antonymTranslateEn.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}
                                  onChange={this.onAntonymTranslateEnChange} dir="ltr"/></div>
                <div> Fr תרגןם להפך חדש:</div>
                <div><input type="text" name="antonymTranslateFr" value={this.state.antonymTranslateFr.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}
                                  onChange={this.onAntonymTranslateFrChange} dir="ltr"/></div> 
                {this.renderSwitch5(this.state.thisIsNewAntonym)}
                <div className="flexItem2211">
                  <p>ביטוים</p>
                </div>
                  <div id="phrases" className="finded">
                  <p>כבר רשום במילון:</p>
                  {
                  this.state.phrasesByNumber.map((phrase, ind) =>{
                    return(<div>
                    <div key={ind}>{ind+1}. {phrase.phrase.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}</div>
                    <div className="topFlexContainer">
                      <button className="rootBtn" onClick = {(e) => this.getPhraseById(phrase._id,e)}>לבחור</button>
                      <button className="rootBtn" onClick = {(e) => this.deletePhraseById(phrase._id,e)}>למחוק</button> 
                    </div>                   
                     </div> ); 
                  })
                  }
                  </div>       
                  <div>דוגמה חדשה:</div>
                  <div><input type="text" name="phrase" value={this.state.phrase.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}
                                    onChange={this.onPhraseChange} dir="rtl"/></div> 
                  <div> Ru תרגום של דוגמה חדשה:</div>
                  <div><textarea name="phraseTranslateRu" value={this.state.phraseTranslateRu.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}
                                    onChange={this.onPhraseTranslateRuChange} dir="ltr"/></div>
                  <div> En תרגום של דוגמה חדשה:</div> 
                  <div><textarea name="phraseTranslateEn" value={this.state.phraseTranslateEn.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}
                                    onChange={this.onPhraseTranslateEnChange} dir="ltr"/></div>
                  <div> Fr תרגום של דוגמה חדשה:</div>                  
                  <div><textarea name="phraseTranslateFr" value={this.state.phraseTranslateFr.replace(/@@/g, "?").replace(/&&/g,"\\").replace(/№№/g,"/")}
                                    onChange={this.onPhraseTranslateFrChange} dir="ltr"/></div> 
                  {this.renderSwitch6(this.state.thisIsNewPhrase)} 
              </div>
            </div>{/* конец первой строки дополнений */}
            <div className="flexItem22">

              <div className="flexItem221"  dir="ltr">
                <div className="flexItem2211">
                  <p>אקטיבי\פסיבי</p>
                </div>  
                <div id="activPassiv" className="finded">
                <p>כבר רשום במילון:</p>
                {this.renderSwitch7(this.state.thisIsPassive)}   
                </div>       
                <div>אקטיבי\פסיבי חדש</div>
                {
                this.state.verbsbyletters.map((verb, index) => {
                        if( arrOfRootsId.includes(verb.root_id) ){
                         
                        }else{  
                          return (
                                <div className="root" key={index} dir="ltr">
                                  <div id="rootNumber">{verb.root_id}</div>
                                  <div id="rootDescript">{verb.descript}</div>
                                  <div id="rootDescript">{verb.benjan}</div>
                                  <button className="rootBtn" onClick = {(e) => this.setActivePassive(verb.root_id,e)}>לבחור</button>
                                </div>
                          );
                        }
 
                })

              }  
              </div>
            </div>
          </div>
        );
        default:
        return(<div> </div>);
      }
    }
    renderSwitch2(param){
      switch(param) {
        case '1':
          return (
<div><p><button onClick={(e) => this.addNewSentence(this.state.translationsByNumber.length+1,e)}>הוסף משפט חדש</button></p></div>);
          
        case '0':
        
       
          return (
          <div>

            <div className="flexItem24">                    
              <button onClick= {(e) => this.updateTranslation(this.state.translationId,e)} id="btnAddNewWord">לחדש את התרגום</button> 
            </div> 

          </div>)
            
        default:
          return (<div> </div>);
          
      }
    }
    renderSwitch3(param){
      switch(param) {
        case '1':
          return (
            <div><p><button onClick={(e) => this.addNewFamily(this.state.familiesByNumber.length+1,e)}>הוסף מילה חדשה ששייכת לאותה משפחה</button></p></div>);
          
        case '0':
          return (
          <div>
            <div className="flexItem24">                    
              <button onClick= {(e) => this.updateFamily(this.state.familyId,e)} id="btnAddNewWord">לחדש את המישפחה</button> 
            </div> 
          </div>)
            
        default:
          return (<div> </div>);
          
      }
    }
    renderSwitch4(param){
      switch(param) {
        case '1':
          return (
<div><p><button onClick={(e) => this.addNewSynonym(this.state.synonymsByNumber.length+1,e)}>הוסף סינונים חדש</button></p></div>);
          
        case '0':
        
       
          return (
          <div>

            <div className="flexItem24">                    
              <button onClick= {(e) => this.updateSynonym(this.state.synonymId,e)} id="btnAddNewWord">לחדש את הסינונים</button> 
            </div> 

          </div>)
            
        default:
          return (<div> </div>);
          
      }
    }
    renderSwitch5(param){
      switch(param) {
        case '1':
          return (
<div><p><button onClick={(e) => this.addNewAntonym(this.state.antonymsByNumber.length+1,e)}>הוסף אנטונים חדש</button></p></div>);
          
        case '0':
        
       
          return (
          <div>

            <div className="flexItem24">                    
              <button onClick= {(e) => this.updateAntonym(this.state.antonymId,e)} id="btnAddNewWord">לחדש את האנטונים</button> 
            </div> 

          </div>)
            
        default:
          return (<div> </div>);
          
      }
    }
    renderSwitch6(param){
      switch(param) {
        case '1':
          return (
<div><p><button onClick={(e) => this.addNewPhrase(this.state.phrasesByNumber.length+1,e)}>הוסף דוגמה חדשה</button></p></div>);
          
        case '0':
          return (
          <div>

            <div className="flexItem24">                    
              <button onClick= {(e) => this.updatePhrase(this.state.phraseId,e)} id="btnAddNewWord">לחדש את הדוגמה</button> 
            </div> 

          </div>)
            
        default:
          return (<div> </div>);
          
      }
    }
    renderSwitch7(param){
      switch(param) {
        case "1":
          return(<div>{
                    this.state.activepassivesByNumber1.map((active, ind) =>{
                      arrOfRootsId.push(active.active_id);
                      return(<div>
                               <div key={ind}>{ind+1}. {active.active_id}</div>
                               <div className="topFlexContainer">
                                 <button className="rootBtn" onClick = {(e) => this.deleteActivepassiveById(active._id,e)}>למחוק</button> 
                               </div>
                             </div> );
                    }) 
                  }</div>);
        case "0":
          return(<div>{
                    this.state.activepassivesByNumber.map((passive, ind) =>{
                      arrOfRootsId.push(passive.passive_id);
                      return(<div>
                               <div key={ind}>{ind+1}. {passive.passive_id}</div>
                               <div className="topFlexContainer">
                                 <button className="rootBtn" onClick = {(e) => this.deleteActivepassiveById(passive._id,e)}>למחוק</button> 
                               </div>
                             </div> );
                        
                    }) 
                  }</div>); 
        default:
          return(<div> </div>);
      }
    }
    render() {
      return (  
      <form onSubmit={this.onSubmit} >
      <h1>אנחנו ממלאים את המילון מורשה</h1>
      <button  onClick = {(e) => this.createDump(e)}>להעתיק נתונים</button>
      <div className="topFlexContainer">
       <div className="topFlexItem2"> {/* начало левой части страницы */}
       <div>{root_id}</div>
       
       <div className="flexItem14">
          <p><input type="submit" value="Submit" /></p>
        </div>
        <div className="flexItem21">
          <div className="flexItem211">
            <p><label>בניין: <select name="benjan"  value={this.state.benjan} onChange={this.onBenjanChange}>
                              
                              <option> </option>                             
                              <option>פעל_כתב</option>
                              <option>פעל_ישב</option>
                              <option>פעל_ידע</option>
                              <option>פעל_נפל</option>
                              <option>פעל_נסע</option>
                              <option>פעל_שמח</option>
                              <option>פעל_אכל</option>
                              <option>פעל_קרא</option>
                              <option>פעל_בנה</option>
                              <option>פעל_קום</option>
                              <option>פעל_שיר</option>
                              <option>פעל_ארז</option>
                              <option>פעל_סבב</option>
                              <option>נפעל_נכנס</option>
                              <option>נפעל_נשאר</option>
                              <option>נפעל_נרגע</option>
                              <option>נפעל_נולד</option>
                              <option>נפעל_נאבק</option>
                              <option>נפעל_נרשם</option>
                              <option>נפעל_נבנה</option>
                              <option>נפעל_נעשה</option>
                              <option>נפעל_ניתן</option>
                              <option>נפעל_נמצא</option>
                              <option>פיעל_נצל</option>
                              <option>פיעל_ישב</option>
                              <option>פיעל_תאר</option>
                              <option>פיעל_סים</option>
                              <option>פיעל_מלא</option>
                              <option>פיעל_פטפט</option>
                              <option>פיעל_כבי</option>
                              <option>פיעל_עודד</option>
                              <option>פועל_מטופל</option>
                              <option>פועל_מעודד</option>
                              <option>פועל_מרוצה</option>
                              <option>פועל_ממולא</option>
                              <option>פועל_מבוצע</option>
                              <option>פועל_מפורט</option>
                              <option>הפעיל_הזמין</option>
                              <option>הופעל_מוזמן</option>
                              <option>התפעל_התקדם</option>
                            </select></label></p>
          </div>
          <div className="flexItem211">
                <p>שורש</p>
          </div>          
          <div className="flexItem212">
            <div className="flexItem121" id="inputLetter">                  
             <div> שורשן 1:</div>
             <div><input required type="text" name="letter1" value={this.state.letter1}
                            onChange={this.onLetter1Change} dir="rtl" style={{width: '25px'}}/></div>
            </div>
            <div className="flexItem121" id="inputLetter">                
              <div> שורשן 2:</div>
              <div><input required type="text" name="letter2" value={this.state.letter2}
                              onChange={this.onLetter2Change} dir="rtl" style={{width: '25px'}}/></div>
            </div>
            <div className="flexItem121" id="inputLetter">                 
              <div> שורשן 3:</div>
              <div><input type="text" name="letter3" value={this.state.letter3}
                              onChange={this.onLetter3Change} dir="rtl" style={{width: '25px'}}/></div>
            </div>
            <div className="flexItem121" id="inputLetter">                   
              <div> שורשן 4:</div>
              <div><input type="text"  name="letter4" value={this.state.letter4}
                              onChange={this.onLetter4Change} dir="rtl" style={{width: '25px'}}/></div>
            </div>  
          </div>
          
          <div className="flexItem24"> 
            <button id="btnAddNewWord" onClick={this.getRoots}>מצא את כל הפעלים עם אותו שורש במילון</button>
          </div>
          <div className="flexItem211">  
            <div>
              <div className="root" dir="ltr">
                          <div id="rootNumber">מספר</div>
                          <div id="rootDescript">הגדרה</div>
              </div>
              {
                this.state.roots.map((root, index) => {
                  
                  return (
                          <div className="root" key={index} dir="ltr">
                            <div id="rootNumber">{root.root_id}</div>
                            <div id="rootDescript">{root.descript}</div>
                            <button className="rootBtn" onClick = {(e) => this.getVerbByRootId(root.root_id,e)}>לבחור</button>
                            <button className="rootBtn" onClick = {(e) => this.deleteVerbByRootId(root.root_id,e)}>למחוק</button>
                          </div>
                    );

                })
              } 
              <div className="root" dir="ltr">
                <div id="rootNumber">№№</div>
                <div id="rootDescript"><input required type="text" name="descript" value={this.state.descript}
                            onChange={this.onDescriptChange}/></div>
                <button className="rootBtn" onClick={(e) => this.getAllForms(e)}>מילה חדשה</button> 
              </div>
          
            </div>
          </div>
        </div> 
        <div className="remark">קראו וערכו </div>
            <div className="flexItem21">  
              <div className="flexItem211">
                <p>שם הפועל</p>
              </div>
              <div className="flexItem212">
                <div className="flexItem2121">
                  <p> הצג בכתיב מנוקד: </p>
                  <p><input type="text" id="forms" name="inf" value={this.state.inf}
                                    onChange={this.onInfChange} dir="rtl"/></p>
                </div> 
                <div className="flexItem2121">                
                  <p> הצג בכתיב מלא: </p>
                  <p><input type="text" id="forms" name="infS" value={this.state.infS}
                                    onChange={this.onInfSChange} dir="rtl"/></p>
                </div> 
              </div>                  
            </div>
            <div className="flexItem22"> {/* начало строки с временами */}
              <div className="flexItem221"> {/* начало прошедшего времени */}
                <div className="flexItem2211"> {/*  начало заголовка Прошедшее время */}
                  <p>עבר</p>
                </div> {/* конец заголовка Прошедшее время */}
                <div className="flexItem2212">
                  <div className="flexItem22121">
                    <div className="flexItem221211">
                      <p> הצג בכתיב מנוקד: </p>
                    </div>
                    <div className="flexItem221212">
                    <div id="label">אני:</div><input id="forms" type="text" name="p1s" value={this.state.p1s}
                                    onChange={this.onP1sChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                    <div id="label">אתה:</div><input  id="forms" type="text" name="p2sm" value={this.state.p2sm}
                                    onChange={this.onP2smChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                    <div id="label">את:</div><input id="forms" type="text" name="p2sw" value={this.state.p2sw}
                                    onChange={this.onP2swChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">הוא:</div><input id="forms" type="text" name="p3sm" value={this.state.p3sm}
                                    onChange={this.onP3smChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">היא:</div><input id="forms" type="text" name="p3sw" value={this.state.p3sw}
                                    onChange={this.onP3swChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212"> 
                      <div id="label">אנחנו:</div><input id="forms" type="text" name="p1m" value={this.state.p1m}
                                    onChange={this.onP1mChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">אתם:</div><input id="forms" type="text" name="p2mm" value={this.state.p2mm}
                                    onChange={this.onP2mmChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212"> 
                      <div id="label">אתן:</div><input id="forms" type="text" name="p2mw" value={this.state.p2mw}
                                    onChange={this.onP2mwChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">הם:</div><input id="forms" type="text" name="p3m" value={this.state.p3m}
                                    onChange={this.onP3mChange} dir="rtl"/>
                    </div>                                                                                                                                                                                                                            
                  </div>
                  <div className="flexItem22121">
                    <div className="flexItem221211">
                      <p> הצג בכתיב מלא: </p>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">אני:</div><input id="forms" type="text" name="p1sS" value={this.state.p1sS}
                                    onChange={this.onP1sSChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">אתה:</div><input id="forms" type="text" name="p2smS" value={this.state.p2smS}
                                    onChange={this.onP2smSChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">את:</div><input id="forms" type="text" name="p2swS" value={this.state.p2swS}
                                    onChange={this.onP2swSChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">הוא:</div><input id="forms" type="text" name="p3smS" value={this.state.p3smS}
                                    onChange={this.onP3smSChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">היא:</div><input id="forms" type="text" name="p3swS" value={this.state.p3swS}
                                    onChange={this.onP3swSChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212"> 
                      <div id="label">אנחנו:</div><input id="forms" type="text" name="p1mS" value={this.state.p1mS}
                                    onChange={this.onP1mSChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">אתם:</div><input id="forms" type="text" name="p2mmS" value={this.state.p2mmS}
                                    onChange={this.onP2mmSChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">אתן:</div><input id="forms" type="text" name="p2mwS" value={this.state.p2mwS}
                                    onChange={this.onP2mwSChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">הם\הן:</div><input id="forms" type="text" name="p3mS" value={this.state.p3mS}
                                    onChange={this.onP3mSChange} dir="rtl"/>
                    </div>                                                                                                                                                                                                
                  </div>
                </div>                   
              </div> {/* конец прошедшего времени */}
              <div className="flexItem221"> {/* начало настоящего времени */}
                <div className="flexItem2211">                                            
                  <p>הווה</p>
                </div>
                <div className="flexItem2212">
                  <div className="flexItem22121">
                    <div className="flexItem221211">
                      <p> הצג בכתיב מנוקד: </p>
                    </div>
                    <div className="flexItem221212">
                    <div id="label">ז' יחיד:</div> <input id="forms" type="text" name="nsm" value={this.state.nsm}
                                  onChange={this.onNsmChange} dir="rtl"/>                
                    </div>
                    <div className="flexItem221212">
                    <div id="label">נ' יחיד:</div><input id="forms" type="text" name="nsw" value={this.state.nsw}
                                  onChange={this.onNswChange} dir="rtl"/>                
                    </div>
                    <div className="flexItem221212">
                    <div id="label">זי רבים:</div><input id="forms" type="text" name="nmm" value={this.state.nmm}
                                  onChange={this.onNmmChange} dir="rtl"/>                
                    </div>
                    <div className="flexItem221212">
                    <div id="label">נ' רבים:</div><input id="forms" type="text" name="nmw" value={this.state.nmw}
                                  onChange={this.onNmwChange} dir="rtl"/>                
                    </div>
                  </div>
                  <div className="flexItem22121">
                    <div className="flexItem221211">
                      <p> הצג בכתיב מלא: </p>
                    </div>
                    <div className="flexItem221212">
                    <div id="label">ז' יחיד:</div><input id="forms" type="text" name="nsmS" value={this.state.nsmS}
                                  onChange={this.onNsmSChange} dir="rtl"/>                
                    </div>
                    <div className="flexItem221212">
                    <div id="label">נ' יחיד:</div><input id="forms" type="text" name="nswS" value={this.state.nswS}
                                  onChange={this.onNswSChange} dir="rtl"/>                
                    </div>
                    <div className="flexItem221212">
                    <div id="label">זי רבים:</div><input id="forms" type="text" name="nmmS" value={this.state.nmmS}
                                  onChange={this.onNmmSChange} dir="rtl"/>               
                    </div>
                    <div className="flexItem221212">
                    <div id="label">נ' רבים:</div><input id="forms" type="text" name="nmwS" value={this.state.nmwS}
                                  onChange={this.onNmwSChange} dir="rtl"/>                
                    </div>
                  </div>                  
                </div>
              </div> {/* конец настоящего времени */}
              <div className="flexItem223"> {/* начало будущего времени */}
                <div className="flexItem2211">                                          
                  <p>עתיד</p>
                </div>
                <div className="flexItem2212">
                  <div className="flexItem22121">
                    <div className="flexItem221211">
                      <p> הצג בכתיב מנוקד: </p>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">אני:</div><input id="forms" type="text" name="f1s" value={this.state.f1s}
                                    onChange={this.onF1sChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">אתה:</div><input id="forms" type="text" name="f2sm" value={this.state.f2sm}
                                    onChange={this.onF2smChange} dir="rtl"/>
                    </div>              
                    <div className="flexItem221212">
                      <div id="label">את:</div><input id="forms" type="text" name="f2sw" value={this.state.f2sw}
                                    onChange={this.onF2swChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">הוא:</div><input id="forms" type="text" name="f3sm" value={this.state.f3sm}
                                    onChange={this.onF3smChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">היא:</div><input id="forms" type="text" name="f3sw" value={this.state.f3sw}
                                    onChange={this.onF3swChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">אנחנו:</div><input id="forms" type="text" name="f1m" value={this.state.f1m}
                                    onChange={this.onF1mChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">אתם:</div><input id="forms" type="text" name="f2mm" value={this.state.f2mm}
                                    onChange={this.onF2mmChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">אתן\הן:</div><input id="forms" type="text" name="f2mw" value={this.state.f2mw}
                                    onChange={this.onF2mwChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">הם:</div><input id="forms" type="text" name="f3m" value={this.state.f3m}
                                    onChange={this.onF3mChange} dir="rtl"/>
                    </div>
                  </div>
                  <div className="flexItem22121">
                    <div className="flexItem221211">
                      <p> הצג בכתיב מלא: </p>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">אני:</div><input id="forms" type="text" name="f1sS" value={this.state.f1sS}
                                    onChange={this.onF1sSChange} dir="rtl"/>                
                    </div>              
                    <div className="flexItem221212">
                      <div id="label">אתה:</div><input id="forms" type="text" name="f2smS" value={this.state.f2smS}
                                    onChange={this.onF2smSChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">את:</div><input id="forms" type="text" name="f2swS" value={this.state.f2swS}
                                    onChange={this.onF2swSChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">הוא:</div><input id="forms" type="text" name="f3smS" value={this.state.f3smS}
                                    onChange={this.onF3smSChange} dir="rtl"/>                
                    </div>
                    <div className="flexItem221212">
                      <div id="label">היא:</div><input id="forms" type="text" name="f3swS" value={this.state.f3swS}
                                    onChange={this.onF3swSChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">אנחנו:</div><input id="forms" type="text" name="f1mS" value={this.state.f1mS}
                                    onChange={this.onF1mSChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">אתם:</div><input id="forms" type="text" name="f2mmS" value={this.state.f2mmS}
                                    onChange={this.onF2mmSChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">אתן\הן:</div><input id="forms" type="text" name="f2mwS" value={this.state.f2mwS}
                                    onChange={this.onF2mwSChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">הם:</div><input id="forms" type="text" name="f3mS" value={this.state.f3mS}
                                      onChange={this.onF3mSChange} dir="rtl"/>
                    </div>
                  </div>          
                </div>
              </div> {/*конец будущего времени */} 
            </div> {/* конец строки с временами */}
            <div className="flexItem23"> {/* начало строки с повел накл, сущ и прил*/}
              <div className="flexItem223"> {/* начало повел накл */}
                <div className="flexItem2211">
                  <p>ציווי</p> 
                </div>
                <div className="flexItem2212">
                  <div className="flexItem22121">
                    <div className="flexItem221211">
                      <p> הצג בכתיב מנוקד: </p>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">ז' יחיד:</div><input id="forms" type="text" name="ism" value={this.state.ism}
                                  onChange={this.onIsmChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">נ' יחיד:</div><input id="forms" type="text" name="isw" value={this.state.isw}
                                  onChange={this.onIswChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">            
                      <div id="label">ז' רבים:</div><input id="forms" type="text" name="imm" value={this.state.imm}
                                  onChange={this.onImmChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">נ' רבים:</div><input id="forms" type="text" name="imw" value={this.state.imw}
                                  onChange={this.onImwChange} dir="rtl"/>
                    </div>
                  </div>
                  <div className="flexItem22121">
                    <div className="flexItem221211">
                      <p> הצג בכתיב מלא: </p>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">ז' יחיד:</div><input id="forms" type="text" name="ismS" value={this.state.ismS}
                                  onChange={this.onIsmSChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">נ' יחיד:</div><input id="forms" type="text" name="iswS" value={this.state.iswS}
                                  onChange={this.onIswSChange} dir="rtl"/> 
                    </div>
                    <div className="flexItem221212">
                      <div id="label">ז' רבים:</div><input id="forms" type="text" name="immS" value={this.state.immS}
                                  onChange={this.onImmSChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">נ' רבים:</div> <input id="forms" type="text" name="imwS" value={this.state.imwS}
                                  onChange={this.onImwSChange} dir="rtl"/>
                    </div>
                  </div>
                </div>                 
              </div> {/* конец повел накл */}
              <div className="flexItem223"> {/* начало сущ */}
                <div className="flexItem2211">
                  <p>שם פעולה</p>
                </div>
                <div className="flexItem2212">
                  <div className="flexItem22121">
                    <div className="flexItem221211">
                      <p> הצג בכתיב מנוקד: </p>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">יחיד:</div><input id="forms" type="text" name="ns" value={this.state.ns}
                                  onChange={this.onNsChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">רבים:</div><input id="forms" type="text" name="nm" value={this.state.nm}
                                  onChange={this.onNmChange} dir="rtl"/>
                    </div>
                  </div>
                  <div className="flexItem22121">
                    <div className="flexItem221211">
                      <p> הצג בכתיב מלא: </p>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">יחיד:</div><input id="forms" type="text" name="nsS" value={this.state.nsS}
                                  onChange={this.onNsSChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">רבים:</div><input id="forms" type="text" name="nmS" value={this.state.nmS}
                                  onChange={this.onNmSChange} dir="rtl"/>
                    </div>
                  </div>
                </div>
              </div> {/* конец сущ */}
              <div className="flexItem223"> {/* начало прил */}
                <div className="flexItem2211">
                  <p>פעול</p>
                </div>
                <div className="flexItem2212">
                  <div className="flexItem22121">
                    <div className="flexItem221211">
                      <p> הצג בכתיב מנוקד: </p>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">ז' יחיד:</div><input id="forms" type="text" name="asm" value={this.state.asm}
                                  onChange={this.onAsmChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">נ' יחיד:</div><input id="forms" type="text" name="asw" value={this.state.asw}
                                  onChange={this.onAswChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">ז' רבים:</div> <input id="forms" type="text" name="amm" value={this.state.amm}
                                  onChange={this.onAmmChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">נ' רבים:</div><input id="forms" type="text" name="amw" value={this.state.amw}
                                  onChange={this.onAmwChange} dir="rtl"/>
                    </div>
                  </div>
                  <div className="flexItem22121">
                    <div className="flexItem221211">
                      <p> הצג בכתיב מלא: </p>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">ז' יחיד:</div><input id="forms" type="text" name="asmS" value={this.state.asmS}
                                  onChange={this.onAsmSChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">נ' יחיד:</div><input id="forms" type="text" name="aswS" value={this.state.aswS}
                                  onChange={this.onAswSChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">ז' רבים:</div><input id="forms" type="text" name="ammS" value={this.state.ammS}
                                  onChange={this.onAmmSChange} dir="rtl"/>
                    </div>
                    <div className="flexItem221212">
                      <div id="label">נ' רבים:</div><input id="forms" type="text" name="amwS" value={this.state.amwS}
                                  onChange={this.onAmwSChange} dir="rtl"/>
                    </div>
                  </div>
                </div>  
              </div> {/* конец прил */}
            </div> {/* конец строки с повел накл, сущ и прил */}
      {this.renderSwitch(this.state.thisIsNewVerb)}
      <br/>
      <br/>
      {this.renderSwitch1(this.state.readyToAdditionals)}      
      </div> {/* конец левой части страницы */}
      </div> {/* конец большого флекс контейнера */} 
      </form>

          
      )
    }

}

export default App;
