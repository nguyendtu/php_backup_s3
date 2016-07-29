#!/bin/bash

# base image.
FROM webdevops/php-apache

# refresh package index.
RUN apt-get update

# apache
RUN apt-get install apache2

RUN sudo a2dismod proxy_fcgi proxy
RUN sudo service apache2 restart
# php
RUN apt-get install php5.6

# mysql
RUN apt-get install mysql-server-5.7
RUN apt-get install mysql-client-5.7

# php5-mysql
RUN apt-get install php5-mysql
