import React, { useState } from "react";
import { useCookies } from "react-cookie";

const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);

export function saveCookie(Cname, Cvalue) {
  setCookie(Cname, Cvalue);
}
