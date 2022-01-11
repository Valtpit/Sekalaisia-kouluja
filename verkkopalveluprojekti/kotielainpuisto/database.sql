drop database if exists kotielainpuisto;

CREATE DATABASE kotielainpuisto;

use kotielainpuisto;

CREATE TABLE tuoteryhma (
trnro INTEGER AUTO_INCREMENT,
trnimi CHAR(21),
teksti TEXT,
CONSTRAINT tuoteryhma_pk PRIMARY KEY (trnro)
) ;


-- tuote 
CREATE TABLE tuote (
tuotenro INTEGER AUTO_INCREMENT PRIMARY KEY,
tuotenimi CHAR(35) UNIQUE NOT NULL,
hinta DECIMAL(5,2),
kustannus DECIMAL(5,2), 
trnro SMALLINT  NOT NULL,
vari CHAR(40),
maara CHAR(4), -- grammoista kiloiksi esim. 1000g -> 1kg
koko CHAR (3), -- esim xs, m, xxl
lankaTyyppiElain CHAR(12), -- L,A,S
pituus CHAR(4), 
teksti TEXT
) ;

-- asiakas
CREATE TABLE asiakas (
asID INTEGER AUTO_INCREMENT,
asETUnimi CHAR(20) NOT NULL,
asSUKUnimi CHAR(20) NOT NULL,
postinro CHAR(5), 
postitmp varchar(20),
puh varchar(20), 
sposti CHAR(64),
CONSTRAINT asiakas_pk PRIMARY KEY (asID)
) ;

-- tilaus
CREATE TABLE tilaus (
tilausID INTEGER AUTO_INCREMENT NOT NULL,
asID INTEGER, 
tilauspvm timestamp default current_timestamp,
CONSTRAINT tilaus_pk PRIMARY KEY (tilausID),
CONSTRAINT tilaus_asiakas_fk FOREIGN KEY (asID) 
           REFERENCES asiakas (asID)
) ;

-- Tilausrivi-taulu
CREATE TABLE tilausrivi (
tilausID INTEGER NOT NULL,
tuotenro INTEGER, 
kpl INTEGER,
CONSTRAINT tilausID_tuote_fk FOREIGN KEY (tuotenro) 
           REFERENCES tuote (tuotenro)
);

-- values tuoteryhmä
INSERT INTO tuoteryhma VALUES (1,'Eläinherkut', 'Täältä löytyy tilalla tuotettuja syötäviä tuotteita');
INSERT INTO tuoteryhma VALUES (2,'Eläintenhoitotuotteet', 'Täältä löydät eläinystävällisiä hoitotuotteita.');
INSERT INTO tuoteryhma VALUES (3,'Askartelutarvikkeet', 'Täältä löytyy askartelutarvikkeita puuhasteluun.');
INSERT INTO tuoteryhma VALUES (4,'Asusteet', 'Täältä löydät tilamme villasta tehtyjä vaatteita ja asusteita itselle sekä nelijalkaiselle ystävällesi.');
INSERT INTO tuoteryhma VALUES (5,'Palvelut', 'Tästä pääset katselemaan, mitä eri palveluita tarjoamme.');
INSERT INTO tuoteryhma VALUES (6,'Liput', 'Täältä voit ostaa ennakkoon päivälipun tai kausikortin.');

-- values tuote

