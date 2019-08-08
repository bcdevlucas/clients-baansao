<template>
  <Layout>
    <div class="hero-wrapper">
      <div
        v-if="getHeroById('page-hero') !== null"
        class="site-blocks-cover overlay inner-page"
        :style="`background-image: url(${getHeroById('page-hero').image});`"
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      >
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-10">
              <span class="sub-text"></span>
              <h1>{{ getHeroById('page-hero').title }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-wrapper bg-light">
      <div class="site-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-12">
              <h2 class="site-heading text-black mb-5">
                {{ pageSubTitle }}
              </h2>

              <form
                action="https://formspree.io/admin@firebrandwebsolutions.com"
                method="POST"
                class="p-5 bg-white"
              >
                <div class="row form-group">
                  <div class="col-md-12 mb-3 mb-md-0">
                    <label class="font-weight-bold" for="fullname"
                      >Full Name</label
                    >
                    <input
                      type="text"
                      id="fullname"
                      class="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div class="row form-group">
                  <div class="col-md-12">
                    <label class="font-weight-bold" for="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      class="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                </div>

                <div class="row form-group">
                  <div class="col-md-12">
                    <label class="font-weight-bold" for="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="5"
                      class="form-control"
                      placeholder="Write your message here."
                    ></textarea>
                  </div>
                </div>

                <div class="row form-group">
                  <div class="col-md-12">
                    <input
                      type="submit"
                      value="Send"
                      class="btn btn-primary rounded-0 btn-lg"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
  import HeroMixin from '~/mixins/HeroMixin';
  import SectionMixin from '~/mixins/SectionMixin';

  // Import static data
  import ContactData from '~/data/Contact.yml';

  export default {
    metaInfo: {
      title: "Contact"
    },
    mixins: [HeroMixin, SectionMixin],
    data() {
      return {
        // TODO: Require this data format for pages
        pageData: ContactData,
        pageTitle: ContactData.title,
        pageSubTitle: ContactData.subtitle
      }
    },
  };
</script>
