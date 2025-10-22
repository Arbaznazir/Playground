FROM ruby:3.3-alpine

# 1) set working dir
WORKDIR /app

# 2) copy Gemfile and Gemfile.lock first for caching
COPY Gemfile Gemfile.lock ./

# 3) install build tools needed for gems (only when necessary) and bundle install
#    (libffi-dev, build-base, openssl-dev are common requirements)
RUN apk add --no-cache build-base libffi-dev openssl-dev \
  && bundle install --jobs 4 --retry 3 \
  && apk del build-base

# 4) copy the rest of app files
COPY . .

# 5) document port (change if your app listens elsewhere)
EXPOSE 3000

# 6) start the app
CMD ["ruby", "app.rb"]
