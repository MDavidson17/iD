iD.Entity = function(a, b) {
    if (!(this instanceof iD.Entity)) return new iD.Entity(a, b);

    _.extend(this, {tags: {}}, a, b);

    if (b) {
        this._updated = true;
    }

    if (iD.debug) {
        Object.freeze(this);
        Object.freeze(this.tags);
    }
};

iD.Entity.prototype = {
    update: function(attrs) {
        return iD.Entity(this, attrs);
    },

    created: function() {
        return this._updated && +this.id.slice(1) < 0;
    },

    modified: function() {
        return this._updated && +this.id.slice(1) > 0;
    }
};
