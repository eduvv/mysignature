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
                              <i class="fab fa-facebook-square fa-2x" :style="{ color:  companyData[`${radioGroup}`].colorCode}"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 4px 0 0 0;">
                            <a href="Https://www.linkedin.com/company/wearetothepoint/">
                              <i class="fab fa-linkedin fa-2x" :style="{ color:  companyData[`${radioGroup}`].colorCode}"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 4px 0 0 0;">
                            <a href="Https://www.twitter.com/wearetothepoint/">
                              <i class="fab fa-twitter fa-2x" :style="{ color:  companyData[`${radioGroup}`].colorCode}"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 4px 0 0 0;">
                            <a href="Https://www.instagram.com/wearetothepoint/">
                              <i class="fab fa-instagram fa-2x" :style="{ color:  companyData[`${radioGroup}`].colorCode}"></i>
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
    <v-layout justify-center>
      <v-flex>
        <v-btn @click="copy">copy to clipboard</v-btn>
      </v-flex>
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
        colorCode: "#689f38"
      },
      {
        url: "tothepoint.group/family/onedot ",
        imgUrl: "https://i.imgur.com/noWBjCQ.png",
        colorCode: "#F25929"
      },
      {
        url: "tothepoint.group/family/onthespot",
        imgUrl: "https://i.imgur.com/kS616Vn.png",
        colorCode: "#6EAA39"
      },
      {
        url: "tothepoint.group",
        imgUrl: "https://i.imgur.com/7hJts7s.png",
        colorCode: "#000000"
      }
    ],
    address: "Veldkant 33a, 2550 Kontich",
    radioGroup: 0
  }),
  methods: {
    copy() {
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
    }
  }
};
</script>

<style>
</style>
