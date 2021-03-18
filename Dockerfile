FROM ruby:buster

COPY Gemfile-current ./Gemfile
COPY Gemfile-current.lock ./Gemfile.lock

RUN gem install bundler\
  && bundle install
