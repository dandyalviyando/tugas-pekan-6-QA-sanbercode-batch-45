import Page from "./page.js";

class CategoryPage extends Page {

    get btnTambah () {
        return $('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/a');
    }

    get namaField () {
        return $('#nama');
    }

    get deskripsiField () {
        return $('#deskripsi');
    }

    get btnSimpan () {
        return $('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/button');
    }

    get successMessage() {
        return $('div[role="alert"].chakra-alert');
    }

    get errMsgEmptyName () {
        return $('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/div[1]');
    }

    async clickTambahBtn(){
        return this.btnTambah.click()
    }

    async clickSimpanBtn(){
        return this.btnSimpan.click()
    }

    async simpan (nama, deskripsi) {
        await this.namaField.setValue(nama);
        await this.deskripsiField.setValue(deskripsi);
        await this.btnSimpan.click();
    }

    async getSuccessMsg() {
        await expect(this.successMessage).toBeExisting();
    }

    async getErrMsgEmptyName(){
        await expect(this.errMsgEmptyName).toBeExisting()
    }

}

export default new CategoryPage();