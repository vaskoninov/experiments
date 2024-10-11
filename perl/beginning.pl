

=my $name = "Vasil Ninov\n";
print $name;
=cut

my @arr = (1, 2,3, 4);

foreach (@arr) {
    print $_;
    if ($_ <3) {
        print $_ * 2;
    }
}
