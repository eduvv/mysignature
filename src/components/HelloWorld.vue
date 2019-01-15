<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12 ma-2>
        <v-card pa-2>
          <v-layout row wrap align-center justify-space-around>
            <v-flex xs3 pa-2>
              <v-text-field v-model="naam" label="naam" placeholder="Edward Van Vlasselaer" required></v-text-field>
            </v-flex>

            <v-flex xs3 pa-2>
              <v-text-field v-model="functie" label="functie" placeholder="Evolutionary Architect" required></v-text-field>
            </v-flex>

            <v-flex xs3 pa-2>
              <v-text-field v-model="email" label="email" placeholder="edward.vanvlasselaer@tothepoint.company" required></v-text-field>
            </v-flex>

            <v-flex xs3 pa-2>
              <v-text-field v-model="telefoon" label="telefoon" placeholder="(+32)(0)473 451 355"></v-text-field>
            </v-flex>

            <v-flex xs12 pa-4>
              <v-radio-group v-model="radioGroup" row>
                <v-radio v-for="(company,i) in companies" :key="i" :label="company" :value="i"></v-radio>
              </v-radio-group>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 ma-2>
        <v-card pa-2>
          <!-- SIGNATURE START -->
          <table id="signature" class="pa-2" width="500" cellspacing="0" cellpadding="0" border="0">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/brands.css" integrity="sha384-1KLgFVb/gHrlDGLFPgMbeedi6tQBLcWvyNUN+YKXbD7ZFbjX6BLpMDf0PJ32XJfX" crossorigin="anonymous">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/fontawesome.css" integrity="sha384-jLuaxTTBR42U2qJ/pm4JRouHkEDHkVqH0T1nyQXn1mZ7Snycpf6Rl25VBNthU4z0" crossorigin="anonymous">
            <tr>
              <td>
                <table cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td valign="top" width="100" style="padding:0 8px 0 0;vertical-align: top;">
                      <img width="100" style="width:100px;moz-border-radius:10%;khtml-border-radius:10%;o-border-radius:10%;webkit-border-radius:10%;ms-border-radius:10%;border-radius:10%;" :src="companyData[`${radioGroup}`].imgUrl">
                    </td>
                    <td style="font-size:1em;padding:0 15px 0 8px;vertical-align: top;" valign="top">
                      <table cellspacing="0" cellpadding="0" border="0" style="line-height: 1.4;font-family:Verdana, Geneva, sans-serif;font-size:90%;color: #000001;">
                        <tr>
                          <td>
                            <div style="font: 1.2em Verdana, Geneva, sans-serif;color:#000001;">{{naam}}</div>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 4px 0;">
                            <div style="color:#000001;font-family:Verdana, Geneva, sans-serif;">{{functie}} | {{companies[`${radioGroup}`]}}</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span v-bind:style="{color: companyData[`${radioGroup}`].colorCode}" style="font-family:Verdana, Geneva, sans-serif;">mobile:&nbsp;</span>
                            <span>
                              <a style="font-family:Verdana, Geneva, sans-serif;color:#000001;" :href="`tel: ${telefoon}`">{{telefoon}}</a>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span v-bind:style="{color: companyData[`${radioGroup}`].colorCode}" style="font-family:Verdana, Geneva, sans-serif;">site:&nbsp;</span>
                            <span style="font-family:Verdana, Geneva, sans-serif;">
                              <a :href="'https://' + companyData[`${radioGroup}`].url" style="color:#000001;" target="_blank">{{companyData[`${radioGroup}`].url}}</a>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span v-bind:style="{color: companyData[`${radioGroup}`].colorCode}" style="font-family:Verdana, Geneva, sans-serif;">email:&nbsp;</span>
                            <span>
                              <a :href="'mailto:'+ `${email}`" target="_blank" style="font-family:Verdana, Geneva, sans-serif;color: #000001;">{{email}}</a>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span v-bind:style="{color: companyData[`${radioGroup}`].colorCode}" style="font-family:Verdana, Geneva, sans-serif;">address:&nbsp;</span>
                            <span style="font-family:Verdana, Geneva, sans-serif;color:#000001;">{{address}}</span>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td v-bind:style="{borderColor: companyData[`${radioGroup}`].colorCode}" style="border-left:3px solid;vertical-align:middle;padding:0 0 3px 6px;font-family: Arial;" valign="middle">
                      <table cellspacing="0" cellpadding="0" border="0" style="line-height: 1;">
                        <tr>
                          <td style="padding: 4px 0 0 0;">
                            <a href="Https://www.facebook.com/wearetothepoint">
                              <img :src="companyData[`${radioGroup}`].icons.facebook"/>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 4px 0 0 0;">
                            <a href="Https://www.linkedin.com/company/wearetothepoint/">
                              <img :src="companyData[`${radioGroup}`].icons.linkedin"/>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 4px 0 0 0;">
                            <a href="Https://www.twitter.com/wearetothepoint/">
                              <img :src="companyData[`${radioGroup}`].icons.twitter"/>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 4px 0 0 0;">
                            <a href="Https://www.instagram.com/wearetothepoint/">
                              <img width="25" :src="companyData[`${radioGroup}`].icons.instagram"/>
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <!-- SIGNATURE END -->
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout align-start justify-start row>
        <v-btn style="color: white;" :color="companyData[`${radioGroup}`].colorCode" @click="copyElement">copy element to clipboard</v-btn>
        <v-btn @click="copyHTML">copy HTML to clipboard</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    naam: "",
    email: "",
    telefoon: "",
    functie: "",
    companies: ["ToThePoint", "OneDot", "OnTheSpot", "ToThePointGroup"],
    companyData: [
      {
        url: "tothepoint.group/family/tothepoint",
        imgUrl: "https://i.imgur.com/5GMFRf9.png",
        colorCode: "#689f38",
        icons: {
          facebook: "https://i.imgur.com/wjdukFb.png",
          instagram: "https://i.imgur.com/8Mpz2mp.png",
          linkedin: "https://i.imgur.com/0IqGHB4.png",
          twitter: "https://i.imgur.com/3Ncu7Yg.png"
        }
      },
      {
        url: "tothepoint.group/family/onedot ",
        imgUrl: "https://i.imgur.com/noWBjCQ.png",
        colorCode: "#F25929",
        icons: {
          facebook: "https://i.imgur.com/naTkZZm.png",
          instagram: "https://i.imgur.com/pqRDZH9.png",
          linkedin: "https://i.imgur.com/EFgcL84.png",
          twitter: "https://i.imgur.com/zJB8dhn.png"
        }
      },
      {
        url: "tothepoint.group/family/onthespot",
        imgUrl: "https://i.imgur.com/kS616Vn.png",
        colorCode: "#6EAA39",
        icons: {
          facebook: "https://i.imgur.com/z2ZBADq.png",
          instagram: "https://i.imgur.com/7nETuss.png",
          linkedin: "https://i.imgur.com/MEwnfsL.png",
          twitter: "https://i.imgur.com/vEKUlJd.png"
        }
      },
      {
        url: "tothepoint.group",
        imgUrl: "https://i.imgur.com/7hJts7s.png",
        colorCode: "#000000",
        icons: {
          facebook: "https://i.imgur.com/an01cnq.png",
          instagram: "https://i.imgur.com/Ra0YFiX.png",
          linkedin: "https://i.imgur.com/z4cnVKy.png",
          twitter: "https://i.imgur.com/EWWYJQy.png"
        }
      }
    ],
    address: "Veldkant 33a, 2550 Kontich",
    radioGroup: 0
  }),
  methods: {
    copyHTML() {
      var x = document.getElementById("signature");
      var elementHtml = x.outerHTML;
      navigator.clipboard
        .writeText(elementHtml)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch(err => {
          // This can happen if the user denies clipboard permissions:
          console.error("Could not copy text: ", err);
        });
      console.log(elementHtml);
    },
    copyElement() {
      var x = document.getElementById("signature").outerHTML;
      function listener(e) {
        e.clipboardData.setData("text/html", x);
        //e.clipboardData.setData("text/plain", x);
        e.preventDefault();
      }
      document.addEventListener("copy", listener);
      document.execCommand("copy");
      document.removeEventListener("copy", listener);
    }
  }
};
</script>

<style>
</style>