INSERT INTO tuote VALUES (1,'lihapullia', 2.50, 1.50, 1, NULL, '250g', NULL, NULL, NULL, "Lihapullat sisältävät kanaa (100g), riisiä, kananmunia ja porkkanaa. Liha ja kananmunat ovat tilaltamme. Pullat sopivat jälkiruoaksi niin pennuille kuin aikuisille koirille sekä kissoille kohtuudella eivätkä korvaa eläimen normaalia ruokatarvetta.");
INSERT INTO tuote VALUES (2,'maapähkinäkeksit S', 4.90, 2.50, 1, NULL, '100g', 'S', NULL, NULL, "Keksit sisältävät määpähkinää, kurpitsaa, kananmunia ja vehnäjauhoa. Kurpitsa ja kananmunat tilaltamme. Vehnäjauho on suomalaista luomuvehnäjauhoa. Keksit sopivat jälkiruoaksi pennuille ja aikuisille koirille ja kissoille kohtuudella eivätkä korvaa eläimen normaalia ruokatarvetta."); -- small-pussi (koirille)
INSERT INTO tuote VALUES (3,'maapähkinäkeksit M', 7.90, 2.90, 1, NULL, '175g', 'M', NULL, NULL, "Keksit sisältävät määpähkinää, kurpitsaa, kananmunia ja vehnäjauhoa. Kurpitsa ja kananmunat tilaltamme. Vehnäjauho on suomalaista luomuvehnäjauhoa. Keksit sopivat jälkiruoaksi pennuille ja aikuisille koirille ja kissoille kohtuudella eivätkä korvaa eläimen normaalia ruokatarvetta."); -- medium-pussi
INSERT INTO tuote VALUES (4,'maapähkinäkeksit L', 8.90, 3.10, 1, NULL, '200g', 'L', NULL, NULL, "Keksit sisältävät määpähkinää, kurpitsaa, kananmunia ja vehnäjauhoa. Kurpitsa ja kananmunat tilaltamme. Vehnäjauho on suomalaista luomuvehnäjauhoa. Keksit sopivat jälkiruoaksi pennuille ja aikuisille koirille ja kissoille kohtuudella eivätkä korvaa eläimen normaalia ruokatarvetta."); -- large-pussi
INSERT INTO tuote VALUES (5, 'aaveluut S', 5.90, 3.00, 1, NULL, '150g', 'S', NULL, NULL, "Luut sisältävät täysjyvävehnäjauhoa, kananmunia ja naudan lihaa. Kananmunat ovat tilaltamme. Vehnäjauho on suomalaista luomuvehnäjauhoa. Keksit sopivat jälkiruoaksi pennuille ja aikuisille koirille sekä kissoille kohtuudella eivätkä korvaa eläimen normaalia ruokatarvetta. Sopivat diabeetikoille."); -- samanlainen pussijärjestelmä kuin edellisissä (koirille), teen erikseen ne lisätietotekstit näille myöhemmin (ei oikeita luita :'D)
INSERT INTO tuote VALUES (6, 'aaveluut M', 6.90, 3.30, 1, NULL, '200g', 'M', NULL, NULL, "Luut sisältävät täysjyvävehnäjauhoa, kananmunia ja naudan lihaa. Kananmunat ovat tilaltamme. Vehnäjauho on suomalaista luomuvehnäjauhoa. Keksit sopivat jälkiruoaksi pennuille ja aikuisille koirille sekä kissoille kohtuudella eivätkä korvaa eläimen normaalia ruokatarvetta. Sopivat diabeetikoille.");
INSERT INTO tuote VALUES (7, 'aaveluut L', 8.90, 5.00, 1, NULL, '300g', 'L', NULL, NULL, "Luut sisältävät täysjyvävehnäjauhoa, kananmunia ja naudan lihaa. Kananmunat ovat tilaltamme. Vehnäjauho on suomalaista luomuvehnäjauhoa. Keksit sopivat jälkiruoaksi pennuille ja aikuisille koirille sekä kissoille kohtuudella eivätkä korvaa eläimen normaalia ruokatarvetta. Sopivat diabeetikoille.");
INSERT INTO tuote VALUES (8, 'fisut S', 3.90, 2.00, 1, NULL, '75g', 'S', NULL, NULL, "Fisuissa on lohta, kananmunia ja täysjyvävehnäjauhoa. Kananmunat ovat tilaltamme ja lohi on Suomesta. Vehnäjauho on suomalaista luomuvehnäjauhoa. Keksit sopivat jälkiruoaksi pennuille ja aikuisille koirille sekä kissoille kohtuudella eivätkä korvaa eläimen normaalia ruokatarvetta."); -- samanlainen pussijärjestelmä kuin edellisissä (kissoille)
INSERT INTO tuote VALUES (9, 'fisut M', 4.10, 2.50, 1, NULL, '100g', 'M', NULL, NULL, "Fisuissa on lohta, kananmunia ja täysjyvävehnäjauhoa. Kananmunat ovat tilaltamme ja lohi on Suomesta. Vehnäjauho on suomalaista luomuvehnäjauhoa. Keksit sopivat jälkiruoaksi pennuille ja aikuisille koirille sekä kissoille kohtuudella eivätkä korvaa eläimen normaalia ruokatarvetta.");
INSERT INTO tuote VALUES (10, 'fisut L', 4.90, 4.00, 1, NULL, '150g', 'L', NULL, NULL, "Fisuissa on lohta, kananmunia ja täysjyvävehnäjauhoa. Kananmunat ovat tilaltamme ja lohi on Suomesta. Vehnäjauho on suomalaista luomuvehnäjauhoa. Keksit sopivat jälkiruoaksi pennuille ja aikuisille koirille sekä kissoille kohtuudella eivätkä korvaa eläimen normaalia ruokatarvetta.");
INSERT INTO tuote VALUES (11, 'mix', 7.90, 6.00, 1, NULL, '300g', 'L', NULL, NULL, "Mix sisältää kauraisia hunajapalloja sekä pieniä määriä vehnäjauhoa, joita voit syödä sinä ja karvainen ystäväsi yhdessä. Hunaja on tilaltamme. Vehnäjauho ja kaura ovat Suomesta. "); -- pelkkä large tällä (koirille ja kissoille)
INSERT INTO tuote VALUES (12, 'hunajavoide S', 20.00, 12.50, 2, NULL, '150g', 'S', NULL, NULL, "Hunajavoide soveltuu haavojen suojaksi. Voide sisältää luonnollisesti hyytyvää ainetta, lääketieteen tasoista manuka-hunajaa, vettä ja rypsiöljyä. Hunaja on tilaltamme. Jos haava ärtyy tai tulee araksi tai pahenee yli 72 tunniksi, ota yhteyttä eläinlääkäriin."); -- kissoile, koirille, hevosille jne. (._. ihan oikea tuote)
INSERT INTO tuote VALUES (13, 'hunajavoide M', 30.00, 25.00, 2, NULL, '250g', 'M', NULL, NULL, "Hunajavoide soveltuu haavojen suojaksi. Voide sisältää luonnollisesti hyytyvää ainetta, lääketieteen tasoista manuka-hunajaa, vettä ja rypsiöljyä. Hunaja on tilaltamme. Jos haava ärtyy tai tulee araksi tai pahenee yli 72 tunniksi, ota yhteyttä eläinlääkäriin.");
INSERT INTO tuote VALUES (14, 'hunajavoide L', 40.00, 37.50, 2, NULL, '350g', 'L', NULL, NULL, "Hunajavoide soveltuu haavojen suojaksi. Voide sisältää luonnollisesti hyytyvää ainetta, lääketieteen tasoista manuka-hunajaa, vettä ja rypsiöljyä. Hunaja on tilaltamme. Jos haava ärtyy tai tulee araksi tai pahenee yli 72 tunniksi, ota yhteyttä eläinlääkäriin.");
INSERT INTO tuote VALUES (15, 'punottu pulmapallo', 25.00, 15.00, 2, 'punainen', '100g', NULL, NULL, NULL, "Pajupajassamme valmistunut pulmapallo sopii virikkeeksi koirille ja kissoille. Sisään saa mahdutettua monenmuotoisia ja -kokoisia herkkuja."); -- herkuille (kissoille ja koirille), '12cm (halkaisija)'
INSERT INTO tuote VALUES (16, 'höyhenkeppilelu', 3.90, 2.00, 2, 'valkoharmaa', '200g', NULL, NULL, NULL, "Kepin pituus 60cm ja höyhensulka 13cm."); -- '60cm', 
INSERT INTO tuote VALUES (17, 'villapeitto', 40.00, 30.00, 2, 'harmaa', '600g', NULL, NULL, NULL, "Villapeitto pitää lämpimänä ja hengittää luonnostaan. Mitat: 0.4x70x90cm."); -- '70x90cm'
INSERT INTO tuote VALUES (18, 'puhdasta huovutusvillaa valo', 6.90, 5.00, 3, 'luonnonvalkoinen', '100g', NULL, NULL, NULL, "Huovutusvilla on tilamme lampaista ja kasvivärjätty ammattilaisemme johdolla. Osa tuotoksista ovat kursseillamme tehtyjä ja myydään vain suoraan paikan päällä."); -- korkeus x leveys x syvyys
INSERT INTO tuote VALUES (19, 'puhdasta huovutusvillaa pilvi', 6.90, 5.00, 3, 'luonnonharmaa', '100g', NULL, NULL, NULL, "Huovutusvilla on tilamme lampaista ja kasvivärjätty ammattilaisemme johdolla. Osa tuotoksista ovat kursseillamme tehtyjä ja myydään vain suoraan paikan päällä.");
INSERT INTO tuote VALUES (20, 'puhdasta huovutusvillaa varjo', 6.90, 5.00, 3, 'luonnonmusta', '100g', NULL, NULL, NULL, "Huovutusvilla on tilamme lampaista ja kasvivärjätty ammattilaisemme johdolla. Osa tuotoksista ovat kursseillamme tehtyjä ja myydään vain suoraan paikan päällä.");
INSERT INTO tuote VALUES (21, 'puhdasta huovutusvillaa ruska', 6.90, 5.00, 3, 'luonnonruskea', '100g', NULL, NULL, NULL, "Huovutusvilla on tilamme lampaista ja kasvivärjätty ammattilaisemme johdolla. Osa tuotoksista ovat kursseillamme tehtyjä ja myydään vain suoraan paikan päällä.");
INSERT INTO tuote VALUES (22, 'villalankakerä Unto valo', 7.80, 6.90, 3, 'luonnonvalkoinen', '100g', NULL, 'lampaanvilla', '200m', "Unto-villalangat ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. "); -- täytyy laittaa että hinnat on samat kaikilla eettisistä syistä (oon laiska)
INSERT INTO tuote VALUES (23, 'villalankakerä Unto pilvi', 7.80, 6.90, 3, 'luonnonharmaa', '100g', NULL, 'lampaanvilla', '200m', "Unto-villalangat ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. "); -- 'tex 140x2'
INSERT INTO tuote VALUES (24, 'villalankakerä Unto varjo', 7.80, 6.90, 3, 'luonnonmusta', '100g', NULL, 'lampaanvilla', '200m', "Unto-villalangat ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. ");
INSERT INTO tuote VALUES (25, 'villalankakerä Unto ruska', 7.80, 6.90, 3, 'luonnonruskea', '100g', NULL, 'lampaanvilla', '200m', "Unto-villalangat ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. ");
INSERT INTO tuote VALUES (26, 'villalankakerä Alca valo', 7.80, 6.90, 3, 'luonnonvalkoinen', '100g', NULL, 'alpakanvilla', '200m', "Alca-villalangat ovat 100% tilamme alpakanvillaa ja kasvivärjätty ammattilaisemme johdolla. ");
INSERT INTO tuote VALUES (27, 'villalankakerä Alca pilvi', 7.80, 6.90, 3, 'luonnonharmaa', '100g', NULL, 'alpakanvilla', '200m', "Alca-villalangat ovat 100% tilamme alpakanvillaa ja kasvivärjätty ammattilaisemme johdolla. ");
INSERT INTO tuote VALUES (28, 'villalankakerä Alca varjo', 7.80, 6.90, 3, 'luonnonmusta', '100g', NULL, 'alpakanvilla', '200m', "Alca-villalangat ovat 100% tilamme alpakanvillaa ja kasvivärjätty ammattilaisemme johdolla. ");
INSERT INTO tuote VALUES (29, 'villalankakerä Alca kajastus', 7.80, 6.90, 3, 'luonnonruskea', '100g', NULL, 'alpakanvilla', '200m', "Alca-villalangat ovat 100% tilamme alpakanvillaa ja kasvivärjätty ammattilaisemme johdolla. ");
INSERT INTO tuote VALUES (30, 'villalankakerä Una valo', 7.80, 6.90, 3, 'luonnonvalkoinen', '100g', NULL, 'sekoitus', '200m', "Una-villalangat ovat 100% tilamme lampaan- ja alpakanvillaa, joka on kasvivärjätty ammattilaisemme johdolla.");
INSERT INTO tuote VALUES (31, 'villalankakerä Una pilvi', 7.80, 6.90, 3, 'luonnonharmaa', '100g', NULL, 'sekoitus', '200m', "Una-villalangat ovat 100% tilamme lampaan- ja alpakanvillaa, joka on kasvivärjätty ammattilaisemme johdolla.");
INSERT INTO tuote VALUES (32, 'villalankakerä Una varjo', 7.80, 6.90, 3, 'luonnonmusta', '100g', NULL, 'sekoitus', '200m', "Una-villalangat ovat 100% tilamme lampaan- ja alpakanvillaa, joka on kasvivärjätty ammattilaisemme johdolla.");
INSERT INTO tuote VALUES (33, 'villalankakerä Una kajastus', 7.80, 6.90, 3, 'luonnonruskea', '100g', NULL, 'sekoitus', '200m', "Una-villalangat ovat 100% tilamme lampaan- ja alpakanvillaa, joka on kasvivärjätty ammattilaisemme johdolla.");
INSERT INTO tuote VALUES (34, 'villahuivi Kuje valo', 139.00, 114.90, 4, 'luonnonvalkoinen', 'M', NULL, 'lampaanvilla', NULL, "Kuje-huivit ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. Mitat: 80x200cm"); -- '80x200cm'
INSERT INTO tuote VALUES (35, 'villahuivi Kuje pilvi', 139.00, 114.90, 4, 'luonnonharmaa',NULL, 'M', 'lampaanvilla', NULL, "Kuje-huivit ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. Mitat: 80x200cm");
INSERT INTO tuote VALUES (36, 'villahuivi Kuje kajo', 139.00, 114.90, 4, 'valkoinen', NULL, 'M', 'lampaanvilla', NULL, "Kuje-huivit ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. Mitat: 80x200cm");
INSERT INTO tuote VALUES (37, 'villahuivi Kuje varjo', 139.00, 114.90, 4, 'luonnonmusta', NULL, 'M', 'lampaanvilla', NULL, "Kuje-huivit ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. Mitat: 80x200cm");
INSERT INTO tuote VALUES (38, 'villahuivi Volt ahti', 146.00, 120.90, 4, 'sininen', NULL, 'M', 'sekoitus', NULL, "Volt-huivit ovat 100% tilamme villaa (70% lampaanvillaa ja 30% alpakanvillaa) ja kasvivärjätty ammattilaisemme johdolla. Mitat: 80x200cm");
INSERT INTO tuote VALUES (39, 'villahuivi Volt tonttu', 146.00, 120.90, 4, 'punainen', NULL, 'M', 'sekoitus', NULL, "Volt-huivit ovat 100% tilamme villaa (70% lampaanvillaa ja 30% alpakanvillaa) ja kasvivärjätty ammattilaisemme johdolla. Mitat: 80x200cm");
INSERT INTO tuote VALUES (40, 'villahuivi Volt hippa', 146.00, 120.90, 4, 'vihreä', NULL, 'M', 'sekoitus', NULL, "Volt-huivit ovat 100% tilamme villaa (70% lampaanvillaa ja 30% alpakanvillaa) ja kasvivärjätty ammattilaisemme johdolla. Mitat: 80x200cm");
INSERT INTO tuote VALUES (41, 'villapontso Maahinen valkea', 176.00, 150.00, 4, 'valkoinen, keltainen ja vaaleanvihreä', NULL, 'S', 'alpakanvilla', NULL, ""); -- '120-140cm'
INSERT INTO tuote VALUES (42, 'villapontso Maahinen ruska', 176.00, 150.00, 4, 'oranssi, punaruskea ja musta', NULL, 'S', 'alpakanvilla', NULL, "Villapontsot ovat 100% tilamme alpakanvillaa ja kasvivärjätty ammattilaisemme johdolla. Maahinen on 120-140 cm:lle.");
INSERT INTO tuote VALUES (43, 'villapontso Maahinen boreal', 176.00, 150.00, 4, 'neonväri ja tummansininen', NULL, 'S', 'alpakanvilla', NULL, "Villapontsot ovat 100% tilamme alpakanvillaa ja kasvivärjätty ammattilaisemme johdolla. Maahinen on 120-140 cm:lle.");
INSERT INTO tuote VALUES (44, 'villapontso Maahinen koti', 176.00, 150.00, 4, 'sininen, vihreä ja valkoinen', NULL, 'S', 'alpakanvilla', NULL, "Villapontsot ovat 100% tilamme alpakanvillaa ja kasvivärjätty ammattilaisemme johdolla. Maahinen on 120-140 cm:lle.");
INSERT INTO tuote VALUES (45, 'villapontso Haltija valkea', 180.00, 160.00, 4, 'valkoinen, keltainen ja vaaleanvihreä', NULL, 'M', 'alpakanvilla', NULL, "Villapontsot ovat 100% tilamme alpakanvillaa ja kasvivärjätty ammattilaisemme johdolla. Haltija on 150-170 cm:lle."); -- '150-170cm'
INSERT INTO tuote VALUES (46, 'villapontso Haltija ruska', 180.00, 160.00, 4, 'oranssi, punaruskea ja musta',  NULL, 'M', 'alpakanvilla', NULL, "Villapontsot ovat 100% tilamme alpakanvillaa ja kasvivärjätty ammattilaisemme johdolla. Haltija on 150-170 cm:lle.");
INSERT INTO tuote VALUES (47, 'villapontso Haltija boreal', 180.00, 160.00, 4, 'neonväri ja tummansininen',  NULL, 'M', 'alpakanvilla', NULL, "Villapontsot ovat 100% tilamme alpakanvillaa ja kasvivärjätty ammattilaisemme johdolla. Haltija on 150-170 cm:lle.");
INSERT INTO tuote VALUES (48, 'villapontso Haltija koti', 180.00, 160.00, 4, 'sininen, vihreä ja valkoinen',  NULL, 'M', 'alpakanvilla', NULL, "Villapontsot ovat 100% tilamme alpakanvillaa ja kasvivärjätty ammattilaisemme johdolla. Haltija on 150-170 cm:lle.");
INSERT INTO tuote VALUES (49, 'villapontso Jättiläinen valkea', 200.00, 170.00, 4, 'valkoinen, keltainen ja vaaleanvihreä', NULL, 'L', 'alpakanvilla', NULL, "Villapontsot ovat 100% tilamme alpakanvillaa ja kasvivärjätty ammattilaisemme johdolla. Jättiläinen on 180-200 cm:lle."); -- '180-200cm'
INSERT INTO tuote VALUES (50, 'villapontso Jättiläinen ruska', 200.00, 170.00, 4, 'oranssi, punaruskea ja musta', NULL, 'L', 'alpakanvilla', NULL, "Villapontsot ovat 100% tilamme alpakanvillaa ja kasvivärjätty ammattilaisemme johdolla. Jättiläinen on 180-200 cm:lle.");
INSERT INTO tuote VALUES (51, 'villapontso Jättiläinen boreal', 200.00, 170.00, 4, 'neonväri ja tummansininen', NULL, 'L', 'alpakanvilla', NULL, "Villapontsot ovat 100% tilamme alpakanvillaa ja kasvivärjätty ammattilaisemme johdolla. Jättiläinen on 180-200 cm:lle.");
INSERT INTO tuote VALUES (52, 'villapontso Jättiläinen koti', 200.00, 170.00, 4, 'valkoinen, keltainen ja vaaleanvihreä', NULL, 'L', 'alpakanvilla', NULL, "Villapontsot ovat 100% tilamme alpakanvillaa ja kasvivärjätty ammattilaisemme johdolla. Jättiläinen on 180-200 cm:lle.");
INSERT INTO tuote VALUES (53, 'villapaita Maahinen mesi', 220.00, 200.00, 4, 'valkoinen, vaaleanvihreä ja vaaleansininen', NULL, 'S', 'lampaanvilla', NULL, "Villapaitamme ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. Maahinen on 120-140 cm:lle.");
INSERT INTO tuote VALUES (54, 'villapaita Maahinen hiutale', 220.00, 200.00, 4, 'valkoinen, harmaa ja vaaleansininen', NULL, 'S', 'lampaanvilla', NULL, "Villapaitamme ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. Maahinen on 120-140 cm:lle.");
INSERT INTO tuote VALUES (55, 'villapaita Maahinen pihka', 220.00, 200.00, 4, 'keltainen, oranssi ja punainen', NULL, 'S', 'lampaanvilla', NULL, "Villapaitamme ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. Maahinen on 120-140 cm:lle.");
INSERT INTO tuote VALUES (56, 'villapaita Maahinen terva', 220.00, 200.00, 4, 'ruskea ja musta', NULL, 'S', 'lampaanvilla', NULL, "Villapaitamme ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. Maahinen on 120-140 cm:lle.");
INSERT INTO tuote VALUES (57, 'villapaita Haltija mesi', 240.00, 220.00, 4, 'valkoinen, vaaleanvihreä ja vaaleanvihreä', NULL, 'M', 'lampaanvilla', NULL, "Villapaitamme ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. Haltija on 150-170 cm:lle.");
INSERT INTO tuote VALUES (58, 'villapaita Haltija hiutale', 240.00, 220.00, 4, 'valkoinen, harmaa ja vaaleansininen', NULL, 'M', 'lampaanvilla', NULL, "Villapaitamme ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. Haltija on 150-170 cm:lle.");
INSERT INTO tuote VALUES (59, 'villapaita Haltija pihka', 240.00, 220.00, 4, 'keltainen, oranssi ja punainen', NULL, 'M', 'lampaanvilla', NULL, "Villapaitamme ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. Haltija on 150-170 cm:lle.");
INSERT INTO tuote VALUES (60, 'villapaita Haltija terva', 240.00, 220.00, 4, 'ruskea ja musta', NULL, 'M', 'lampaanvilla', NULL, "Villapaitamme ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. Haltija on 150-170 cm:lle.");
INSERT INTO tuote VALUES (61, 'villapaita Jättiläinen mesi', 260.00, 240.00, 4, 'valkoinen, vaaleanvihreä ja vaaleanvihreä', NULL, 'L', 'lampaanvilla', NULL, "Villapaitamme ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. Jättiläinen on 180-200 cm:lle.");
INSERT INTO tuote VALUES (62, 'villapaita Jättiläinen hiutale', 260.00, 240.00, 4, 'valkoinen, harmaa ja vaaleansininen', NULL, 'L', 'lampaanvilla', NULL, "Villapaitamme ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. Jättiläinen on 180-200 cm:lle.");
INSERT INTO tuote VALUES (63, 'villapaita Jättiläinen pihka', 260.00, 240.00, 4, 'keltainen, oranssi ja punainen', NULL, 'L', 'lampaanvilla', NULL, "Villapaitamme ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. Jättiläinen on 180-200 cm:lle.");
INSERT INTO tuote VALUES (64, 'villapaita Jättiläinen terva', 260.00, 240.00, 4, 'ruskea ja musta', NULL, 'L', 'lampaanvilla', NULL, "Villapaitamme ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. Jättiläinen on 180-200 cm:lle.");
INSERT INTO tuote VALUES (65, 'lapaset Käpälä vaaka', 60.00, 40.00, 4, 'valkoinen ja musta', NULL, 'S', 'lampaanvilla', NULL, "Lapaset ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. Käpälän koko on 5-6 (S).");
INSERT INTO tuote VALUES (66, 'lapaset Käpälä räiske', 60.00, 40.00, 4, 'monivärinen', NULL, 'S', 'lampaanvilla', NULL, "Lapaset ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. Käpälän koko on 5-6 (S).");
INSERT INTO tuote VALUES (67, 'lapaset Käpälä tuli', 60.00, 40.00, 4, 'keltainen, punainen ja musta', NULL, 'S', 'lampaanvilla', NULL, "Lapaset ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. Käpälän koko on 5-6 (S).");
INSERT INTO tuote VALUES (68, 'lapaset Tassu vaaka', 60.00, 40.00, 4, 'valkoinen ja musta', NULL, 'M', 'lampaanvilla', NULL, "Lapaset ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. Tassun koko on 7-8 (M).");
INSERT INTO tuote VALUES (69, 'lapaset Tassu räiske', 60.00, 40.00, 4, 'monivärinen', NULL, 'M', 'lampaanvilla', NULL, "Lapaset ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. Tassun koko on 7-8 (M).");
INSERT INTO tuote VALUES (70, 'lapaset Tassu tuli', 60.00, 40.00, 4, 'keltainen, punainen ja musta', NULL, 'M', 'lampaanvilla', NULL, "Lapaset ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. Tassun koko on 7-8 (M).");
INSERT INTO tuote VALUES (71, 'lapaset Räpylä vaaka', 60.00, 40.00, 4, 'valkoinen ja musta', NULL, 'L', 'lampaanvilla', NULL, "Lapaset ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. Räpylän koko on 9-11 (L).");
INSERT INTO tuote VALUES (72, 'lapaset Räpylä räiske', 60.00, 40.00, 4, 'monivärinen', NULL, 'L', 'lampaanvilla', NULL, "Lapaset ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. Räpylän koko on 9-11 (L).");
INSERT INTO tuote VALUES (73, 'lapaset Räpylä tuli', 60.00, 40.00, 4, 'keltainen, punainen ja musta', NULL, 'L', 'lampaanvilla', NULL, "Lapaset ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. Räpylän koko on 9-11 (L).");
INSERT INTO tuote VALUES (74, 'eläinpontso S', 150.00, 120.00, 4, 'musta ja valkoinen', NULL, 'S', 'lampaanvilla', NULL, "Eläinpontsot ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. S sopii kissoille ja pienille koirille."); -- pienin koko myös kissoille muuten vain koirille
INSERT INTO tuote VALUES (75, 'eläinpontso M', 160.00, 125.00, 4, 'musta ja valkoinen', NULL, 'M', 'lampaanvilla', NULL, "Eläinpontsot ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. M sopii keskikokoisille koirille.");
INSERT INTO tuote VALUES (76, 'eläinpontso L', 170.00, 130.00, 4, 'musta ja valkoinen', NULL, 'L', 'lampaanvilla', NULL, "Eläinpontsot ovat 100% tilamme lampaanvillaa ja kasvivärjätty ammattilaisemme johdolla. L sopii isoimmille koirille.");
INSERT INTO tuote VALUES (77, 'huovutuskurssi', 150.00, 700.00, 5, NULL, '5x', NULL, NULL, '1kk', "Huovutuskurssilla pääset värjäämään ja huovuttamaan valitsemallasi tekniikalla. Ohjaajamme pitävät jokaisella kerralla osiota, jossa näytetään, miten huovutusvillaa voi hyödyntää muuallakin kuin vaikka sisustuksessa. Max. määrä osallistujia yhdelle kurssille on 15 henkilöä. Kertoja on viisi kuukauden aikana eli yksi jokaiselle viikolle. Pajassa saa olla kauemmin kuin kaksi tuntia, jos mieli tekee."); -- max. määrä osallistujia kerralle on 15 henk.
INSERT INTO tuote VALUES (78, 'keritsemiskurssi', 150.00, 700.00, 5, NULL, '5x', NULL, NULL, '1kk', "Keritsemiskurssilla syvennymme villan jalostuksen vaiheisiin. Lampaan ammattimaisen keritsemisen hoidosta kotivälineillä villan värjäykseen. Valmiit tuotokset voi viedä kotiin tai myydä pois puiston kaupassa. Max. määrä osallistujia yhdelle kurssille on 15 henkilöä. Kertoja on viisi kuukauden aikana eli yksi jokaiselle viikolle. Pajassa saa olla kauemmin kuin kaksi tuntia, jos mieli tekee."); 
INSERT INTO tuote VALUES (79, 'eläimen käsittely ja hoito -kurssi', 150.00, 700.00, 5, NULL, '5x', NULL, NULL, '1kk', "Eläimen käsittely ja hoito -kurssilla käydään läpi perussääntöjä ja toimintatapoja jotta ymmärtäisit paremmin nähdä maailman toisen eläimen silmin. Eläimen lukeminen ja tilanteisiin reagoiminen ei mene aina niin kuin ajattelemme, mutta voimme vähentää oikeilla merkeille väärinymmärryksiä. Kurssilla on vierailevia eläinlääkäreitä ja asiantuntijoita, jotka luennoivat omasta kokemuksestaan. Max. määrä osallistujia yhdelle kurssille on 25 henkilöä. Kertoja on viisi kuukauden aikana eli yksi jokaiselle viikolle (1x kestää noin 2h ilman taukoja)."); 
INSERT INTO tuote VALUES (80, 'ratsastusterapia', 70.00, 100.00, 5, NULL, '1x', NULL, NULL, '4h', "Ratsastusterapiassa käydään lyhyesti hevosen harjauksesta maasta käsittelyyn ja lopulta tunnin ratsastukseen (koko aika noin 4h). Sopii kaiken tasoisille ratsastajille, sillä käytännöt voivat erillaiset kuin muilla talleilla ja vaadimme, että jos aiot ratsastaa kummihevosellasi, käyt myös tämän."); -- harjaus, maassa käsittely, lyhyt ratsastunti  
INSERT INTO tuote VALUES (81, 'kummitoimintaterapia', 30.00, 700.00, 5, NULL, '1x', NULL, NULL, '4h', "Kummitoimintaterapiassa voit valitsemasi kummieläimesi kanssa viettää aikaa eri aktiviteettiallueillamme (4h). Agilityrata ei ole varattu vain koirille, mutta varaathan ajan, sillä rata voi olla toisen käytössä. Voit myös valita radan toisen kummin kanssa tietyin ehdoin (ohjaajat informoimat niistä yksitellen)."); 
INSERT INTO tuote VALUES (82, 'mixed bag', 60.00, 20.00, 5, NULL, '1x', NULL, NULL, '6h', "Mixed bag -toiminta yhdistää eri eläimet ja on kummiterapiasta sivuava ryhmäaktiviteetti. Jokainen ryhmä on erilainen ja suunnitellaan tilojen ja eläinten yhteenkuuluvuuden kannalta (6h). Osallistujat päättävät äänestyksellä, mitä sessio sisältää (esim. agilitykisailua, maastakäsittelyharjoittelua hevosten kanssa...)."); -- erilaisten eläinten kanssa toimintaa (agility jne.), eli voi vaihdella muiden osallistujien kanssa eläinparia
INSERT INTO tuote VALUES (83, 'ponin talutus', 30.00, 5.00, 5, NULL, '1x', NULL, NULL, '4h', "Ponin tai hevosen talutukseen voi osallistua minkä ikäinen tahansa. Puiston ympärillä on polkuja ja ranta, jonne voi kulkea ohjaajan ja karvakaverin kanssa tai ilman ohjaajaa, jos voit vakuuttaa pystyväsi siihen (4h)."); 
INSERT INTO tuote VALUES (84, 'lukemista eläimen kanssa', 20.00, 5.00, 5, NULL, '1x', NULL, NULL, '4h', "Lukemista eläimen kanssa on valitsemasi hoidokin kanssa oleilua. Kirjaa ei ole pakko lukea, mutta rento fiilis on tärkeä. (4h)"); 
INSERT INTO tuote VALUES (85, 'kesäleiri lapselle', 120.00, 700.00, 5, NULL, '1x', NULL, NULL, '2vk', "Informoimme enemmän jokaisesta tulevasta leiristä somen puolella."); 
INSERT INTO tuote VALUES (86, 'päivälippu', 10.00, 5.00, 6, NULL, '1x', NULL, NULL, '12h', "Päivälipulla voit viettää aikaa puistossa max. 12h eli jopa yli aukioloajan.");
INSERT INTO tuote VALUES (87, '2vk lippu', 20.00, 10.00, 6, NULL, '14x', NULL, NULL, '2vk', "Kahden viikon kausilipulla voit vierailla vapaasti aukioloaikoina.");
INSERT INTO tuote VALUES (88, '1kk lippu', 30.00, 10.00, 6, NULL, '30x', NULL, NULL, '1kk', "Yhden kuukauden kausilipulla voit vierailla vapaasti aukioloaikoina.");
INSERT INTO tuote VALUES (89, '3kk lippu', 80.00, 30.00, 6, NULL, '90x', NULL, NULL, '3kk', "Kolmen kuukauden kausilipulla voit vierailla vapaasti aukioloaikoina.");
-- INSERT INTO tuote VALUES ();