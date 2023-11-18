var DataTypes = require("sequelize").DataTypes;
var _bk_guest = require("./bk_guest");
var _blog_article = require("./blog_article");
var _blog_image = require("./blog_image");
var _blog_partial = require("./blog_partial");
var _blog_partial_sub = require("./blog_partial_sub");
var _db_attribute = require("./db_attribute");
var _db_attribute_description = require("./db_attribute_description");
var _db_attribute_group = require("./db_attribute_group");
var _db_attribute_group_description = require("./db_attribute_group_description");
var _db_author = require("./db_author");
var _db_bank = require("./db_bank");
var _db_banner = require("./db_banner");
var _db_banner_image = require("./db_banner_image");
var _db_banner_image_description = require("./db_banner_image_description");
var _db_bantuan = require("./db_bantuan");
var _db_bantuan_kategori = require("./db_bantuan_kategori");
var _db_blogs = require("./db_blogs");
var _db_blogs_author = require("./db_blogs_author");
var _db_blogs_category = require("./db_blogs_category");
var _db_blogs_comments = require("./db_blogs_comments");
var _db_blogs_galeri = require("./db_blogs_galeri");
var _db_cair_saldo = require("./db_cair_saldo");
var _db_campaign = require("./db_campaign");
var _db_campaign_detail = require("./db_campaign_detail");
var _db_cart = require("./db_cart");
var _db_category = require("./db_category");
var _db_category_description = require("./db_category_description");
var _db_category_filter = require("./db_category_filter");
var _db_category_path = require("./db_category_path");
var _db_category_to_layout = require("./db_category_to_layout");
var _db_category_to_spesifikasi = require("./db_category_to_spesifikasi");
var _db_category_to_store = require("./db_category_to_store");
var _db_chat = require("./db_chat");
var _db_circloid_color_preset = require("./db_circloid_color_preset");
var _db_circloid_custom_admin_page = require("./db_circloid_custom_admin_page");
var _db_circloid_widget_layout = require("./db_circloid_widget_layout");
var _db_city = require("./db_city");
var _db_click_product_token = require("./db_click_product_token");
var _db_config = require("./db_config");
var _db_country = require("./db_country");
var _db_coupon = require("./db_coupon");
var _db_coupon_detail = require("./db_coupon_detail");
var _db_coupon_history = require("./db_coupon_history");
var _db_coupon_to_promo = require("./db_coupon_to_promo");
var _db_currency = require("./db_currency");
var _db_custom_field = require("./db_custom_field");
var _db_custom_field_description = require("./db_custom_field_description");
var _db_custom_field_to_customer_group = require("./db_custom_field_to_customer_group");
var _db_custom_field_value = require("./db_custom_field_value");
var _db_custom_field_value_description = require("./db_custom_field_value_description");
var _db_customer = require("./db_customer");
var _db_customer_ban_ip = require("./db_customer_ban_ip");
var _db_customer_field = require("./db_customer_field");
var _db_customer_group = require("./db_customer_group");
var _db_customer_group_description = require("./db_customer_group_description");
var _db_customer_history = require("./db_customer_history");
var _db_customer_ip = require("./db_customer_ip");
var _db_customer_online = require("./db_customer_online");
var _db_customer_reward = require("./db_customer_reward");
var _db_customer_transaction = require("./db_customer_transaction");
var _db_digital = require("./db_digital");
var _db_digital_ulang = require("./db_digital_ulang");
var _db_disccuss_customer = require("./db_disccuss_customer");
var _db_download = require("./db_download");
var _db_download_description = require("./db_download_description");
var _db_extension = require("./db_extension");
var _db_feedback_customer = require("./db_feedback_customer");
var _db_feedback_template = require("./db_feedback_template");
var _db_filter = require("./db_filter");
var _db_filter_description = require("./db_filter_description");
var _db_filter_group = require("./db_filter_group");
var _db_filter_group_description = require("./db_filter_group_description");
var _db_flashsale = require("./db_flashsale");
var _db_flashsale_product = require("./db_flashsale_product");
var _db_forgot_password_token = require("./db_forgot_password_token");
var _db_funding = require("./db_funding");
var _db_funding_detail = require("./db_funding_detail");
var _db_game = require("./db_game");
var _db_game_coint = require("./db_game_coint");
var _db_game_history = require("./db_game_history");
var _db_geo_zone = require("./db_geo_zone");
var _db_gt_cart = require("./db_gt_cart");
var _db_gt_category = require("./db_gt_category");
var _db_gt_category_description = require("./db_gt_category_description");
var _db_gt_company = require("./db_gt_company");
var _db_gt_manufacturer = require("./db_gt_manufacturer");
var _db_gt_order_chat = require("./db_gt_order_chat");
var _db_gt_order_file = require("./db_gt_order_file");
var _db_gt_order_product = require("./db_gt_order_product");
var _db_gt_order_status = require("./db_gt_order_status");
var _db_gt_product = require("./db_gt_product");
var _db_gt_product_description = require("./db_gt_product_description");
var _db_gt_product_image = require("./db_gt_product_image");
var _db_gt_product_to_category = require("./db_gt_product_to_category");
var _db_gt_product_view = require("./db_gt_product_view");
var _db_gt_shipping = require("./db_gt_shipping");
var _db_income_mp = require("./db_income_mp");
var _db_information = require("./db_information");
var _db_information_description = require("./db_information_description");
var _db_information_to_layout = require("./db_information_to_layout");
var _db_information_to_mall = require("./db_information_to_mall");
var _db_information_to_store = require("./db_information_to_store");
var _db_koin = require("./db_koin");
var _db_koin_history = require("./db_koin_history");
var _db_komplain_cs = require("./db_komplain_cs");
var _db_kurir = require("./db_kurir");
var _db_kurir_tocity = require("./db_kurir_tocity");
var _db_language = require("./db_language");
var _db_layout = require("./db_layout");
var _db_layout_route = require("./db_layout_route");
var _db_length_class = require("./db_length_class");
var _db_length_class_description = require("./db_length_class_description");
var _db_lookbook = require("./db_lookbook");
var _db_lookbook_description = require("./db_lookbook_description");
var _db_lookbook_image = require("./db_lookbook_image");
var _db_lookbook_to_product = require("./db_lookbook_to_product");
var _db_maintenance = require("./db_maintenance");
var _db_mall = require("./db_mall");
var _db_mall_chat = require("./db_mall_chat");
var _db_mall_rek = require("./db_mall_rek");
var _db_mall_to_banner = require("./db_mall_to_banner");
var _db_mall_to_promo = require("./db_mall_to_promo");
var _db_mall_to_rek = require("./db_mall_to_rek");
var _db_manufacturer = require("./db_manufacturer");
var _db_manufacturer_to_mall = require("./db_manufacturer_to_mall");
var _db_manufacturer_to_mall_product = require("./db_manufacturer_to_mall_product");
var _db_manufacturer_to_rating = require("./db_manufacturer_to_rating");
var _db_manufacturer_to_store = require("./db_manufacturer_to_store");
var _db_megamenu = require("./db_megamenu");
var _db_megamenu_description = require("./db_megamenu_description");
var _db_megamenu_widgets = require("./db_megamenu_widgets");
var _db_notification = require("./db_notification");
var _db_openbay_faq = require("./db_openbay_faq");
var _db_option = require("./db_option");
var _db_option_description = require("./db_option_description");
var _db_option_value = require("./db_option_value");
var _db_option_value_description = require("./db_option_value_description");
var _db_order = require("./db_order");
var _db_order_ap = require("./db_order_ap");
var _db_order_ap_detail = require("./db_order_ap_detail");
var _db_order_digital = require("./db_order_digital");
var _db_order_digital_product = require("./db_order_digital_product");
var _db_order_digital_token = require("./db_order_digital_token");
var _db_order_download = require("./db_order_download");
var _db_order_field = require("./db_order_field");
var _db_order_fraud = require("./db_order_fraud");
var _db_order_history = require("./db_order_history");
var _db_order_history_asli = require("./db_order_history_asli");
var _db_order_option = require("./db_order_option");
var _db_order_payment = require("./db_order_payment");
var _db_order_product = require("./db_order_product");
var _db_order_recurring = require("./db_order_recurring");
var _db_order_recurring_transaction = require("./db_order_recurring_transaction");
var _db_order_send_email = require("./db_order_send_email");
var _db_order_shipping = require("./db_order_shipping");
var _db_order_status = require("./db_order_status");
var _db_order_ticket = require("./db_order_ticket");
var _db_order_ticket_detail = require("./db_order_ticket_detail");
var _db_order_token = require("./db_order_token");
var _db_order_total = require("./db_order_total");
var _db_order_voucher = require("./db_order_voucher");
var _db_pavblog_blog = require("./db_pavblog_blog");
var _db_pavblog_blog_description = require("./db_pavblog_blog_description");
var _db_pavblog_category = require("./db_pavblog_category");
var _db_pavblog_category_description = require("./db_pavblog_category_description");
var _db_pavblog_comment = require("./db_pavblog_comment");
var _db_pavoslidergroups = require("./db_pavoslidergroups");
var _db_pavosliderlayers = require("./db_pavosliderlayers");
var _db_payment_confirmation = require("./db_payment_confirmation");
var _db_payment_method = require("./db_payment_method");
var _db_pengaturan = require("./db_pengaturan");
var _db_penjualan_nilai = require("./db_penjualan_nilai");
var _db_peringatan_hari = require("./db_peringatan_hari");
var _db_pilpros = require("./db_pilpros");
var _db_product = require("./db_product");
var _db_product_attribute = require("./db_product_attribute");
var _db_product_description = require("./db_product_description");
var _db_product_discount = require("./db_product_discount");
var _db_product_filter = require("./db_product_filter");
var _db_product_image = require("./db_product_image");
var _db_product_ok = require("./db_product_ok");
var _db_product_option = require("./db_product_option");
var _db_product_option_value = require("./db_product_option_value");
var _db_product_profile = require("./db_product_profile");
var _db_product_recurring = require("./db_product_recurring");
var _db_product_related = require("./db_product_related");
var _db_product_reward = require("./db_product_reward");
var _db_product_special = require("./db_product_special");
var _db_product_special_category = require("./db_product_special_category");
var _db_product_to_category = require("./db_product_to_category");
var _db_product_to_download = require("./db_product_to_download");
var _db_product_to_layout = require("./db_product_to_layout");
var _db_product_to_paket_push = require("./db_product_to_paket_push");
var _db_product_to_promoted_push = require("./db_product_to_promoted_push");
var _db_product_to_push = require("./db_product_to_push");
var _db_product_to_store = require("./db_product_to_store");
var _db_product_variation = require("./db_product_variation");
var _db_product_view = require("./db_product_view");
var _db_profile = require("./db_profile");
var _db_profile_description = require("./db_profile_description");
var _db_promo = require("./db_promo");
var _db_promo_kategori = require("./db_promo_kategori");
var _db_promo_paket_push = require("./db_promo_paket_push");
var _db_reset_pin = require("./db_reset_pin");
var _db_return = require("./db_return");
var _db_return_action = require("./db_return_action");
var _db_return_history = require("./db_return_history");
var _db_return_reason = require("./db_return_reason");
var _db_return_status = require("./db_return_status");
var _db_review = require("./db_review");
var _db_setting = require("./db_setting");
var _db_shipping = require("./db_shipping");
var _db_slider = require("./db_slider");
var _db_spesial = require("./db_spesial");
var _db_spesial_product = require("./db_spesial_product");
var _db_spesifikasi = require("./db_spesifikasi");
var _db_stock_status = require("./db_stock_status");
var _db_store = require("./db_store");
var _db_supply = require("./db_supply");
var _db_supply_category = require("./db_supply_category");
var _db_target = require("./db_target");
var _db_tax_class = require("./db_tax_class");
var _db_tax_rate = require("./db_tax_rate");
var _db_tax_rate_to_customer_group = require("./db_tax_rate_to_customer_group");
var _db_tax_rule = require("./db_tax_rule");
var _db_template = require("./db_template");
var _db_terakhir_dicari = require("./db_terakhir_dicari");
var _db_terakhir_dilihat = require("./db_terakhir_dilihat");
var _db_theme_event = require("./db_theme_event");
var _db_ticket = require("./db_ticket");
var _db_ulasan_to_barang = require("./db_ulasan_to_barang");
var _db_url_alias = require("./db_url_alias");
var _db_user = require("./db_user");
var _db_user_group = require("./db_user_group");
var _db_verticalmenu = require("./db_verticalmenu");
var _db_verticalmenu_description = require("./db_verticalmenu_description");
var _db_verticalmenu_widgets = require("./db_verticalmenu_widgets");
var _db_voucher = require("./db_voucher");
var _db_voucher_history = require("./db_voucher_history");
var _db_voucher_theme = require("./db_voucher_theme");
var _db_voucher_theme_description = require("./db_voucher_theme_description");
var _db_weight_class = require("./db_weight_class");
var _db_weight_class_description = require("./db_weight_class_description");
var _db_zone = require("./db_zone");
var _db_zone_to_geo_zone = require("./db_zone_to_geo_zone");
var _elib_cart = require("./elib_cart");
var _elib_category = require("./elib_category");
var _elib_group = require("./elib_group");
var _elib_guest_visit = require("./elib_guest_visit");
var _elib_history_status = require("./elib_history_status");
var _elib_history_update = require("./elib_history_update");
var _elib_image = require("./elib_image");
var _elib_inventory_perpustakaan = require("./elib_inventory_perpustakaan");
var _elib_inventory_transaction = require("./elib_inventory_transaction");
var _elib_jenjang = require("./elib_jenjang");
var _elib_log = require("./elib_log");
var _elib_masa_aktif = require("./elib_masa_aktif");
var _elib_nimda = require("./elib_nimda");
var _elib_notif = require("./elib_notif");
var _elib_penerbit = require("./elib_penerbit");
var _elib_penerbit_user = require("./elib_penerbit_user");
var _elib_penulis = require("./elib_penulis");
var _elib_perpustakaan = require("./elib_perpustakaan");
var _elib_product = require("./elib_product");
var _elib_product_activation = require("./elib_product_activation");
var _elib_product_activation_history = require("./elib_product_activation_history");
var _elib_product_customer = require("./elib_product_customer");
var _elib_product_discount = require("./elib_product_discount");
var _elib_product_perpustakaan = require("./elib_product_perpustakaan");
var _elib_product_to_epub = require("./elib_product_to_epub");
var _elib_product_to_variation = require("./elib_product_to_variation");
var _elib_product_transaction = require("./elib_product_transaction");
var _elib_product_variation = require("./elib_product_variation");
var _elib_role = require("./elib_role");
var _elib_transaction_history = require("./elib_transaction_history");
var _elib_transaction_status = require("./elib_transaction_status");
var _elib_user = require("./elib_user");
var _elib_user_bookmark = require("./elib_user_bookmark");
var _elib_user_catatan = require("./elib_user_catatan");
var _elib_user_gift = require("./elib_user_gift");
var _elib_user_log = require("./elib_user_log");
var _elib_user_transaction = require("./elib_user_transaction");
var _eu_harga2022 = require("./eu_harga2022");
var _g_tebakgambar_data = require("./g_tebakgambar_data");
var _g_tebakgambar_jawaban = require("./g_tebakgambar_jawaban");
var _g_tebakgambar_user = require("./g_tebakgambar_user");
var _game_tebakgambar_data = require("./game_tebakgambar_data");
var _master_erlangga = require("./master_erlangga");
var _myproject = require("./myproject");
var _oc_abcd = require("./oc_abcd");
var _payment = require("./payment");
var _pwbi_cabang = require("./pwbi_cabang");
var _pwbi_harian = require("./pwbi_harian");
var _pwbi_perbulan = require("./pwbi_perbulan");
var _pwbi_pertahun = require("./pwbi_pertahun");
var _pwbi_summary = require("./pwbi_summary");
var _pwbi_summary_tahun = require("./pwbi_summary_tahun");
var _pwbi_target = require("./pwbi_target");
var _ro_city = require("./ro_city");
var _ro_province = require("./ro_province");
var _ro_subdistrict = require("./ro_subdistrict");
var _ro_wilayah = require("./ro_wilayah");
var _siplah_sshproduct = require("./siplah_sshproduct");
var _soal_customer_point = require("./soal_customer_point");
var _soal_jawaban_temp = require("./soal_jawaban_temp");
var _soal_kerjakan = require("./soal_kerjakan");
var _soal_m_level = require("./soal_m_level");
var _soal_m_mapel = require("./soal_m_mapel");
var _soal_m_materi = require("./soal_m_materi");
var _soal_m_soal = require("./soal_m_soal");
var _soal_paket_ujian = require("./soal_paket_ujian");
var _soal_paket_ujian_detil = require("./soal_paket_ujian_detil");
var _soal_paket_ujian_group = require("./soal_paket_ujian_group");
var _update_stok = require("./update_stok");

