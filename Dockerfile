# start from base
FROM ubuntu:18.04

LABEL maintainer="Your Name <youremailaddress@provider.com>"

#RUN apt-get update -y && \
#    apt-get install -y python-pip python-dev

RUN apt-get update && apt-get install -y \
        software-properties-common
RUN add-apt-repository ppa:deadsnakes/ppa
RUN apt-get update && apt-get install -y \
    python3.7 \
    python3-pip
RUN python3.7 -m pip install pip
RUN apt-get update && apt-get install -y \
    python3-distutils \
    python3-setuptools
RUN python3.7 -m pip install pip --upgrade pip

# We copy just the requirements.txt first to leverage Docker cache
COPY ./requirements.txt /app/requirements.txt

WORKDIR /app

RUN python3 -m pip install -r requirements.txt

RUN apt update

RUN apt install -y libsm6 libxext6 libxrender-dev

COPY . /app

RUN ls -la /app

# CMD ["python3", "./application.py" ]

ENTRYPOINT [ "python3" ]

CMD [ "application.py" ]