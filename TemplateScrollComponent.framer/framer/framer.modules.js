require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"TemplateScrollComponent":[function(require,module,exports){
var TemplateScrollComponent,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

TemplateScrollComponent = (function(superClass) {
  var destroyChildren, flattenChildren, layersWithTemplateTags, updateComponent;

  extend(TemplateScrollComponent, superClass);

  TemplateScrollComponent.define("numberOfItems", {
    get: function() {
      return this.options.numberOfItems;
    },
    set: function(int) {
      if (int !== this.options.numberOfItems) {
        this.options.numberOfItems = int;
        return this.emit("change:numberOfItems");
      }
    }
  });

  TemplateScrollComponent.define("templateItem", {
    get: function() {
      return this.options.templateItem;
    },
    set: function(layer) {
      return this.options.templateItem = layer;
    }
  });

  TemplateScrollComponent.define("gutter", {
    get: function() {
      return this.options.gutter;
    },
    set: function(int) {
      if (int !== this.options.gutter) {
        this.options.gutter = int;
        return this.emit("change:gutter");
      }
    }
  });

  TemplateScrollComponent.define("forItemAtIndex", {
    get: function() {
      return this.options._forItemAtIndex;
    },
    set: function(fn) {
      if (fn !== this.options._forItemAtIndex) {
        this.options._forItemAtIndex = fn;
        return this.emit("change:forItemAtIndex");
      }
    }
  });

  function TemplateScrollComponent(options1) {
    var base, base1, base2, base3;
    this.options = options1 != null ? options1 : {};
    if ((base = this.options).numberOfItems == null) {
      base.numberOfItems = 1;
    }
    if ((base1 = this.options).gutter == null) {
      base1.gutter = 10;
    }
    if ((base2 = this.options)._forItemAtIndex == null) {
      base2._forItemAtIndex = null;
    }
    if ((base3 = this.options).templateItem == null) {
      base3.templateItem = null;
    }
    TemplateScrollComponent.__super__.constructor.call(this, this.options);
    this.on("change:numberOfItems", function() {
      return updateComponent(this, this.options._forItemAtIndex);
    });
    this.on("change:forItemAtIndex", function() {
      return updateComponent(this, this.options._forItemAtIndex);
    });
    this.on("change:gutter", function() {
      return updateComponent(this, this.options._forItemAtIndex);
    });
  }

  destroyChildren = function(layer) {
    var ref;
    return (ref = layer.children) != null ? ref.forEach(function(layer) {
      return layer.destroy();
    }) : void 0;
  };

  updateComponent = function(component, cb) {
    var i, index, itemsLen, layer, padding, proto, ref;
    if (cb && component.numberOfItems) {
      destroyChildren(component.content);
      itemsLen = component.numberOfItems - 1;
      padding = component.gutter;
      proto = component.templateItem;
      for (index = i = 0, ref = itemsLen; 0 <= ref ? i <= ref : i >= ref; index = 0 <= ref ? ++i : --i) {
        layer = cb(index, proto);
        layer.props = {
          parent: component.content,
          y: index * (layer.height + padding),
          name: layer.name + " " + index
        };
      }
      return component.updateContent();
    }
  };

  flattenChildren = function(layer) {
    return [layer].concat(layer.children.reduce(function(arr, layer) {
      return arr.concat(flattenChildren(layer));
    }, []));
  };

  layersWithTemplateTags = function(layer) {
    return flattenChildren(layer).filter(function(layer) {
      return /{([^}]*)}/.test(layer.text);
    });
  };

  TemplateScrollComponent.applyTemplate = function(layer, options, formatterOptions) {
    if (options == null) {
      options = {};
    }
    if (formatterOptions == null) {
      formatterOptions = {};
    }
    return layersWithTemplateTags(layer).forEach(function(layer) {
      if (layer.templateFormatter == null) {
        layer.templateFormatter = formatterOptions;
      }
      return layer.template != null ? layer.template : layer.template = options;
    });
  };

  return TemplateScrollComponent;

})(ScrollComponent);

module.exports = TemplateScrollComponent;


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2pvbmF0aGFubWF5L0RvY3VtZW50cy8gV29ya2luZyBGaWxlcy9GcmFtZXIvR2l0aHViL1RlbXBsYXRlU2Nyb2xsQ29tcG9uZW50L1RlbXBsYXRlU2Nyb2xsQ29tcG9uZW50LmZyYW1lci9tb2R1bGVzL1RlbXBsYXRlU2Nyb2xsQ29tcG9uZW50LmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGVtcGxhdGVTY3JvbGxDb21wb25lbnQgZXh0ZW5kcyBTY3JvbGxDb21wb25lbnRcbiAgICBAZGVmaW5lIFwibnVtYmVyT2ZJdGVtc1wiLFxuICAgICAgICBnZXQ6IC0+IEBvcHRpb25zLm51bWJlck9mSXRlbXNcbiAgICAgICAgc2V0OiAoIGludCApIC0+IFxuICAgICAgICAgICAgdW5sZXNzIGludCA9PSBAb3B0aW9ucy5udW1iZXJPZkl0ZW1zXG4gICAgICAgICAgICAgICAgQG9wdGlvbnMubnVtYmVyT2ZJdGVtcyA9IGludFxuICAgICAgICAgICAgICAgIEBlbWl0IFwiY2hhbmdlOm51bWJlck9mSXRlbXNcIlxuICAgIFxuICAgIEBkZWZpbmUgXCJ0ZW1wbGF0ZUl0ZW1cIixcbiAgICAgICAgZ2V0OiAtPiBAb3B0aW9ucy50ZW1wbGF0ZUl0ZW1cbiAgICAgICAgc2V0OiAoIGxheWVyICkgLT4gQG9wdGlvbnMudGVtcGxhdGVJdGVtID0gbGF5ZXJcbiAgICBcbiAgICBAZGVmaW5lIFwiZ3V0dGVyXCIsXG4gICAgICAgIGdldDogLT4gQG9wdGlvbnMuZ3V0dGVyXG4gICAgICAgIHNldDogKCBpbnQgKSAtPlxuICAgICAgICAgICAgdW5sZXNzIGludCA9PSBAb3B0aW9ucy5ndXR0ZXJcbiAgICAgICAgICAgICAgICBAb3B0aW9ucy5ndXR0ZXIgPSBpbnRcbiAgICAgICAgICAgICAgICBAZW1pdCBcImNoYW5nZTpndXR0ZXJcIlxuICAgICAgICBcbiAgICBAZGVmaW5lIFwiZm9ySXRlbUF0SW5kZXhcIixcbiAgICAgICAgZ2V0OiAtPiBAb3B0aW9ucy5fZm9ySXRlbUF0SW5kZXhcbiAgICAgICAgc2V0OiAoIGZuICkgLT5cbiAgICAgICAgICAgIHVubGVzcyBmbiA9PSBAb3B0aW9ucy5fZm9ySXRlbUF0SW5kZXhcbiAgICAgICAgICAgICAgICBAb3B0aW9ucy5fZm9ySXRlbUF0SW5kZXggPSBmblxuICAgICAgICAgICAgICAgIEBlbWl0IFwiY2hhbmdlOmZvckl0ZW1BdEluZGV4XCJcbiAgICBcbiAgICBjb25zdHJ1Y3RvcjogKCBAb3B0aW9ucz17fSApIC0+XG4gICAgICAgIEBvcHRpb25zLm51bWJlck9mSXRlbXMgPz0gMVxuICAgICAgICBAb3B0aW9ucy5ndXR0ZXIgPz0gMTBcbiAgICAgICAgQG9wdGlvbnMuX2Zvckl0ZW1BdEluZGV4ID89IG51bGxcbiAgICAgICAgQG9wdGlvbnMudGVtcGxhdGVJdGVtID89IG51bGxcbiAgICAgICAgXG4gICAgICAgIHN1cGVyIEBvcHRpb25zXG4gICAgICAgIFxuICAgICAgICAjIFVwZGF0ZSBldmVudHNcbiAgICAgICAgQG9uIFwiY2hhbmdlOm51bWJlck9mSXRlbXNcIiwgLT4gXG4gICAgICAgICAgICB1cGRhdGVDb21wb25lbnQgQCwgQG9wdGlvbnMuX2Zvckl0ZW1BdEluZGV4XG4gICAgICAgIEBvbiBcImNoYW5nZTpmb3JJdGVtQXRJbmRleFwiLCAtPiBcbiAgICAgICAgICAgIHVwZGF0ZUNvbXBvbmVudCBALCBAb3B0aW9ucy5fZm9ySXRlbUF0SW5kZXhcbiAgICAgICAgQG9uIFwiY2hhbmdlOmd1dHRlclwiLCAtPiBcbiAgICAgICAgICAgIHVwZGF0ZUNvbXBvbmVudCBALCBAb3B0aW9ucy5fZm9ySXRlbUF0SW5kZXhcbiAgICAgICAgICAgIFxuICAgIGRlc3Ryb3lDaGlsZHJlbiA9ICggbGF5ZXIgKSAtPlxuICAgICAgICBsYXllci5jaGlsZHJlbj8uZm9yRWFjaCAoIGxheWVyICkgLT5cbiAgICAgICAgICAgIGxheWVyLmRlc3Ryb3koKVxuXG4gICAgdXBkYXRlQ29tcG9uZW50ID0gKCBjb21wb25lbnQsIGNiICkgLT5cbiAgICAgICAgaWYgY2IgJiYgY29tcG9uZW50Lm51bWJlck9mSXRlbXNcbiAgICAgICAgICAgIGRlc3Ryb3lDaGlsZHJlbiBjb21wb25lbnQuY29udGVudFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpdGVtc0xlbiA9IGNvbXBvbmVudC5udW1iZXJPZkl0ZW1zIC0gMVxuICAgICAgICAgICAgcGFkZGluZyA9IGNvbXBvbmVudC5ndXR0ZXJcbiAgICAgICAgICAgIHByb3RvID0gY29tcG9uZW50LnRlbXBsYXRlSXRlbVxuXG4gICAgICAgICAgICBmb3IgaW5kZXggaW4gWyAwLi5pdGVtc0xlbiBdXG4gICAgICAgICAgICAgICAgbGF5ZXIgPSBjYiggaW5kZXgsIHByb3RvIClcbiAgICAgICAgICAgICAgICBsYXllci5wcm9wcyA9XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY29tcG9uZW50LmNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgIHk6IGluZGV4ICogKCBsYXllci5oZWlnaHQgKyBwYWRkaW5nICksXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGxheWVyLm5hbWUgKyBcIiBcIiArIGluZGV4XG5cbiAgICAgICAgICAgICMgRm9yY2UgdXBkYXRlIG9mIGNvbXBvbmVudFxuICAgICAgICAgICAgY29tcG9uZW50LnVwZGF0ZUNvbnRlbnQoKVxuICAgIFxuICAgICMgTG9vayBpbnRvIGxheWVyLmRlc2NlbmRhbnRzIGFzIGFuIGFsdGVybmF0aXZlXG4gICAgZmxhdHRlbkNoaWxkcmVuID0gKCBsYXllciApIC0+XG4gICAgICAgIHJldHVybiBbIGxheWVyIF0uY29uY2F0KCBsYXllci5jaGlsZHJlbi5yZWR1Y2UoICggYXJyLCBsYXllciApIC0+XG4gICAgICAgICAgICByZXR1cm4gYXJyLmNvbmNhdCBmbGF0dGVuQ2hpbGRyZW4gbGF5ZXJcbiAgICAgICAgLFtdICkgKVxuICAgIFxuICAgIGxheWVyc1dpdGhUZW1wbGF0ZVRhZ3MgPSAoIGxheWVyICkgLT5cbiAgICAgICAgcmV0dXJuIGZsYXR0ZW5DaGlsZHJlbiggbGF5ZXIgKVxuICAgICAgICAuZmlsdGVyICggbGF5ZXIgKSAtPlxuICAgICAgICAgICAgcmV0dXJuIC97KFtefV0qKX0vLnRlc3QgbGF5ZXIudGV4dFxuICAgIFxuICAgIEBhcHBseVRlbXBsYXRlID0gKCBsYXllciwgb3B0aW9ucz17fSwgZm9ybWF0dGVyT3B0aW9ucz17fSApIC0+XG4gICAgICAgIGxheWVyc1dpdGhUZW1wbGF0ZVRhZ3MoIGxheWVyICkuZm9yRWFjaCAoIGxheWVyICkgLT5cbiAgICAgICAgICAgIGxheWVyLnRlbXBsYXRlRm9ybWF0dGVyID89IGZvcm1hdHRlck9wdGlvbnNcbiAgICAgICAgICAgIGxheWVyLnRlbXBsYXRlID89IG9wdGlvbnNcblxubW9kdWxlLmV4cG9ydHMgPSBUZW1wbGF0ZVNjcm9sbENvbXBvbmVudCIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9y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
