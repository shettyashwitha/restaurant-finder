import React, { Component } from 'react';
import Restaurant from '../restaurant/restaurant.js';
import './restaurant-container.css';

class RestaurantContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [

        {
          "restaurant": {
            "R": {
              "res_id": 51040
            },
            "apikey": "b596af176b098ffab3249afbdb87429a",
            "id": "51040",
            "name": "Truffles",
            "url": "https://www.zomato.com/bangalore/truffles-koramangala-5th-block?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "location": {
              "address": "28, 4th 'B' Cross, Koramangala 5th Block, Bangalore",
              "locality": "Koramangala 5th Block",
              "city": "Bangalore",
              "city_id": 4,
              "latitude": "12.9334267140",
              "longitude": "77.6143838838",
              "zipcode": "0",
              "country_id": 1,
              "locality_verbose": "Koramangala 5th Block, Bangalore"
            },
            "switch_to_order_menu": 0,
            "cuisines": "American, Cafe, Burger, Steak",
            "average_cost_for_two": 900,
            "price_range": 2,
            "currency": "Rs.",
            "offers": [],
            "thumb": "https://b.zmtcdn.com/data/res_imagery/51038_CHAIN_9cd6c64e9541129d588946788db3cc61.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "user_rating": {
              "aggregate_rating": "4.5",
              "rating_text": "Excellent",
              "rating_color": "3F7E00",
              "votes": "11315"
            },
            "photos_url": "https://www.zomato.com/bangalore/truffles-koramangala-5th-block/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
            "menu_url": "https://www.zomato.com/bangalore/truffles-koramangala-5th-block/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
            "featured_image": "https://b.zmtcdn.com/data/res_imagery/51038_CHAIN_9cd6c64e9541129d588946788db3cc61.png?output-format=webp",
            "has_online_delivery": 0,
            "is_delivering_now": 0,
            "deeplink": "zomato://restaurant/51040",
            "has_table_booking": 0,
            "events_url": "https://www.zomato.com/bangalore/truffles-koramangala-5th-block/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
          }
        },
        {
          "restaurant": {
            "R": {
              "res_id": 18439634
            },
            "apikey": "b596af176b098ffab3249afbdb87429a",
            "id": "18439634",
            "name": "ECHOES Koramangala",
            "url": "https://www.zomato.com/bangalore/echoes-koramangala-koramangala-5th-block?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "location": {
              "address": "44, 4th B Cross Road, Koramangala 5th Block, Bangalore",
              "locality": "Koramangala 5th Block",
              "city": "Bangalore",
              "city_id": 4,
              "latitude": "12.9341256750",
              "longitude": "77.6157524809",
              "zipcode": "",
              "country_id": 1,
              "locality_verbose": "Koramangala 5th Block, Bangalore"
            },
            "switch_to_order_menu": 0,
            "cuisines": "Continental, American, Cafe, Italian, North Indian, Chinese",
            "average_cost_for_two": 750,
            "price_range": 2,
            "currency": "Rs.",
            "offers": [],
            "zomato_events": [
              {
                "event": {
                  "event_id": 183003,
                  "friendly_start_date": "25 January",
                  "friendly_end_date": "25 January",
                  "start_date": "2018-01-25",
                  "end_date": "2018-01-25",
                  "end_time": "23:00:00",
                  "start_time": "20:00:00",
                  "is_active": 1,
                  "date_added": "2018-01-02 10:49:55",
                  "photos": [
                    {
                      "photo": {
                        "url": "https://b.zmtcdn.com/data/zomato_events/photos/e9a/cd1ece926a0ea873e961e084644fee9a_1514870395.jpg",
                        "thumb_url": "https://b.zmtcdn.com/data/zomato_events/photos/e9a/cd1ece926a0ea873e961e084644fee9a_1514870395.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                        "order": 0,
                        "md5sum": "cd1ece926a0ea873e961e084644fee9a",
                        "photo_id": 262652,
                        "uuid": 1514870302229988,
                        "type": "NORMAL"
                      }
                    }
                  ],
                  "restaurants": [],
                  "is_valid": 1,
                  "share_url": "http://www.zoma.to/r/18439634",
                  "title": "Tuning Thursdays",
                  "description": "Music that'll hit you with no pain but cheer! Join Echoes Koramangala for Tuning Thursdays on 25th January 2018 and catch  Ashutosh Live performing 8 PM onwards.",
                  "display_time": "08:00 pm - 11:00 pm",
                  "display_date": "25 January",
                  "is_end_time_set": 1,
                  "disclaimer": "Restaurants are solely responsible for the service; availability and quality of the events including all or any cancellations/ modifications/ complaints.",
                  "event_category": 0,
                  "event_category_name": "",
                  "book_link": ""
                }
              }
            ],
            "thumb": "https://b.zmtcdn.com/data/res_imagery/18439634_RESTAURANT_d382d5302152294dbe12ac19eeb64601.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "user_rating": {
              "aggregate_rating": "4.5",
              "rating_text": "Excellent",
              "rating_color": "3F7E00",
              "votes": "1662"
            },
            "photos_url": "https://www.zomato.com/bangalore/echoes-koramangala-koramangala-5th-block/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
            "menu_url": "https://www.zomato.com/bangalore/echoes-koramangala-koramangala-5th-block/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
            "featured_image": "https://b.zmtcdn.com/data/res_imagery/18439634_RESTAURANT_d382d5302152294dbe12ac19eeb64601.jpg",
            "has_online_delivery": 0,
            "is_delivering_now": 0,
            "deeplink": "zomato://restaurant/18439634",
            "has_table_booking": 0,
            "events_url": "https://www.zomato.com/bangalore/echoes-koramangala-koramangala-5th-block/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
          }
        },
        {
          "restaurant": {
            "R": {
              "res_id": 54162
            },
            "apikey": "b596af176b098ffab3249afbdb87429a",
            "id": "54162",
            "name": "The Black Pearl",
            "url": "https://www.zomato.com/bangalore/the-black-pearl-koramangala-5th-block?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "location": {
              "address": "105, 1st A Cross Road, Jyothi Nivas College Road, Koramangala 5th Block, Bangalore",
              "locality": "Koramangala 5th Block",
              "city": "Bangalore",
              "city_id": 4,
              "latitude": "12.9344024486",
              "longitude": "77.6161289960",
              "zipcode": "",
              "country_id": 1,
              "locality_verbose": "Koramangala 5th Block, Bangalore"
            },
            "switch_to_order_menu": 0,
            "cuisines": "North Indian, European, Mediterranean",
            "average_cost_for_two": 1400,
            "price_range": 3,
            "currency": "Rs.",
            "offers": [],
            "thumb": "https://b.zmtcdn.com/data/res_imagery/54162_RESTAURANT_11bea6c5c900d701890f042d29bee8fe.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "user_rating": {
              "aggregate_rating": "4.5",
              "rating_text": "Excellent",
              "rating_color": "3F7E00",
              "votes": "7073"
            },
            "photos_url": "https://www.zomato.com/bangalore/the-black-pearl-koramangala-5th-block/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
            "menu_url": "https://www.zomato.com/bangalore/the-black-pearl-koramangala-5th-block/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
            "featured_image": "https://b.zmtcdn.com/data/res_imagery/54162_RESTAURANT_11bea6c5c900d701890f042d29bee8fe.jpg?output-format=webp",
            "has_online_delivery": 0,
            "is_delivering_now": 0,
            "deeplink": "zomato://restaurant/54162",
            "has_table_booking": 1,
            "book_url": "https://www.zomato.com/bangalore/the-black-pearl-koramangala-5th-block/book?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "events_url": "https://www.zomato.com/bangalore/the-black-pearl-koramangala-5th-block/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
          }
        },
        {
          "restaurant": {
            "R": {
              "res_id": 54044
            },
            "apikey": "b596af176b098ffab3249afbdb87429a",
            "id": "54044",
            "name": "The Hole in the Wall Cafe",
            "url": "https://www.zomato.com/bangalore/the-hole-in-the-wall-cafe-koramangala-4th-block?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "location": {
              "address": "4, 8th Main Road, Koramangala 4th Block, Bangalore",
              "locality": "Koramangala 4th Block",
              "city": "Bangalore",
              "city_id": 4,
              "latitude": "12.9347439221",
              "longitude": "77.6257024705",
              "zipcode": "560034",
              "country_id": 1,
              "locality_verbose": "Koramangala 4th Block, Bangalore"
            },
            "switch_to_order_menu": 0,
            "cuisines": "Cafe, American",
            "average_cost_for_two": 600,
            "price_range": 2,
            "currency": "Rs.",
            "offers": [],
            "thumb": "https://b.zmtcdn.com/data/res_imagery/54044_RESTAURANT_b3087c04bc909708516e2406a3679b72_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "user_rating": {
              "aggregate_rating": "4.4",
              "rating_text": "Very Good",
              "rating_color": "5BA829",
              "votes": "5721"
            },
            "photos_url": "https://www.zomato.com/bangalore/the-hole-in-the-wall-cafe-koramangala-4th-block/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
            "menu_url": "https://www.zomato.com/bangalore/the-hole-in-the-wall-cafe-koramangala-4th-block/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
            "featured_image": "https://b.zmtcdn.com/data/res_imagery/54044_RESTAURANT_b3087c04bc909708516e2406a3679b72_c.jpg",
            "has_online_delivery": 0,
            "is_delivering_now": 0,
            "deeplink": "zomato://restaurant/54044",
            "has_table_booking": 0,
            "events_url": "https://www.zomato.com/bangalore/the-hole-in-the-wall-cafe-koramangala-4th-block/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
          }
        },
        {
          "restaurant": {
            "R": {
              "res_id": 54503
            },
            "apikey": "b596af176b098ffab3249afbdb87429a",
            "id": "54503",
            "name": "Prost Brew Pub",
            "url": "https://www.zomato.com/bangalore/prost-brew-pub-koramangala-4th-block?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "location": {
              "address": "749, 10th Main, 80 Feet Road, Koramangala 4th Block, Bangalore",
              "locality": "Koramangala 4th Block",
              "city": "Bangalore",
              "city_id": 4,
              "latitude": "12.9332188879",
              "longitude": "77.6307239011",
              "zipcode": "",
              "country_id": 1,
              "locality_verbose": "Koramangala 4th Block, Bangalore"
            },
            "switch_to_order_menu": 0,
            "cuisines": "American, Continental, North Indian, Salad",
            "average_cost_for_two": 1800,
            "price_range": 3,
            "currency": "Rs.",
            "offers": [],
            "thumb": "https://b.zmtcdn.com/data/res_imagery/54503_RESTAURANT_ffc9df49a6c95f7c59e29c735ce0e535.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "user_rating": {
              "aggregate_rating": "4.2",
              "rating_text": "Very Good",
              "rating_color": "5BA829",
              "votes": "4596"
            },
            "photos_url": "https://www.zomato.com/bangalore/prost-brew-pub-koramangala-4th-block/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
            "menu_url": "https://www.zomato.com/bangalore/prost-brew-pub-koramangala-4th-block/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
            "featured_image": "https://b.zmtcdn.com/data/res_imagery/54503_RESTAURANT_ffc9df49a6c95f7c59e29c735ce0e535.jpg?output-format=webp",
            "has_online_delivery": 0,
            "is_delivering_now": 0,
            "deeplink": "zomato://restaurant/54503",
            "has_table_booking": 1,
            "book_url": "https://www.zomato.com/bangalore/prost-brew-pub-koramangala-4th-block/book?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "events_url": "https://www.zomato.com/bangalore/prost-brew-pub-koramangala-4th-block/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
          }
        },
        {
          "restaurant": {
            "R": {
              "res_id": 59840
            },
            "apikey": "b596af176b098ffab3249afbdb87429a",
            "id": "59840",
            "name": "Onesta",
            "url": "https://www.zomato.com/bangalore/onesta-koramangala-4th-block?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "location": {
              "address": "562, 8th Main, Koramangala 4th Block, Bangalore",
              "locality": "Koramangala 4th Block",
              "city": "Bangalore",
              "city_id": 4,
              "latitude": "12.9335463119",
              "longitude": "77.6268363744",
              "zipcode": "",
              "country_id": 1,
              "locality_verbose": "Koramangala 4th Block, Bangalore"
            },
            "switch_to_order_menu": 0,
            "cuisines": "Pizza, Cafe, Italian",
            "average_cost_for_two": 600,
            "price_range": 2,
            "currency": "Rs.",
            "offers": [],
            "thumb": "https://b.zmtcdn.com/data/pictures/0/59840/e123f731b229ca9a0ba0574e419a2794.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "user_rating": {
              "aggregate_rating": "4.6",
              "rating_text": "Excellent",
              "rating_color": "3F7E00",
              "votes": "6187"
            },
            "photos_url": "https://www.zomato.com/bangalore/onesta-koramangala-4th-block/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
            "menu_url": "https://www.zomato.com/bangalore/onesta-koramangala-4th-block/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
            "featured_image": "https://b.zmtcdn.com/data/pictures/0/59840/e123f731b229ca9a0ba0574e419a2794.jpg?output-format=webp",
            "has_online_delivery": 1,
            "is_delivering_now": 1,
            "deeplink": "zomato://restaurant/59840",
            "order_url": "https://www.zomato.com/bangalore/onesta-koramangala-4th-block/order?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "order_deeplink": "",
            "has_table_booking": 0,
            "events_url": "https://www.zomato.com/bangalore/onesta-koramangala-4th-block/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
          }
        },
        {
          "restaurant": {
            "R": {
              "res_id": 58349
            },
            "apikey": "b596af176b098ffab3249afbdb87429a",
            "id": "58349",
            "name": "Buff Buffet Buff",
            "url": "https://www.zomato.com/bangalore/buff-buffet-buff-koramangala-5th-block?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "location": {
              "address": "60, Jyothi Nivas College Road, Koramangala 5th Block, Bangalore",
              "locality": "BluPetal Hotel, Koramangala",
              "city": "Bangalore",
              "city_id": 4,
              "latitude": "12.9333672418",
              "longitude": "77.6153692603",
              "zipcode": "560095",
              "country_id": 1,
              "locality_verbose": "BluPetal Hotel, Koramangala, Bangalore"
            },
            "switch_to_order_menu": 0,
            "cuisines": "North Indian, Chinese, Continental, Thai, Salad",
            "average_cost_for_two": 1500,
            "price_range": 3,
            "currency": "Rs.",
            "offers": [],
            "zomato_events": [
              {
                "event": {
                  "event_id": 66850,
                  "friendly_start_date": "07 January",
                  "friendly_end_date": "05 February",
                  "start_date": "2018-01-07",
                  "end_date": "2018-02-05",
                  "end_time": "16:30:00",
                  "start_time": "11:30:00",
                  "is_active": 1,
                  "date_added": "2016-04-29 12:05:34",
                  "photos": [
                    {
                      "photo": {
                        "url": "https://b.zmtcdn.com/data/zomato_events/photos/34c/6db2d659db13b94d14b629c9b3b2a34c_1515342069.jpg",
                        "thumb_url": "https://b.zmtcdn.com/data/zomato_events/photos/34c/6db2d659db13b94d14b629c9b3b2a34c_1515342069.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                        "order": 0,
                        "md5sum": "6db2d659db13b94d14b629c9b3b2a34c",
                        "photo_id": 263955,
                        "uuid": 1515342434224402,
                        "type": "NORMAL"
                      }
                    }
                  ],
                  "restaurants": [],
                  "is_valid": 1,
                  "share_url": "http://www.zoma.to/r/58349",
                  "title": "\"The MAHA Sunday Brunch\"",
                  "description": "Buff Buffet Buff presents the MAHA Sunday Brunch, which includes 2 Fresh Juices, Live counters like Egg station, Waffles, Dosawala, Stuffed Parathas, Dimsums, Chocolatewala & Ice Creams.\r\nThere are 16 Veg & Non-veg Starters (Indian & Chinese), which are served on the table.  The spread includes 10 varieties of Salads, Curd Rice, Dahi Bhalla, etc. The main course includes 6 Veg & 5 Non-veg gravies along with Dal, Steamed rice, Veg flavored rice, Fried rice, Noodle & a Non-Veg Biriyani.  The dessert section includes Indian & Bakery desserts along with Fresh Cut fruits to end on a Sweet note !!!!!!!!!!!\r\n\r\nEarly Bird offers available for Sunday Brunch !!  Walk-in between 11.30 am to 12.00 noon on Sundays & avail the Sunday Brunch at a special discounted price!!!\r\n\r\nAlso avail special offers on the Best of in-house liquor & beverages !!  \r\n\r\nBon Appetite & Cheers !!!",
                  "display_time": "11:30 am - 04:30 pm",
                  "display_date": "07 January - 05 February",
                  "is_end_time_set": 1,
                  "disclaimer": "Restaurants are solely responsible for the service; availability and quality of the events including all or any cancellations/ modifications/ complaints.",
                  "event_category": 0,
                  "event_category_name": "",
                  "book_link": ""
                }
              }
            ],
            "thumb": "https://b.zmtcdn.com/data/pictures/9/58349/fa0eaf9e92754fd852a6453d132e8d8b.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "user_rating": {
              "aggregate_rating": "4.3",
              "rating_text": "Very Good",
              "rating_color": "5BA829",
              "votes": "1994"
            },
            "photos_url": "https://www.zomato.com/bangalore/buff-buffet-buff-koramangala-5th-block/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
            "menu_url": "https://www.zomato.com/bangalore/buff-buffet-buff-koramangala-5th-block/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
            "featured_image": "https://b.zmtcdn.com/data/pictures/9/58349/fa0eaf9e92754fd852a6453d132e8d8b.jpg?output-format=webp",
            "has_online_delivery": 0,
            "is_delivering_now": 0,
            "deeplink": "zomato://restaurant/58349",
            "has_table_booking": 1,
            "book_url": "https://www.zomato.com/bangalore/buff-buffet-buff-koramangala-5th-block/book?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "events_url": "https://www.zomato.com/bangalore/buff-buffet-buff-koramangala-5th-block/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
          }
        },
        {
          "restaurant": {
            "R": {
              "res_id": 18323630
            },
            "apikey": "b596af176b098ffab3249afbdb87429a",
            "id": "18323630",
            "name": "House Of Commons",
            "url": "https://www.zomato.com/bangalore/house-of-commons-koramangala-5th-block?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "location": {
              "address": "122/B, Jyothi Nivas Road, 5th Block, Koramangala 5th Block, Bangalore",
              "locality": "Koramangala 5th Block",
              "city": "Bangalore",
              "city_id": 4,
              "latitude": "12.9347174539",
              "longitude": "77.6157977432",
              "zipcode": "",
              "country_id": 1,
              "locality_verbose": "Koramangala 5th Block, Bangalore"
            },
            "switch_to_order_menu": 0,
            "cuisines": "Continental, Asian, North Indian",
            "average_cost_for_two": 1000,
            "price_range": 3,
            "currency": "Rs.",
            "offers": [],
            "thumb": "https://b.zmtcdn.com/data/pictures/chains/0/18323630/72a59e09fb8e976645aa97726a765cfb.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "user_rating": {
              "aggregate_rating": "4.3",
              "rating_text": "Very Good",
              "rating_color": "5BA829",
              "votes": "1270"
            },
            "photos_url": "https://www.zomato.com/bangalore/house-of-commons-koramangala-5th-block/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
            "menu_url": "https://www.zomato.com/bangalore/house-of-commons-koramangala-5th-block/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
            "featured_image": "https://b.zmtcdn.com/data/pictures/chains/0/18323630/72a59e09fb8e976645aa97726a765cfb.jpeg?output-format=webp",
            "has_online_delivery": 0,
            "is_delivering_now": 0,
            "deeplink": "zomato://restaurant/18323630",
            "has_table_booking": 0,
            "events_url": "https://www.zomato.com/bangalore/house-of-commons-koramangala-5th-block/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
          }
        },
        {
          "restaurant": {
            "R": {
              "res_id": 18173066
            },
            "apikey": "b596af176b098ffab3249afbdb87429a",
            "id": "18173066",
            "name": "Bundar",
            "url": "https://www.zomato.com/bangalore/bundar-koramangala-6th-block?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "location": {
              "address": "111, Ground Floor, Asha Mansion, 6th Cross, Club Road, Koramangala 6th Block, Bangalore",
              "locality": "Koramangala 6th Block",
              "city": "Bangalore",
              "city_id": 4,
              "latitude": "12.9370940316",
              "longitude": "77.6246352866",
              "zipcode": "",
              "country_id": 1,
              "locality_verbose": "Koramangala 6th Block, Bangalore"
            },
            "switch_to_order_menu": 0,
            "cuisines": "Cafe, Burger, Fast Food, Street Food",
            "average_cost_for_two": 700,
            "price_range": 2,
            "currency": "Rs.",
            "offers": [],
            "thumb": "https://b.zmtcdn.com/data/pictures/6/18173066/1fa5732fb15364caafdd4f6642eedc12.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "user_rating": {
              "aggregate_rating": "4.0",
              "rating_text": "Very Good",
              "rating_color": "5BA829",
              "votes": "1159"
            },
            "photos_url": "https://www.zomato.com/bangalore/bundar-koramangala-6th-block/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
            "menu_url": "https://www.zomato.com/bangalore/bundar-koramangala-6th-block/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
            "featured_image": "https://b.zmtcdn.com/data/pictures/6/18173066/1fa5732fb15364caafdd4f6642eedc12.jpg?output-format=webp",
            "has_online_delivery": 1,
            "is_delivering_now": 1,
            "deeplink": "zomato://restaurant/18173066",
            "order_url": "https://www.zomato.com/bangalore/bundar-koramangala-6th-block/order?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "order_deeplink": "",
            "has_table_booking": 0,
            "events_url": "https://www.zomato.com/bangalore/bundar-koramangala-6th-block/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
          }
        }
      ]
    }
  }
  render() {
    return (
      <div>
      {this.state.restaurants.map((restaurant) => {
        return <Restaurant data={restaurant}></Restaurant>})}
      </div>
    );
  }
}

export default RestaurantContainer;
