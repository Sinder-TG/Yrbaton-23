$("#address").suggestions({
    token: "3ee64e7edeea1353eed5038655d1808953f86ee7",
    type: "ADDRESS",
    onSelect: function (suggestion) {
        console.log(suggestion);
    },
});
