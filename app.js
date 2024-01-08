require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var GuestRouter = require('./routes/guests');
var BannerRouter = require('./routes/banners');
var BlogsRouter = require('./routes/blogs');
var ProductDescriptionRouter = require('./routes/product_description');
var CustomerRouter = require('./routes/customers');
var SLidersRouter = require('./routes/sliders');
var ProductRouter = require('./routes/products');
var CategoryRouter = require('./routes/categories');
var ReviewRouter = require('./routes/reviews');
var CartRouter = require('./routes/carts');
var SearchRouter = require('./routes/searching');
var ShippingRouter = require('./routes/shippings');
var OrderRouter = require('./routes/orders');
var ManufacturRouter = require('./routes/manufactur');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/assets', express.static('assets'));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/guest', GuestRouter);
app.use('/banner', BannerRouter);
app.use('/blog', BlogsRouter);
app.use('/product_description', ProductDescriptionRouter);
app.use('/customer', CustomerRouter);
app.use('/slider', SLidersRouter);
app.use('/product', ProductRouter);
app.use('/category', CategoryRouter);
app.use('/review', ReviewRouter);
app.use('/cart', CartRouter);
app.use('/search', SearchRouter);
app.use('/shipping', ShippingRouter);
app.use('/order', OrderRouter);
app.use('/manufactur', ManufacturRouter);

module.exports = app;
