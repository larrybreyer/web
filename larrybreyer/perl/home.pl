#!/usr/bin/perl

use strict;

my $BASEDIR = "/home/larry/web/larrybreyer";
my $BASEURL = "http://larrybreyer.com";


my ($content, $pair, $name, $value, $subject, $article);
my %MSG;

my $buffer = $ENV{'QUERY_STRING'};

my @pairs = split(/&/, $buffer);

foreach $pair (@pairs)
{
    ($name, $value) = split(/=/, $pair);
    if ( $name eq "subject" ) {
        $subject = $value;
    }
    if ( $name eq "article" ) {
        $article = $value;
    }

}

if ( $subject eq "" ) {
    $subject = "home";
}

if ( $article eq "" ) {
    $article = "intro";
}

$MSG{"home/mission"} = "$BASEDIR/home/mission.html";
$MSG{"home/intro"} = "$BASEDIR/home/intro.html";
$MSG{"home/author"} = "$BASEDIR/home/author.html";
$MSG{"lang/intro"} = "$BASEDIR/lang/intro.html";
$MSG{"religion/intro"} = "$BASEDIR/religion/intro.html";
$MSG{"religion/exist"} = "$BASEDIR/religion/exist.html";
$MSG{"science/intro"} = "$BASEDIR/science/intro.html";
$MSG{"hoax/intro"} = "$BASEDIR/hoax/intro.html";
$MSG{"hoax/co2"} = "$BASEDIR/hoax/co2.html";
$MSG{"hoax/consume"} = "$BASEDIR/hoax/consume.html";
$MSG{"hoax/demo"} = "$BASEDIR/hoax/demo.html";

print "Content-type: text/html

<head>
";

open TAGS, "<$BASEDIR/tags.html";
undef $/;      #Undefine record terminator
$content = <TAGS>;
close TAGS;
print $content;
$/ = "\n";     #Restore for normal behaviour later in script

print "

<LINK href='/home.css' rel='stylesheet' type='text/css'>
<title>Larry Breyer - Home</title>

</head>
";

print "
<body>
";

print "
<table width='720px' height='100px'>
  <tr>
    <td rowspan='3' height='108px' width='144px' align='center'>
      <span style='color: white;'>
        <img src='/Larry-Breyer-Logo.gif' alt='Logo' />
      </span>
    </td>
    <td align='center' height='18px'>Larry Breyer</td>
  </tr>
  <tr>
    <td height='36px' align='center'>CREATING A BETTER FUTURE</TD>
  </tr>
  <tr>
    <td height='18px' align='center'>
      <table>
        <tr>
          <td>
            <a href='$BASEURL/perl/home.pl?subject=home&article=intro'>Home</a>
          </td>
          <td>
            <a href='$BASEURL/perl/home.pl?subject=lang&article=intro'>Language</a>
          </td>
          <td>
            <a href='$BASEURL/perl/home.pl?subject=religion&article=intro'> Religion </a>
          </td>
          <td>
            <a href='$BASEURL/perl/home.pl?subject=science&article=intro'>Science</a>
          </td>
          <td>
            <a href='$BASEURL/perl/home.pl?subject=hoax&article=intro'>Hoaxes</a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
<table width='720px' height='756px'>
  <tr>
    <td width='144px' align='top'>
      <table width='144px' cellpadding=20>
        <tr>
          <td height='16px' align='left'>
";

if (  $subject eq "home" ) {
    print "
            <dl>
              <dt>
                <a href='$BASEURL/perl/home.pl?subject=home&article=intro'>Introduction</a>
              </dt>
              <dt>
                <a href='$BASEURL/perl/home.pl?subject=home&article=mission'>Mission</a>
              </dt>
              <dt>
                <a href='$BASEURL/perl/home.pl?subject=home&article=author'>Author</a>
              </dt>
            </dl>
    ";
}

if (  $subject eq "lang" ) {
    print "
            <dl>
              <dt>
                <a href='$BASEURL/perl/home.pl?subject=lang&article=intro'>Introduction</a>
              </dt>
            </dl>
    ";
}

if (  $subject eq "religion" ) {
    print "
            <dl>
              <dt>
                <a href='$BASEURL/perl/home.pl?subject=religion&article=intro'>Introduction</a>
              </dt>
              <dt>
                <a href='$BASEURL/perl/home.pl?subject=religion&article=exist'>Existence</a>
              </dt>
            </dl>
    ";
}

if (  $subject eq "science" ) {
    print "
            <dl>
              <dt>
                <a href='$BASEURL/perl/home.pl?subject=science&article=intro'>Introduction</a>
              </dt>
            </dl>
    ";
}

if (  $subject eq "hoax" ) {
  print "
    <dl>
      <dt>
        <a href='$BASEURL/perl/home.pl?subject=hoax&article=intro'>Introduction</a>
      </dt>
      <dt>
        <a href='$BASEURL/perl/home.pl?subject=hoax&article=co2'>Global Warming</a>
      </dt>
      <dt>
        <a href='$BASEURL/perl/home.pl?subject=hoax&article=consume'>Consumerism</a>
      </dt>
      <dt>
        <a href='$BASEURL/perl/home.pl?subject=hoax&article=demo'>Democracy</a>
      </dt>
    </dl>
  ";
}

    print "
          </td>
        </tr>
        <tr>
          <td height='612' align='center'>
            <span style='color: white;'>
              Sidebar
            </span>
          </td>
        </tr>
      </table>
    </td>
    <td bgcolor=#ffffff rules='none'>
      <span style='color: white;'>
        Body
      </span>

    ";

my $msgindex = "$subject/$article";

if ( defined $MSG{$msgindex} ) {
    open MSG, "<$MSG{$msgindex}";

} else {
    open MSG, "<$BASEDIR/MOTD.html";

}

undef $/;      #Undefine record terminator
$content = <MSG>;
close MSG;
print $content;
$/ = "\n";     #Restore for normal behaviour later in script

print "
      <table height='90%'>
        <tr>
          <td>
          </td>
        </tr>
      </table>



    </td>
  </tr>
</table>

</body>
";
