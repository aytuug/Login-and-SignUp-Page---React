import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en : {
            translations :{
                'Sign Up' : 'Sign Up',
                'Password mismatch' : 'Password mismatch',
                'Username' : 'Username',
                'Display Name' :'Display Name',
                'Password' : 'Password',
                'PasswordRepeat' : 'Password Repeat',
                'Login' : 'Login'
            }
        },
        tr :{
            translations : {
                'Sign Up' : 'Kayit Ol',
                'Password mismatch' : 'Sifreler Uyusmuyor.',
                'Username' : 'Kullanici Adi',
                'Display Name': 'Tercih edilen isim',
                'Password' : 'Sifre',
                'PasswordRepeat' : 'Sifreyi tekrarlayiniz',
                'Login' : 'Giris'
            }
        }
    },
    fallbackLng : 'tr',
    ns : ['translations'],
    defaultNS : 'translations',
    keySeparator : false,
    interpolation : {
        escapeValue :false,
        formatSeparator : ','
    },
    react : {
        wait : true
    }
});

export default i18n;