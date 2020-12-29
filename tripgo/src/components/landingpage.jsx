import { Grid } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { Link } from "react-router-dom";
import {} from "react-icons/fa";

import "./style.css";
import userService from "../services/UsersService";
const LandingPage = () => {
  return (
    <div>
      <section class="header">
        <div class="container">
          <button
            type="button"
            class="login-btn1"
            onClick={(e) => {
              window.location.href = "/";
            }}
          >
            TripGo
          </button>
          {!userService.loggedIn() ? (
            <button
              type="button"
              class="login-btn"
              onClick={(e) => {
                window.location.href = "/login";
              }}
            >
              Login
            </button>
          ) : (
            ""
          )}
        </div>
        <h2></h2>
        <h1>We Travel Across Pakistan</h1>
        <p>Join Us</p>
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Search For Locations"
          />
          <div class="input-group-append">
            <button
              type="submit"
              class="input-group-text btn"
              onClick={(e) => {
                window.location.href = "/products";
              }}
            >
              Search
            </button>
          </div>
        </div>
      </section>
      <section class="features">
        <h1>Featured Destinations</h1>
        <div class="container">
          <div class="row">
            <div class="column">
              <div class="feature-box">
                <div class="feature-img">
                  <img src="./images/kashmir1.jpg" alt="" />
                  <div class="price">
                    <p>100$</p>
                  </div>
                  <div class="rating">
                    <p>🌟🌟🌟🌟🌟</p>
                  </div>
                </div>
                <div class="feature-details">
                  <h4>Kashmir</h4>
                  <p>
                    With the sound of gushing water, aroma of pine trees, the
                    vibrancy of saffron, rise of azaan and an unfathomable
                    calling, Kashmir surprises everyone.
                  </p>
                </div>
                <span>🗺Kashmir </span>
                <span>🌞5 Days </span>
                <span>🌙4 Nights</span>
              </div>
            </div>
            <div class="column">
              <div class="feature-box">
                <div class="feature-img">
                  <img src="./images/karachi.jpg" alt="" />
                  <div class="price">
                    <p>80$</p>
                  </div>
                  <div class="rating">
                    <p>🌟🌟🌟⭐</p>
                  </div>
                </div>
                <div class="feature-details">
                  <h4>Karachi</h4>
                  <p>
                    Karachi, the noisy, bustling, ever-growing troubled
                    metropolis of Pakistan, lies on the eastern coast of the
                    Arabian Sea, just northwest of the Indus river delta.
                  </p>
                </div>
                <span>🗺Karachi </span>
                <span>🌞4 Days </span>
                <span>🌙3 Nights</span>
              </div>
            </div>
            <div class="column">
              <div class="feature-box">
                <div class="feature-img">
                  <img src="./images/hunza1.jpg" alt="" />
                  <div class="price">
                    <p>150$</p>
                  </div>
                  <div class="rating">
                    <p>🌟🌟🌟🌟⭐</p>
                  </div>
                </div>
                <div class="feature-details">
                  <h4>Hunza</h4>
                  <p>
                    Hunza is a mountainous valley in the autonomous
                    Gilgit-Baltistan region. The Hunza valley is situated at an
                    elevation of 2,438 meters.
                  </p>
                </div>
                <span>🗺Hunza </span>
                <span>🌞7 Days </span>
                <span>🌙6 Nights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="gallery">
        <h1>Travel Gallery</h1>
        <div class="container">
          <div class="row">
            <div class="column1">
              <div class="gallery-box">
                <img src="./images/kashmir-g.jpg" alt="" />
                <h4>Kashmir</h4>
              </div>
            </div>
            <div class="column1">
              <div class="gallery-box">
                <img src="./images/quaid1.jpg" alt="" />
                <h4>Karachi</h4>
              </div>
            </div>
            <div class="column1">
              <div class="gallery-box">
                <img src="./images/lahore.jpg" alt="" />
                <h4>Lahore</h4>
              </div>
            </div>
            <div class="column1">
              <div class="gallery-box">
                <img src="./images/kalash.jpg" alt="" />
                <h4>Kalash</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="banner">
        <div class="banner-highlights">
          <div class="container">
            <div class="row">
              <div class="column2">
                <h2>Get 20% OFF on Top Destinations</h2>
                <p>
                  Book Your Tickets Before Student Week and Avail Flat 20%
                  Discount
                </p>
              </div>
              <div class="column2">
                <button
                  type="button"
                  class="booking-btn"
                  onClick={(e) => {
                    window.location.href = "/products";
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="users-feedback">
        <h1>Feedback</h1>
        <div class="container">
          <div class="row">
            <div class="column3">
              <div class="user-review">
                <p>
                  What a wonderful experience! The tour leaders who were locals
                  enlightened us with the history of the city.The staff was
                  lovely and attentive. We would recommend to everyone who wants
                  to experience a real tour. Excellent!
                </p>
                <h5>Hammad Yousaf</h5>
                <p>🌟🌟🌟🌟🌟</p>
                <p>Hunza</p>
              </div>
              <img src="./images/hammad.jpg" alt="" />
            </div>
            <div class="column3">
              <div class="user-review">
                <p>
                  We had the most remarkable family tour with TripGO. Not only
                  everything was perfect, but we felt, in every instance, that
                  our guides and crew truly cared about us.Food was good
                  enough.We definitly will be back.
                </p>
                <h5>Abubakar Ijaz</h5>
                <p>🌟🌟🌟🌟</p>
                <p>Khunjerab</p>
              </div>
              <img src="./images/bakar.jpg" alt="" />
            </div>
            <div class="column3">
              <div class="user-review">
                <p>
                  This was our third trip with TripGo and it lived up to our
                  expectations. It was a wonderfully organized trip. The guide
                  was well informed and participated in all the activities. A
                  shout-out to the organizers. Excellent.
                </p>
                <h5>Ammar Khan</h5>
                <p>🌟🌟🌟🌟</p>
                <p>Gawadar</p>
              </div>
              <img src="./images/ammar.jpg" alt="" />
            </div>
            <div class="column3">
              <div class="user-review">
                <p>
                  The holiday of a life time, our adventure in Kalam was without
                  a doubt our favourite bachelors trip. The comfort and beauty
                  of the Kalam, the delicious food, the history we learned, made
                  it a trip to remember. !
                </p>
                <h5>Asad Nawaz</h5>
                <p>🌟🌟🌟🌟🌟</p>
                <p>Kalam</p>
              </div>
              <img src="./images/asad.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section class="footer">
        <div class="container">
          <div class="row">
            <div class="column4">
              <img src="./images/logo1.png" alt="" class="footer-logo" />
            </div>
            <div class="column4">
              <h4>Features</h4>
              <p>Deals & Offers</p>
              <p>Customer Reviews</p>
              <p>Terms and Conditions</p>
            </div>
            <div class="column4">
              <h4>Contact</h4>
              <p>📞 +92-332-0123456</p>
              <p>📧 TripGo@123.com</p>
              <p>🏢 Jinnah Road,Gujranwala</p>
            </div>
            <div class="column4">
              <h4>Follow Us</h4>
              <p>📍 Facebook/TripGo</p>
              <p>📍 Youtube/TripGo</p>
              <p>📍 Twitter/TripGo</p>
            </div>
          </div>
          <hr />
          <p class="copyright">© Rawaan Butt</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