function initModels(sequelize) {
  var bk_guest = _bk_guest(sequelize, DataTypes);
  var blog_article = _blog_article(sequelize, DataTypes);
  var blog_image = _blog_image(sequelize, DataTypes);
  var blog_partial = _blog_partial(sequelize, DataTypes);
  var blog_partial_sub = _blog_partial_sub(sequelize, DataTypes);
  var db_attribute = _db_attribute(sequelize, DataTypes);
  var db_attribute_description = _db_attribute_description(sequelize, DataTypes);
  var db_attribute_group = _db_attribute_group(sequelize, DataTypes);
  var db_attribute_group_description = _db_attribute_group_description(sequelize, DataTypes);
  var db_author = _db_author(sequelize, DataTypes);
  var db_bank = _db_bank(sequelize, DataTypes);
  var db_banner = _db_banner(sequelize, DataTypes);
  var db_banner_image = _db_banner_image(sequelize, DataTypes);
  var db_banner_image_description = _db_banner_image_description(sequelize, DataTypes);
  var db_bantuan = _db_bantuan(sequelize, DataTypes);
  var db_bantuan_kategori = _db_bantuan_kategori(sequelize, DataTypes);
  var db_blogs = _db_blogs(sequelize, DataTypes);
  var db_blogs_author = _db_blogs_author(sequelize, DataTypes);
  var db_blogs_category = _db_blogs_category(sequelize, DataTypes);
  var db_blogs_comments = _db_blogs_comments(sequelize, DataTypes);
  var db_blogs_galeri = _db_blogs_galeri(sequelize, DataTypes);
  var db_cair_saldo = _db_cair_saldo(sequelize, DataTypes);
  var db_campaign = _db_campaign(sequelize, DataTypes);
  var db_campaign_detail = _db_campaign_detail(sequelize, DataTypes);
  var db_cart = _db_cart(sequelize, DataTypes);
  var db_category = _db_category(sequelize, DataTypes);
  var db_category_description = _db_category_description(sequelize, DataTypes);
  var db_category_filter = _db_category_filter(sequelize, DataTypes);
  var db_category_path = _db_category_path(sequelize, DataTypes);
  var db_category_to_layout = _db_category_to_layout(sequelize, DataTypes);
  var db_category_to_spesifikasi = _db_category_to_spesifikasi(sequelize, DataTypes);
  var db_category_to_store = _db_category_to_store(sequelize, DataTypes);
  var db_chat = _db_chat(sequelize, DataTypes);
  var db_circloid_color_preset = _db_circloid_color_preset(sequelize, DataTypes);
  var db_circloid_custom_admin_page = _db_circloid_custom_admin_page(sequelize, DataTypes);
  var db_circloid_widget_layout = _db_circloid_widget_layout(sequelize, DataTypes);
  var db_city = _db_city(sequelize, DataTypes);
  var db_click_product_token = _db_click_product_token(sequelize, DataTypes);
  var db_config = _db_config(sequelize, DataTypes);
  var db_country = _db_country(sequelize, DataTypes);
  var db_coupon = _db_coupon(sequelize, DataTypes);
  var db_coupon_detail = _db_coupon_detail(sequelize, DataTypes);
  var db_coupon_history = _db_coupon_history(sequelize, DataTypes);
  var db_coupon_to_promo = _db_coupon_to_promo(sequelize, DataTypes);
  var db_currency = _db_currency(sequelize, DataTypes);
  var db_custom_field = _db_custom_field(sequelize, DataTypes);
  var db_custom_field_description = _db_custom_field_description(sequelize, DataTypes);
  var db_custom_field_to_customer_group = _db_custom_field_to_customer_group(sequelize, DataTypes);
  var db_custom_field_value = _db_custom_field_value(sequelize, DataTypes);
  var db_custom_field_value_description = _db_custom_field_value_description(sequelize, DataTypes);
  var db_customer = _db_customer(sequelize, DataTypes);
  var db_customer_ban_ip = _db_customer_ban_ip(sequelize, DataTypes);
  var db_customer_field = _db_customer_field(sequelize, DataTypes);
  var db_customer_group = _db_customer_group(sequelize, DataTypes);
  var db_customer_group_description = _db_customer_group_description(sequelize, DataTypes);
  var db_customer_history = _db_customer_history(sequelize, DataTypes);
  var db_customer_ip = _db_customer_ip(sequelize, DataTypes);
  var db_customer_online = _db_customer_online(sequelize, DataTypes);
  var db_customer_reward = _db_customer_reward(sequelize, DataTypes);
  var db_customer_transaction = _db_customer_transaction(sequelize, DataTypes);
  var db_digital = _db_digital(sequelize, DataTypes);
  var db_digital_ulang = _db_digital_ulang(sequelize, DataTypes);
  var db_disccuss_customer = _db_disccuss_customer(sequelize, DataTypes);
  var db_download = _db_download(sequelize, DataTypes);
  var db_download_description = _db_download_description(sequelize, DataTypes);
  var db_extension = _db_extension(sequelize, DataTypes);
  var db_feedback_customer = _db_feedback_customer(sequelize, DataTypes);
  var db_feedback_template = _db_feedback_template(sequelize, DataTypes);
  var db_filter = _db_filter(sequelize, DataTypes);
  var db_filter_description = _db_filter_description(sequelize, DataTypes);
  var db_filter_group = _db_filter_group(sequelize, DataTypes);
  var db_filter_group_description = _db_filter_group_description(sequelize, DataTypes);
  var db_flashsale = _db_flashsale(sequelize, DataTypes);
  var db_flashsale_product = _db_flashsale_product(sequelize, DataTypes);
  var db_forgot_password_token = _db_forgot_password_token(sequelize, DataTypes);
  var db_funding = _db_funding(sequelize, DataTypes);
  var db_funding_detail = _db_funding_detail(sequelize, DataTypes);
  var db_game = _db_game(sequelize, DataTypes);
  var db_game_coint = _db_game_coint(sequelize, DataTypes);
  var db_game_history = _db_game_history(sequelize, DataTypes);
  var db_geo_zone = _db_geo_zone(sequelize, DataTypes);
  var db_gt_cart = _db_gt_cart(sequelize, DataTypes);
  var db_gt_category = _db_gt_category(sequelize, DataTypes);
  var db_gt_category_description = _db_gt_category_description(sequelize, DataTypes);
  var db_gt_company = _db_gt_company(sequelize, DataTypes);
  var db_gt_manufacturer = _db_gt_manufacturer(sequelize, DataTypes);
  var db_gt_order_chat = _db_gt_order_chat(sequelize, DataTypes);
  var db_gt_order_file = _db_gt_order_file(sequelize, DataTypes);
  var db_gt_order_product = _db_gt_order_product(sequelize, DataTypes);
  var db_gt_order_status = _db_gt_order_status(sequelize, DataTypes);
  var db_gt_product = _db_gt_product(sequelize, DataTypes);
  var db_gt_product_description = _db_gt_product_description(sequelize, DataTypes);
  var db_gt_product_image = _db_gt_product_image(sequelize, DataTypes);
  var db_gt_product_to_category = _db_gt_product_to_category(sequelize, DataTypes);
  var db_gt_product_view = _db_gt_product_view(sequelize, DataTypes);
  var db_gt_shipping = _db_gt_shipping(sequelize, DataTypes);
  var db_income_mp = _db_income_mp(sequelize, DataTypes);
  var db_information = _db_information(sequelize, DataTypes);
  var db_information_description = _db_information_description(sequelize, DataTypes);
  var db_information_to_layout = _db_information_to_layout(sequelize, DataTypes);
  var db_information_to_mall = _db_information_to_mall(sequelize, DataTypes);
  var db_information_to_store = _db_information_to_store(sequelize, DataTypes);
  var db_koin = _db_koin(sequelize, DataTypes);
  var db_koin_history = _db_koin_history(sequelize, DataTypes);
  var db_komplain_cs = _db_komplain_cs(sequelize, DataTypes);
  var db_kurir = _db_kurir(sequelize, DataTypes);
  var db_kurir_tocity = _db_kurir_tocity(sequelize, DataTypes);
  var db_language = _db_language(sequelize, DataTypes);
  var db_layout = _db_layout(sequelize, DataTypes);
  var db_layout_route = _db_layout_route(sequelize, DataTypes);
  var db_length_class = _db_length_class(sequelize, DataTypes);
  var db_length_class_description = _db_length_class_description(sequelize, DataTypes);
  var db_lookbook = _db_lookbook(sequelize, DataTypes);
  var db_lookbook_description = _db_lookbook_description(sequelize, DataTypes);
  var db_lookbook_image = _db_lookbook_image(sequelize, DataTypes);
  var db_lookbook_to_product = _db_lookbook_to_product(sequelize, DataTypes);
  var db_maintenance = _db_maintenance(sequelize, DataTypes);
  var db_mall = _db_mall(sequelize, DataTypes);
  var db_mall_chat = _db_mall_chat(sequelize, DataTypes);
  var db_mall_rek = _db_mall_rek(sequelize, DataTypes);
  var db_mall_to_banner = _db_mall_to_banner(sequelize, DataTypes);
  var db_mall_to_promo = _db_mall_to_promo(sequelize, DataTypes);
  var db_mall_to_rek = _db_mall_to_rek(sequelize, DataTypes);
  var db_manufacturer = _db_manufacturer(sequelize, DataTypes);
  var db_manufacturer_to_mall = _db_manufacturer_to_mall(sequelize, DataTypes);
  var db_manufacturer_to_mall_product = _db_manufacturer_to_mall_product(sequelize, DataTypes);
  var db_manufacturer_to_rating = _db_manufacturer_to_rating(sequelize, DataTypes);
  var db_manufacturer_to_store = _db_manufacturer_to_store(sequelize, DataTypes);
  var db_megamenu = _db_megamenu(sequelize, DataTypes);
  var db_megamenu_description = _db_megamenu_description(sequelize, DataTypes);
  var db_megamenu_widgets = _db_megamenu_widgets(sequelize, DataTypes);
  var db_notification = _db_notification(sequelize, DataTypes);
  var db_openbay_faq = _db_openbay_faq(sequelize, DataTypes);
  var db_option = _db_option(sequelize, DataTypes);
  var db_option_description = _db_option_description(sequelize, DataTypes);
  var db_option_value = _db_option_value(sequelize, DataTypes);
  var db_option_value_description = _db_option_value_description(sequelize, DataTypes);
  var db_order = _db_order(sequelize, DataTypes);
  var db_order_ap = _db_order_ap(sequelize, DataTypes);
  var db_order_ap_detail = _db_order_ap_detail(sequelize, DataTypes);
  var db_order_digital = _db_order_digital(sequelize, DataTypes);
  var db_order_digital_product = _db_order_digital_product(sequelize, DataTypes);
  var db_order_digital_token = _db_order_digital_token(sequelize, DataTypes);
  var db_order_download = _db_order_download(sequelize, DataTypes);
  var db_order_field = _db_order_field(sequelize, DataTypes);
  var db_order_fraud = _db_order_fraud(sequelize, DataTypes);
  var db_order_history = _db_order_history(sequelize, DataTypes);
  var db_order_history_asli = _db_order_history_asli(sequelize, DataTypes);
  var db_order_option = _db_order_option(sequelize, DataTypes);
  var db_order_payment = _db_order_payment(sequelize, DataTypes);
  var db_order_product = _db_order_product(sequelize, DataTypes);
  var db_order_recurring = _db_order_recurring(sequelize, DataTypes);
  var db_order_recurring_transaction = _db_order_recurring_transaction(sequelize, DataTypes);
  var db_order_send_email = _db_order_send_email(sequelize, DataTypes);
  var db_order_shipping = _db_order_shipping(sequelize, DataTypes);
  var db_order_status = _db_order_status(sequelize, DataTypes);
  var db_order_ticket = _db_order_ticket(sequelize, DataTypes);
  var db_order_ticket_detail = _db_order_ticket_detail(sequelize, DataTypes);
  var db_order_token = _db_order_token(sequelize, DataTypes);
  var db_order_total = _db_order_total(sequelize, DataTypes);
  var db_order_voucher = _db_order_voucher(sequelize, DataTypes);
  var db_pavblog_blog = _db_pavblog_blog(sequelize, DataTypes);
  var db_pavblog_blog_description = _db_pavblog_blog_description(sequelize, DataTypes);
  var db_pavblog_category = _db_pavblog_category(sequelize, DataTypes);
  var db_pavblog_category_description = _db_pavblog_category_description(sequelize, DataTypes);
  var db_pavblog_comment = _db_pavblog_comment(sequelize, DataTypes);
  var db_pavoslidergroups = _db_pavoslidergroups(sequelize, DataTypes);
  var db_pavosliderlayers = _db_pavosliderlayers(sequelize, DataTypes);
  var db_payment_confirmation = _db_payment_confirmation(sequelize, DataTypes);
  var db_payment_method = _db_payment_method(sequelize, DataTypes);
  var db_pengaturan = _db_pengaturan(sequelize, DataTypes);
  var db_penjualan_nilai = _db_penjualan_nilai(sequelize, DataTypes);
  var db_peringatan_hari = _db_peringatan_hari(sequelize, DataTypes);
  var db_pilpros = _db_pilpros(sequelize, DataTypes);
  var db_product = _db_product(sequelize, DataTypes);
  var db_product_attribute = _db_product_attribute(sequelize, DataTypes);
  var db_product_description = _db_product_description(sequelize, DataTypes);
  var db_product_discount = _db_product_discount(sequelize, DataTypes);
  var db_product_filter = _db_product_filter(sequelize, DataTypes);
  var db_product_image = _db_product_image(sequelize, DataTypes);
  var db_product_ok = _db_product_ok(sequelize, DataTypes);
  var db_product_option = _db_product_option(sequelize, DataTypes);
  var db_product_option_value = _db_product_option_value(sequelize, DataTypes);
  var db_product_profile = _db_product_profile(sequelize, DataTypes);
  var db_product_recurring = _db_product_recurring(sequelize, DataTypes);
  var db_product_related = _db_product_related(sequelize, DataTypes);
  var db_product_reward = _db_product_reward(sequelize, DataTypes);
  var db_product_special = _db_product_special(sequelize, DataTypes);
  var db_product_special_category = _db_product_special_category(sequelize, DataTypes);
  var db_product_to_category = _db_product_to_category(sequelize, DataTypes);
  var db_product_to_download = _db_product_to_download(sequelize, DataTypes);
  var db_product_to_layout = _db_product_to_layout(sequelize, DataTypes);
  var db_product_to_paket_push = _db_product_to_paket_push(sequelize, DataTypes);
  var db_product_to_promoted_push = _db_product_to_promoted_push(sequelize, DataTypes);
  var db_product_to_push = _db_product_to_push(sequelize, DataTypes);
  var db_product_to_store = _db_product_to_store(sequelize, DataTypes);
  var db_product_variation = _db_product_variation(sequelize, DataTypes);
  var db_product_view = _db_product_view(sequelize, DataTypes);
  var db_profile = _db_profile(sequelize, DataTypes);
  var db_profile_description = _db_profile_description(sequelize, DataTypes);
  var db_promo = _db_promo(sequelize, DataTypes);
  var db_promo_kategori = _db_promo_kategori(sequelize, DataTypes);
  var db_promo_paket_push = _db_promo_paket_push(sequelize, DataTypes);
  var db_reset_pin = _db_reset_pin(sequelize, DataTypes);
  var db_return = _db_return(sequelize, DataTypes);
  var db_return_action = _db_return_action(sequelize, DataTypes);
  var db_return_history = _db_return_history(sequelize, DataTypes);
  var db_return_reason = _db_return_reason(sequelize, DataTypes);
  var db_return_status = _db_return_status(sequelize, DataTypes);
  var db_review = _db_review(sequelize, DataTypes);
  var db_setting = _db_setting(sequelize, DataTypes);
  var db_shipping = _db_shipping(sequelize, DataTypes);
  var db_slider = _db_slider(sequelize, DataTypes);
  var db_spesial = _db_spesial(sequelize, DataTypes);
  var db_spesial_product = _db_spesial_product(sequelize, DataTypes);
  var db_spesifikasi = _db_spesifikasi(sequelize, DataTypes);
  var db_stock_status = _db_stock_status(sequelize, DataTypes);
  var db_store = _db_store(sequelize, DataTypes);
  var db_supply = _db_supply(sequelize, DataTypes);
  var db_supply_category = _db_supply_category(sequelize, DataTypes);
  var db_target = _db_target(sequelize, DataTypes);
  var db_tax_class = _db_tax_class(sequelize, DataTypes);
  var db_tax_rate = _db_tax_rate(sequelize, DataTypes);
  var db_tax_rate_to_customer_group = _db_tax_rate_to_customer_group(sequelize, DataTypes);
  var db_tax_rule = _db_tax_rule(sequelize, DataTypes);
  var db_template = _db_template(sequelize, DataTypes);
  var db_terakhir_dicari = _db_terakhir_dicari(sequelize, DataTypes);
  var db_terakhir_dilihat = _db_terakhir_dilihat(sequelize, DataTypes);
  var db_theme_event = _db_theme_event(sequelize, DataTypes);
  var db_ticket = _db_ticket(sequelize, DataTypes);
  var db_ulasan_to_barang = _db_ulasan_to_barang(sequelize, DataTypes);
  var db_url_alias = _db_url_alias(sequelize, DataTypes);
  var db_user = _db_user(sequelize, DataTypes);
  var db_user_group = _db_user_group(sequelize, DataTypes);
  var db_verticalmenu = _db_verticalmenu(sequelize, DataTypes);
  var db_verticalmenu_description = _db_verticalmenu_description(sequelize, DataTypes);
  var db_verticalmenu_widgets = _db_verticalmenu_widgets(sequelize, DataTypes);
  var db_voucher = _db_voucher(sequelize, DataTypes);
  var db_voucher_history = _db_voucher_history(sequelize, DataTypes);
  var db_voucher_theme = _db_voucher_theme(sequelize, DataTypes);
  var db_voucher_theme_description = _db_voucher_theme_description(sequelize, DataTypes);
  var db_weight_class = _db_weight_class(sequelize, DataTypes);
  var db_weight_class_description = _db_weight_class_description(sequelize, DataTypes);
  var db_zone = _db_zone(sequelize, DataTypes);
  var db_zone_to_geo_zone = _db_zone_to_geo_zone(sequelize, DataTypes);
  var elib_cart = _elib_cart(sequelize, DataTypes);
  var elib_category = _elib_category(sequelize, DataTypes);
  var elib_group = _elib_group(sequelize, DataTypes);
  var elib_guest_visit = _elib_guest_visit(sequelize, DataTypes);
  var elib_history_status = _elib_history_status(sequelize, DataTypes);
  var elib_history_update = _elib_history_update(sequelize, DataTypes);
  var elib_image = _elib_image(sequelize, DataTypes);
  var elib_inventory_perpustakaan = _elib_inventory_perpustakaan(sequelize, DataTypes);
  var elib_inventory_transaction = _elib_inventory_transaction(sequelize, DataTypes);
  var elib_jenjang = _elib_jenjang(sequelize, DataTypes);
  var elib_log = _elib_log(sequelize, DataTypes);
  var elib_masa_aktif = _elib_masa_aktif(sequelize, DataTypes);
  var elib_nimda = _elib_nimda(sequelize, DataTypes);
  var elib_notif = _elib_notif(sequelize, DataTypes);
  var elib_penerbit = _elib_penerbit(sequelize, DataTypes);
  var elib_penerbit_user = _elib_penerbit_user(sequelize, DataTypes);
  var elib_penulis = _elib_penulis(sequelize, DataTypes);
  var elib_perpustakaan = _elib_perpustakaan(sequelize, DataTypes);
  var elib_product = _elib_product(sequelize, DataTypes);
  var elib_product_activation = _elib_product_activation(sequelize, DataTypes);
  var elib_product_activation_history = _elib_product_activation_history(sequelize, DataTypes);
  var elib_product_customer = _elib_product_customer(sequelize, DataTypes);
  var elib_product_discount = _elib_product_discount(sequelize, DataTypes);
  var elib_product_perpustakaan = _elib_product_perpustakaan(sequelize, DataTypes);
  var elib_product_to_epub = _elib_product_to_epub(sequelize, DataTypes);
  var elib_product_to_variation = _elib_product_to_variation(sequelize, DataTypes);
  var elib_product_transaction = _elib_product_transaction(sequelize, DataTypes);
  var elib_product_variation = _elib_product_variation(sequelize, DataTypes);
  var elib_role = _elib_role(sequelize, DataTypes);
  var elib_transaction_history = _elib_transaction_history(sequelize, DataTypes);
  var elib_transaction_status = _elib_transaction_status(sequelize, DataTypes);
  var elib_user = _elib_user(sequelize, DataTypes);
  var elib_user_bookmark = _elib_user_bookmark(sequelize, DataTypes);
  var elib_user_catatan = _elib_user_catatan(sequelize, DataTypes);
  var elib_user_gift = _elib_user_gift(sequelize, DataTypes);
  var elib_user_log = _elib_user_log(sequelize, DataTypes);
  var elib_user_transaction = _elib_user_transaction(sequelize, DataTypes);
  var eu_harga2022 = _eu_harga2022(sequelize, DataTypes);
  var g_tebakgambar_data = _g_tebakgambar_data(sequelize, DataTypes);
  var g_tebakgambar_jawaban = _g_tebakgambar_jawaban(sequelize, DataTypes);
  var g_tebakgambar_user = _g_tebakgambar_user(sequelize, DataTypes);
  var game_tebakgambar_data = _game_tebakgambar_data(sequelize, DataTypes);
  var master_erlangga = _master_erlangga(sequelize, DataTypes);
  var myproject = _myproject(sequelize, DataTypes);
  var oc_abcd = _oc_abcd(sequelize, DataTypes);
  var payment = _payment(sequelize, DataTypes);
  var pwbi_cabang = _pwbi_cabang(sequelize, DataTypes);
  var pwbi_harian = _pwbi_harian(sequelize, DataTypes);
  var pwbi_perbulan = _pwbi_perbulan(sequelize, DataTypes);
  var pwbi_pertahun = _pwbi_pertahun(sequelize, DataTypes);
  var pwbi_summary = _pwbi_summary(sequelize, DataTypes);
  var pwbi_summary_tahun = _pwbi_summary_tahun(sequelize, DataTypes);
  var pwbi_target = _pwbi_target(sequelize, DataTypes);
  var ro_city = _ro_city(sequelize, DataTypes);
  var ro_province = _ro_province(sequelize, DataTypes);
  var ro_subdistrict = _ro_subdistrict(sequelize, DataTypes);
  var ro_wilayah = _ro_wilayah(sequelize, DataTypes);
  var siplah_sshproduct = _siplah_sshproduct(sequelize, DataTypes);
  var soal_customer_point = _soal_customer_point(sequelize, DataTypes);
  var soal_jawaban_temp = _soal_jawaban_temp(sequelize, DataTypes);
  var soal_kerjakan = _soal_kerjakan(sequelize, DataTypes);
  var soal_m_level = _soal_m_level(sequelize, DataTypes);
  var soal_m_mapel = _soal_m_mapel(sequelize, DataTypes);
  var soal_m_materi = _soal_m_materi(sequelize, DataTypes);
  var soal_m_soal = _soal_m_soal(sequelize, DataTypes);
  var soal_paket_ujian = _soal_paket_ujian(sequelize, DataTypes);
  var soal_paket_ujian_detil = _soal_paket_ujian_detil(sequelize, DataTypes);
  var soal_paket_ujian_group = _soal_paket_ujian_group(sequelize, DataTypes);
  var update_stok = _update_stok(sequelize, DataTypes);


  return {
    bk_guest,
    blog_article,
    blog_image,
    blog_partial,
    blog_partial_sub,
    db_attribute,
    db_attribute_description,
    db_attribute_group,
    db_attribute_group_description,
    db_author,
    db_bank,
    db_banner,
    db_banner_image,
    db_banner_image_description,
    db_bantuan,
    db_bantuan_kategori,
    db_blogs,
    db_blogs_author,
    db_blogs_category,
    db_blogs_comments,
    db_blogs_galeri,
    db_cair_saldo,
    db_campaign,
    db_campaign_detail,
    db_cart,
    db_category,
    db_category_description,
    db_category_filter,
    db_category_path,
    db_category_to_layout,
    db_category_to_spesifikasi,
    db_category_to_store,
    db_chat,
    db_circloid_color_preset,
    db_circloid_custom_admin_page,
    db_circloid_widget_layout,
    db_city,
    db_click_product_token,
    db_config,
    db_country,
    db_coupon,
    db_coupon_detail,
    db_coupon_history,
    db_coupon_to_promo,
    db_currency,
    db_custom_field,
    db_custom_field_description,
    db_custom_field_to_customer_group,
    db_custom_field_value,
    db_custom_field_value_description,
    db_customer,
    db_customer_ban_ip,
    db_customer_field,
    db_customer_group,
    db_customer_group_description,
    db_customer_history,
    db_customer_ip,
    db_customer_online,
    db_customer_reward,
    db_customer_transaction,
    db_digital,
    db_digital_ulang,
    db_disccuss_customer,
    db_download,
    db_download_description,
    db_extension,
    db_feedback_customer,
    db_feedback_template,
    db_filter,
    db_filter_description,
    db_filter_group,
    db_filter_group_description,
    db_flashsale,
    db_flashsale_product,
    db_forgot_password_token,
    db_funding,
    db_funding_detail,
    db_game,
    db_game_coint,
    db_game_history,
    db_geo_zone,
    db_gt_cart,
    db_gt_category,
    db_gt_category_description,
    db_gt_company,
    db_gt_manufacturer,
    db_gt_order_chat,
    db_gt_order_file,
    db_gt_order_product,
    db_gt_order_status,
    db_gt_product,
    db_gt_product_description,
    db_gt_product_image,
    db_gt_product_to_category,
    db_gt_product_view,
    db_gt_shipping,
    db_income_mp,
    db_information,
    db_information_description,
    db_information_to_layout,
    db_information_to_mall,
    db_information_to_store,
    db_koin,
    db_koin_history,
    db_komplain_cs,
    db_kurir,
    db_kurir_tocity,
    db_language,
    db_layout,
    db_layout_route,
    db_length_class,
    db_length_class_description,
    db_lookbook,
    db_lookbook_description,
    db_lookbook_image,
    db_lookbook_to_product,
    db_maintenance,
    db_mall,
    db_mall_chat,
    db_mall_rek,
    db_mall_to_banner,
    db_mall_to_promo,
    db_mall_to_rek,
    db_manufacturer,
    db_manufacturer_to_mall,
    db_manufacturer_to_mall_product,
    db_manufacturer_to_rating,
    db_manufacturer_to_store,
    db_megamenu,
    db_megamenu_description,
    db_megamenu_widgets,
    db_notification,
    db_openbay_faq,
    db_option,
    db_option_description,
    db_option_value,
    db_option_value_description,
    db_order,
    db_order_ap,
    db_order_ap_detail,
    db_order_digital,
    db_order_digital_product,
    db_order_digital_token,
    db_order_download,
    db_order_field,
    db_order_fraud,
    db_order_history,
    db_order_history_asli,
    db_order_option,
    db_order_payment,
    db_order_product,
    db_order_recurring,
    db_order_recurring_transaction,
    db_order_send_email,
    db_order_shipping,
    db_order_status,
    db_order_ticket,
    db_order_ticket_detail,
    db_order_token,
    db_order_total,
    db_order_voucher,
    db_pavblog_blog,
    db_pavblog_blog_description,
    db_pavblog_category,
    db_pavblog_category_description,
    db_pavblog_comment,
    db_pavoslidergroups,
    db_pavosliderlayers,
    db_payment_confirmation,
    db_payment_method,
    db_pengaturan,
    db_penjualan_nilai,
    db_peringatan_hari,
    db_pilpros,
    db_product,
    db_product_attribute,
    db_product_description,
    db_product_discount,
    db_product_filter,
    db_product_image,
    db_product_ok,
    db_product_option,
    db_product_option_value,
    db_product_profile,
    db_product_recurring,
    db_product_related,
    db_product_reward,
    db_product_special,
    db_product_special_category,
    db_product_to_category,
    db_product_to_download,
    db_product_to_layout,
    db_product_to_paket_push,
    db_product_to_promoted_push,
    db_product_to_push,
    db_product_to_store,
    db_product_variation,
    db_product_view,
    db_profile,
    db_profile_description,
    db_promo,
    db_promo_kategori,
    db_promo_paket_push,
    db_reset_pin,
    db_return,
    db_return_action,
    db_return_history,
    db_return_reason,
    db_return_status,
    db_review,
    db_setting,
    db_shipping,
    db_slider,
    db_spesial,
    db_spesial_product,
    db_spesifikasi,
    db_stock_status,
    db_store,
    db_supply,
    db_supply_category,
    db_target,
    db_tax_class,
    db_tax_rate,
    db_tax_rate_to_customer_group,
    db_tax_rule,
    db_template,
    db_terakhir_dicari,
    db_terakhir_dilihat,
    db_theme_event,
    db_ticket,
    db_ulasan_to_barang,
    db_url_alias,
    db_user,
    db_user_group,
    db_verticalmenu,
    db_verticalmenu_description,
    db_verticalmenu_widgets,
    db_voucher,
    db_voucher_history,
    db_voucher_theme,
    db_voucher_theme_description,
    db_weight_class,
    db_weight_class_description,
    db_zone,
    db_zone_to_geo_zone,
    elib_cart,
    elib_category,
    elib_group,
    elib_guest_visit,
    elib_history_status,
    elib_history_update,
    elib_image,
    elib_inventory_perpustakaan,
    elib_inventory_transaction,
    elib_jenjang,
    elib_log,
    elib_masa_aktif,
    elib_nimda,
    elib_notif,
    elib_penerbit,
    elib_penerbit_user,
    elib_penulis,
    elib_perpustakaan,
    elib_product,
    elib_product_activation,
    elib_product_activation_history,
    elib_product_customer,
    elib_product_discount,
    elib_product_perpustakaan,
    elib_product_to_epub,
    elib_product_to_variation,
    elib_product_transaction,
    elib_product_variation,
    elib_role,
    elib_transaction_history,
    elib_transaction_status,
    elib_user,
    elib_user_bookmark,
    elib_user_catatan,
    elib_user_gift,
    elib_user_log,
    elib_user_transaction,
    eu_harga2022,
    g_tebakgambar_data,
    g_tebakgambar_jawaban,
    g_tebakgambar_user,
    game_tebakgambar_data,
    master_erlangga,
    myproject,
    oc_abcd,
    payment,
    pwbi_cabang,
    pwbi_harian,
    pwbi_perbulan,
    pwbi_pertahun,
    pwbi_summary,
    pwbi_summary_tahun,
    pwbi_target,
    ro_city,
    ro_province,
    ro_subdistrict,
    ro_wilayah,
    siplah_sshproduct,
    soal_customer_point,
    soal_jawaban_temp,
    soal_kerjakan,
    soal_m_level,
    soal_m_mapel,
    soal_m_materi,
    soal_m_soal,
    soal_paket_ujian,
    soal_paket_ujian_detil,
    soal_paket_ujian_group,
    update_stok,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
