# version 1.2.0

FROM amazon/aws-cli

RUN yum install -y net-tools jq nmap-ncat && \
    yum clean all

COPY ./watchdog.sh .

ENTRYPOINT ["./watchdog.sh"]
