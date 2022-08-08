#!/usr/bin/perl
#
#

use strict;

# $ENV{"REQUEST_METHOD"} =~ tr/a-z/A-Z/;

my $buffer = $ENV{"QUERY_STRING"}; 

# Split information into name/value pairs
my @pairs = split(/&/, $buffer);

print "Content-type:text/html\r\n\r\n";

print "<html>\n";
print "<head>\n";
print "<title>Hello Word - First CGI Program</title>\n";
print "</head>\n";
print "<body>\n";

foreach my $pair (@pairs)
{
    my ($name, $value) = split(/=/, $pair);
    $value =~ tr/+/ /;
    $value =~ s/%(..)/pack("C", hex($1))/eg;
    print "$name=$value<br />\n";
}

print "</body>\n";
print "</html>\n";

