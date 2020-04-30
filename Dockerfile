FROM docker.pkg.github.com/kollegorna/asdf-docker/nodejs:latest

# Setup environment variables that will be available to the instance
ARG GITHUB_ACCESS_TOKEN
ARG DEBIAN_FRONTEND=noninteractive
ENV APP_HOME /app

USER root
RUN apt-get update
RUN apt-get install -y tzdata libvips libvips-dev
RUN mkdir -p $APP_HOME
RUN chown -R asdf:asdf $APP_HOME

# CD the folder
USER asdf
WORKDIR $APP_HOME

# Add any missing tools
ADD .tool-versions $APP_HOME
RUN cd $APP_HOME
RUN asdf install
RUN asdf current

# Needs to be run inside of the folder that has .tool-versions
#RUN npm config set @kollegorna:registry https://npm.pkg.github.com/
#RUN echo "//npm.pkg.github.com/:_authToken=${GITHUB_ACCESS_TOKEN}" >> ~/.npmrc

# Needed due to docker volumes only give you root:root chown by default.
RUN mkdir -p "$APP_HOME/node_modules" && chown asdf:asdf "$APP_HOME/node_modules"
RUN mkdir -p "$APP_HOME/.cache" && chown asdf:asdf "$APP_HOME/.cache"
RUN mkdir -p "$APP_HOME/public" && chown asdf:asdf "$APP_HOME/public"
